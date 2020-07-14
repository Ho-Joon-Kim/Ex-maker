const crypto = require('crypto');//암호화 모듈
const mariadb = require('mariadb');//mariadb 사용 모듈
const dotenv = require('dotenv').config()//환경변수를 코드에서 제거하기 위한 모듈
const log = require('../../lib/log.js');

const connection = mariadb.createPool({//db 연결용 변수, 내부 변수는 환경변수로 설정.
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database
});


//설문 불러오기api O 
exports.loadpage = (async (ctx,next) => {
  const pin = ctx.request.body.pin;
  const id = ctx.request.body.id;
  let contents;

  const loadpage = (async () =>{
    let rows = await connection.query(`SELECT * FROM survey WHERE pin = '${pin}';`);
    contents = rows[0]
  });

  await loadpage();
  ctx.status = 200;
  ctx.body = {contents : contents};
});

//질문 답변api 
exports.answer = (async (ctx,next) => {
  const id = ctx.request.body.id;
  const pin = ctx.request.body.pin;
  const sub_name = ctx.request.body.sub_name;
  const answer = ctx.request.body.answer;
  const rate = ctx.request.body.rate;
  let check = true;

  const answer_f = (async () =>{
    for (let i = 0; i < answer.length; i++) {
      await connection.query(`UPDATE elements SET q${i+1} = q${i+1} + ${answer[i]} WHERE pin = '${pin}' AND sub_name = '${sub_name}';`);
    }

    await log.questioninsert(pin, sub_name, id, answer);
  });

  const answer_f_auth = (async () =>{
    let rows = await connection.query(`SELECT survey_u FROM elements WHERE pin = '${pin}' AND sub_name = '${sub_name}';`);
    let arr = rows[0]['survey_u'].split(',');

    for (let i = 0; i < arr.length; i++) {
      if(arr[i] == sub_name){ check = false; }
    }
    if(check) { await answer_f(); }
  });

  await answer_f_auth();
  ctx.status = 201;
  ctx.body = {check : check};
});

//평점 api 
exports.rate = (async (ctx,next) => {
  const id = ctx.request.body.id;
  const pin = ctx.request.body.pin;
  const sub_name = ctx.request.body.sub_name;
  const rate_var = ctx.request.body.rate;
  let check = true;

  const rate = (async () =>{
    
    await connection.query(`UPDATE elements SET rate = ${rate_var} WHERE pin = '${pin}' AND sub_name = '${sub_name}';`);

    await log.questioninsert(pin, sub_name, id, rate_var);
  });

  const rate_auth = (async () =>{
    let rows = await connection.query(`SELECT survey_u FROM elements WHERE pin = '${pin}' AND sub_name = '${sub_name}';`);
    let arr = rows[0]['survey_u'].split(',');

    for (let i = 0; i < arr.length; i++) {
      if(arr[i] == sub_name){ 
        console.log(arr[i]);
        check = false; 
      }
    }
    if(check) { await rate(); }
  });

  await rate_auth();
  ctx.status = 201;
  ctx.body = {check : check};
});

//평가완료api 
exports.send = (async (ctx,next) => {
  const id = ctx.request.body.id;
  const pin = ctx.request.body.pin;

  const send = (async () =>{
    let rows = await connection.query(`SELECT survey_u FROM surveys WHERE pin = '${pin}';`);
    await connection.query(`UPDATE surveys SET survey_u = '${rows[0]['survey_u']},${id}' WHERE pin = '${pin}';`);
    await log.surveyend(pin,id);
  });

  await send();
  ctx.status = 201;
  ctx.body = {check : true};
});

//평가완료 객체api 
exports.sendelement = (async (ctx,next) => {
  const id = ctx.request.body.id;
  const pin = ctx.request.body.pin;
  const sub_name = ctx.request.body.sub_name;

  const sendelement = (async () =>{
    let rows = await connection.query(`SELECT survey_u FROM elements WHERE pin = '${pin}' AND sub_name = ${sub_name};`);
    await connection.query(`UPDATE elements SET survey_u = '${rows[0]['survey_u']},${id}' WHERE pin = '${pin}' AND sub_name = ${sub_name};`);
    await log.elementsurveyend(pin,sub_name,id);
  });

  await sendelement();
  ctx.status = 201;
  ctx.body = {check : true};
});

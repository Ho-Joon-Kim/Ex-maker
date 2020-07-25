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
  let check = true;
  let arr

  const loadpage = async () =>{
    let rows = await connection.query(`SELECT * FROM surveys WHERE pin = '${pin}';`);
    contents = rows[0]

    arr = rows[0]['survey_u'].split(',');

    for (let i = 0; i < arr.length; i++) {
      if(arr[i] == id){ 
        console.log(arr[i]);
        check = false; 
      }
    }

  };

  await loadpage();

  ctx.status = 200;
  ctx.body = {contents : contents, check : check};
});

//질문 답변api  O
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
      console.log(arr[i]);
      if(arr[i] == id){ check = false; }
    }
    if(check) { await answer_f(); }
  });

  await answer_f_auth();

  
  ctx.status = 201;
  ctx.body = {check : check};
});

//평점 api O
exports.rate = (async (ctx,next) => {
  const id = ctx.request.body.id;
  const pin = ctx.request.body.pin;
  const sub_name = ctx.request.body.sub_name;
  const rate_var = ctx.request.body.rate;
  let check = true;

  const rate = (async () =>{
    let rows = await connection.query(`SELECT rate FROM elements WHERE pin = '${pin}' AND sub_name = '${sub_name}';`);
    await connection.query(`UPDATE elements SET rate = ${rows[0]['rate']} + ${rate_var} WHERE pin = '${pin}' AND sub_name = '${sub_name}';`);

    await log.rateinsert(pin, sub_name, id, rate_var);
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

//평점 불러오가api 
exports.loadrate = (async (ctx,next) => {
  const id = ctx.request.body.id;
  const pin = ctx.request.body.pin;
  let rate = 0;

  const loadrate = (async () =>{
    let rows = await connection.query(`SELECT rate,survey_u FROM elements WHERE pin = '${pin}' AND sub_name = ${sub_name};`);
    let arr = rows[0]['survey_u'].split(',');

    if(arr.length > 0){
      rate = rows[0]['rate']/arr.length;
    }
  });
  await loadrate();

  
  ctx.status = 200;
  ctx.body = {rate : rate};
});

//평가완료api O
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

//댓글쓰기api 
exports.comment = (async (ctx,next) => {
  const id = ctx.request.body.id;
  const pin = ctx.request.body.pin;
  const subname = ctx.request.body.subname;
  const comment = ctx.request.body.comment;

  const commentwrite = (async () =>{
    await connection.query(`INSERT INTO comment(id,pin,subname,comment) values('${id}','${pin}','${subname}','${comment}');`);
    await log.surveyend(pin,id);
  });

  await commentwrite();

  ctx.status = 201;
  ctx.body = {check : true};
});

//댓글 불러오기api 
exports.loadcomment = (async (ctx,next) => {


  
  ctx.status = 201;
  ctx.body = {check : true};
});




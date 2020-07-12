const mariadb = require('mariadb');//mariadb 사용 모듈
const dotenv = require('dotenv').config()//환경변수를 코드에서 제거하기 위한 모듈

const connection = mariadb.createPool({//db 연결용 변수, 내부 변수는 환경변수로 설정.
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database
});

//질문삽입 로그 
exports.questioninsert = (async(pin, sub_name, id, answer) => {
  let code = '설문 답 제출';
  
  await connection.query(`INSERT INTO logs (code, pin, sub_name, id, answer) VALUES ('${code}','${pin}','${sub_name}','${id}','${answer}');`);

  return true; 
});

//객체 설문 완료 로그 
exports.elementsurveyend = (async(pin, sub_name, id) => {
  let code = '객체 설문 완료';
  
  await connection.query(`INSERT INTO logs (code, pin, sub_name, id) VALUES ('${code}','${pin}','${sub_name}','${id}');`);

  return true; 
});

//설문 완료 로그 
exports.surveyend = (async(pin, id) => {
  let code = '설문 완료';
  
  await connection.query(`INSERT INTO logs (code, pin, id) VALUES ('${code}','${pin}','${id}');`);

  return true; 
});
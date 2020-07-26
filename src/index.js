const Koa = require('koa');
const Router = require('koa-router');
const logger = require('koa-logger');
const koaBody = require('koa-body');
const serve = require('koa-static');
const db = require('./db');
const {createReadStream} = require('fs');
const cors = require('@koa/cors');
const dotenv = require('dotenv').config()//환경변수를 코드에서 제거하기 위한 모듈

const fs = require('fs');
const path = require('path');
const http = require('http');

const app = new Koa();
const router = new Router();
const models = db.models;

const api = require('./api');

app.use(cors());
app.use(logger());//http 메소드 로거 사용
app.use(koaBody());//json 형식 파싱용




router.get('/',(ctx) => {
  ctx.body = "hello";
});


router.use('/api', api.routes()); // api 라우트를 /api 경로 하위 라우트로 설정
app.use(router.routes()).use(router.allowedMethods());



let serverCallback = app.callback();
let httpServer = http.createServer(serverCallback);


httpServer
.listen(8080, ()=>{console.log("success 8080")})
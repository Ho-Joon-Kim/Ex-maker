const Koa = require('koa');
const Router = require('koa-router');
const logger = require('koa-logger');
const koaBody = require('koa-body');
const serve = require('koa-static');
const db = require('./db');
const {createReadStream} = require('fs');
const cors = require('@koa/cors');

const fs = require('fs');
const path = require('path');

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
app.listen(3000);
console.log(`Running on http://localhost:3000`);

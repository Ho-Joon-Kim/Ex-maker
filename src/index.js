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

const indexHtml = fs.readFileSync(path.resolve(__dirname, './public/index.html'), { encoding: 'utf8' });
app.use(cors());
app.use(logger());//http 메소드 로거 사용
app.use(koaBody());//json 형식 파싱용

app.use(serve(path.resolve(__dirname, './public')));
router.get('/',(ctx) => {
  ctx.body = indexHtml;
});


router.use('/api', api.routes()); // api 라우트를 /api 경로 하위 라우트로 설정
app.use(router.routes()).use(router.allowedMethods());
app.listen(8080, () => { console.log('server is listening to port 8080'); });

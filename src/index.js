const Koa = require('koa');
const Router = require('koa-router');
const logger = require('koa-logger');
const koaBody = require('koa-body');
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
  ctx.type = 'html';
  ctx.body = createReadStream('./src/public/index.html');
});



router.use('/api', api.routes()); // api 라우트를 /api 경로 하위 라우트로 설정

app.use(router.routes()).use(router.allowedMethods());

/*
const config = {
  domain: 'example.com', // your domain
    https: {
    port: 8080,
    options: {
      key: fs.readFileSync(path.resolve(process.cwd(), 'certs/privkey.pem'), 'utf8').toString(),
      cert: fs.readFileSync(path.resolve(process.cwd(), 'certs/fullchain.pem'), 'utf8').toString(),
    },
  },
};

const serverCallback = app.callback();
const httpsServer = https.createServer(config.https.options, serverCallback);
httpsServer.listen(config.https.port, () => { console.log('server is listening to port 8080'); });*/

app.listen(8080, () => { console.log('server is listening to port 8080'); });

const Router = require('koa-router');


const api = new Router();

const use = require('./use');

api.use('/use', use.routes());

module.exports = api;
const Router = require('koa-router');

const use = new Router();

const useCtrl = require('./use.controller');

use.post('/loadpage', useCtrl.loadpage);
use.post('/answer', useCtrl.answer);
use.post('/send', useCtrl.send);
use.post('/sendelement', useCtrl.sendelement);




module.exports = use;
const Router = require('koa-router');

const use = new Router();

const useCtrl = require('./use.controller');

use.post('/loadpage', useCtrl.loadpage);
use.post('/answer', useCtrl.answer);
use.post('/rate', useCtrl.rate);
use.post('/rateche', useCtrl.rateche);
use.post('/send', useCtrl.send);
use.post('/sendelement', useCtrl.sendelement);
use.post('/comment', useCtrl.comment);
use.post('/loadcomment', useCtrl.loadcomment);




module.exports = use;
const Router = require('koa-router');

const use = new Router();

const useCtrl = require('./use.controller');

use.post('/loadpage', useCtrl.loadpage);
use.post('/answer', useCtrl.answer);
use.post('/rate', useCtrl.rate);
use.post('/loadrate', useCtrl.loadrate);
use.post('/send', useCtrl.send);
use.post('/comment', useCtrl.comment);
use.post('/loadcomment', useCtrl.loadcomment);




module.exports = use;
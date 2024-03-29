
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var firstpag = require('./routes/firstpag');
var bsframework=require('./routes/bsframework')
var sys = require('./routes/sys')
var sysdata=require('./Data/sys_data')
var http = require('http');
var path = require('path');
var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.html', require('ejs').__express);  
app.set('view engine', 'html');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);
app.get('/firstpag', firstpag.firstpag);
app.get('/secpag', firstpag.secpag);
app.get('/bsframework',bsframework.index);
app.get('/framework',bsframework.framework);
app.get('/navdetail',bsframework.navdetail);
app.get('/sysUser',sys.usermanage);
app.get('/data/usermanageData',sysdata.usermanageData)
app.get('/data/usermanageData2',sysdata.usermanageData2)

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

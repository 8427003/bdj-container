/**
 * @overview
 *
 * @author 
 * @version 2016/11/07
 */
/**
 * @overview
 *
 * @author
 * @version 2016/10/12
 */

var path = require('path');
var http = require('http');
var express = require('express');
var app = express();

var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

/**
 * 转给 Roter 处理路由
 */

var appPath,
    publicPath,
    viewsPath,
    controllerPath,
    route,
    faviconPath;

var config = {};

appPath = config.appPath || path.join(__dirname, '/app');
publicPath = config.publicPath || path.join(__dirname, '/public');
viewsPath = config.viewsPath || path.join(appPath, '/views');
controllerPath = config.controllerPath || path.join(appPath, '/controllers');
faviconPath = config.faviconPath || path.join(__dirname, '/public/favicon.ico');

app.set('views', viewsPath);
app.use(express.static(publicPath));

//注册ejs模板为html页。简单的讲，就是原来以.ejs为，现在的后缀名可以//是.html了
app.engine('.html', require('ejs').__express);

//设置视图模板的默认后缀名为.html,避免了每次res.Render("xx.html")的尴尬
app.set('view engine', 'html');

app.use(require('express-ejs-layouts'));
app.set('layout', 'page/layouts/default');

module.exports = app;


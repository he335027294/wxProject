//1:加载相应模块
const express = require("express");
const mysql = require("mysql");
const pool = require("./pool");
const bodyParser = require('body-parser');
//2:创建express服务器
var app = express();
app.use( bodyParser.urlencoded({extended: true}) );
const routerUpdate=require("./router/update")
const routerType= require("./router/type");
const routerHome= require("./router/home");
const routerDetail=require("./router/detail");
const routerUser=require("./router/user");
app.use(express.static(__dirname+"/public"));
//3:绑定监听端口
app.listen(3000);
app.use("/type",routerType);
app.use("/home",routerHome);
app.use("/detail",routerDetail);
app.use("/user",routerUser);
app.use("/update",routerUpdate);

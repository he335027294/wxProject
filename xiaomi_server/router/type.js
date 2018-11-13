const pool = require("../pool");
const express = require("express");
var router = express.Router();
router.get("/type",(req,res)=>{
    var obj=[];
    var wait1=function(){
        var p=new Promise(function(resolve, reject){
            var sql1 = "SELECT * FROM `xm_goodlist` WHERE `goodtype`='jiadian'";
            pool.query(sql1,(err,result)=>{
                if(err)throw err;
                obj.push(result);
                resolve();
            }); 
        })
        return p;
    }
    var wait2=function(){
        var p=new Promise(function(resolve, reject){
            var sql2 = "SELECT * FROM `xm_goodlist` WHERE `goodtype`='shouji'";
            pool.query(sql2,(err,result)=>{
                if(err)throw err;
                obj.push(result);
                resolve();
            });
        })
        return p;
    }
    var wait3=function(){
        var p=new Promise(function(resolve, reject){
            var sql3 = "SELECT * FROM `xm_goodlist` WHERE `goodtype`='zhineng'";
            pool.query(sql3,(err,result)=>{
                if(err)throw err;
                obj.push(result);
                resolve();
            });
        })
        return p;
    }
    var wait4=function(){
        var p=new Promise(function(resolve, reject){
            var sql4 = "SELECT * FROM `xm_goodlist` WHERE `goodtype`='huwai'";
            pool.query(sql4,(err,result)=>{
                if(err)throw err;
                obj.push(result);
                resolve();
            });
        })
        return p;
    }
    var wait5=function(){
        var p=new Promise(function(resolve, reject){
            var sql5 = "SELECT * FROM `xm_goodlist` WHERE `goodtype`='yifu'";
            pool.query(sql5,(err,result)=>{
                if(err)throw err;
                obj.push(result);
                resolve();
            });
        })
        return p;
    }
    var wait6=function(){
        var p=new Promise(function(resolve, reject){
            var sql6 = "SELECT * FROM `xm_goodlist` WHERE `goodtype`='yinshi'";
            pool.query(sql6,(err,result)=>{
                if(err)throw err;
                obj.push(result);
                resolve();
            });
        })
        return p;
    }
    var wait7=function(){
        var p=new Promise(function(resolve, reject){
            var sql7 = "SELECT * FROM `xm_goodlist` WHERE `goodtype`='meizhuang'";
            pool.query(sql7,(err,result)=>{
                if(err)throw err;
                obj.push(result);
                resolve();
                res.send(obj);
            });
        })
        return p;
    }
    wait1().then(wait2).then(wait3).then(wait4).then(wait5).then(wait6).then(wait7);//第一个promise需用()调用，then()中仅仅写函数名！  
}) 

module.exports = router;
const pool = require("../pool");
const express = require("express");
var router = express.Router();
router.get("/check",(req,res)=>{
    var uphone=req.query.uphone;
    var sql="select count(id) as c from xm_userlist where uphone = ?";
    pool.query(sql,[uphone],(err,result)=>{
        if(err) throw error;
        if(result[0].c==0){
            res.send("OK");
        }else{
            res.send("NO"); 
        }     
    })
    //res.send(uphone);
}) 
router.post("/register",(req,res)=>{
    var uphone=req.body.uphone;
    var upwd=req.body.upwd;
    var uname=uphone;
    var sql="INSERT INTO xm_userlist VALUES(null,default,?,?,?,default,default,default,default)";
    pool.query(sql,[uphone,upwd,uname],(err,result)=>{
        if(err) throw error;
        if(result.affectedRows!=0){
            res.send({code:1,msg:"ok"})
        }else{
            res.send({code:-1,msg:"register failed"})
        }
    })
})
router.get("/login",(req,res)=>{
    var uphone = req.query.uphone;
    var upwd = req.query.upwd;
    var sql="select * from xm_userlist where uphone=? AND upwd=?";
    pool.query(sql,[uphone,upwd],(err,result)=>{
        if(err) throw error;
        if(result.length==0){
            res.send({code:-1,msg:"用户名或密码错误"})
        }else{
            res.send({code:1,msg:"登陆成功",info:result[0]});
        } 
    })
})
router.get("/user",(req,res)=>{
    var id = req.query.id;
    var sql="select * from xm_userlist where id=?";
    pool.query(sql,[id],(err,result)=>{
        if(err) throw error;
        res.send(result);
    })
})
module.exports = router;
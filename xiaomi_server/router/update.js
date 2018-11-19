const pool = require("../pool");
const express = require("express");
var router = express.Router();
router.post("/address",(req,res)=>{
    var address=req.body.address;
    var id=req.body.id;
    var sql="update xm_userlist set `uaddress`=? WHERE id = ?";
    pool.query(sql,[address,id],(err,result)=>{
        //console.log(result);
        if(err) throw error;
        if(result.affectedRows!=0){
            res.send({code:"1",msg:"修改成功"});
        }
    })
})
router.post("/userinfo",(req,res)=>{
    let {uname,usex,uzone,ubirth,id}=req.body;
    var sql="update xm_userlist set `uname`=? ,`usex`=?,`uzone`=?,`ubirth`=? WHERE id = ?"
    pool.query(sql,[uname,usex,uzone,ubirth,id],(err,result)=>{
        if(err) throw error;
        if(result.affectedRows!=0){
            res.send({code:1,msg:"修改成功"});
        }else{
            res.send({code:-1,msg:"操作失败"});
        }
    })
})
router.get("/checkupwd",(req,res)=>{
    let {id,upwd}=req.query;
    var sql="select count(id) as c from xm_userlist where id=? and upwd=?";
    pool.query(sql,[id,upwd],(err,result)=>{
        if(err){throw err}
        if(result[0].c==1){
            res.send({code:1,msg:"旧密码输入正确"})
        }else{
            res.send({code:-1,msg:"旧密码错误！"})
        }
    })
})
router.post("/setupwd",(req,res)=>{
    let {id,upwd}=req.body;
    var sql="update xm_userlist set `upwd`=? WHERE id = ?";
    pool.query(sql,[upwd,id],(err,result)=>{
        if(err) throw error;
        if(result.affectedRows!=0){
            res.send({code:1,msg:"修改成功"});
        }else{
            res.send({code:-1,msg:"操作失败"});
        }
    })
})
module.exports = router;
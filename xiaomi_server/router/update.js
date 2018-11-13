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
module.exports = router;
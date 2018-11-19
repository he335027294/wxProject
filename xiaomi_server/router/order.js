const pool = require("../pool");
const express = require("express");
var router = express.Router();
router.post("/order",(req,res)=>{
    var userId=req.body.userId;
    var cartItems=JSON.parse(req.body.cartItems);
    for(let ele of cartItems){
        if(ele.selected==true){
            var sql="INSERT INTO xm_orderlist VALUES(null,?,?,?)"
            pool.query(sql,[userId,ele.id,ele.value],(err,result)=>{
                if(err){throw err}
            })  
        }
    }
    res.send({code:1,msg:"提交成功"})
})
router.get("/getlist",(req,res)=>{
    var userId=req.query.userId;
    var orderlist=[];
    var sql="select A.*,B.title,B.price from xm_orderlist A left join xm_goodlist B on A.goodId=B.id where A.userId = ? "
    pool.query(sql,[userId],(err,result)=>{
        if(err) throw(err)
        orderlist=result;
        res.send(orderlist);
    })   
})
router.post("/clear",(req,res)=>{
    var userId=req.body.userId;
    var sql="DELETE FROM `xm_orderlist` WHERE `userId`=?"
    pool.query(sql,[userId],(err,result)=>{
        if(err){ throw err}
        res.send({code:1,msg:"操作成功！"})
    })
})
module.exports = router;
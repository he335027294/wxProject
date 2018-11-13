const pool = require("../pool");
const express = require("express");
var router = express.Router();
router.get("/detail",(req,res)=>{
    //SELECT * FROM `xm_goodlist` WHERE `goodtype`='yinshi'
    var id=req.query.id;
    var sql="SELECT * FROM `xm_goodlist` WHERE id=?";
    pool.query(sql,[id],(err,result)=>{
        if(err) throw err;
        res.send(result[0]);
    })
}) 

module.exports = router;
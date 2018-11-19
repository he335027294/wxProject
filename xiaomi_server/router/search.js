const pool = require("../pool");
const express = require("express");
var router = express.Router();
router.get("/search",(req,res)=>{
    var words=req.query.words;
    var sql=`SELECT * FROM xm_goodlist WHERE title LIKE '%${words}%' or info LIKE '%${words}%'`
    pool.query(sql,(err,result)=>{
        if(err){throw new Error("Mysql failed to work!"+err)}
        res.send(result);
    })
}) 

module.exports = router;
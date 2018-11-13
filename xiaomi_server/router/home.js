const pool = require("../pool");
const express = require("express");
var router = express.Router();
router.get("/imagelist",(req,res)=>{
    var sql = "SELECT `id`, `img_url`, `title`, `pic_type` FROM `xm_imagelist` WHERE `pic_type` = 'banner'";
   pool.query(sql,(err,result)=>{
       if(err)throw err;
       res.send(result);
   })  
}) 
router.get("/breif",(req,res)=>{
    var obj={};
    var process=0;
    var sql = "SELECT `id`, `img_url`, `title`, `pic_type` FROM `xm_imagelist` WHERE `pic_type` = 'breif'";
    pool.query(sql,(err,result)=>{
        if(err)throw err;
        obj.breif=result;
        process+=50;
        if(process==100){
            res.send(obj);
        } 
    })
    var sql = "SELECT `id`, `img_url`, `title`, `pic_type` FROM `xm_imagelist` WHERE `pic_type` = 'hongbao'";
    pool.query(sql,(err,result)=>{
        if(err)throw err;
        obj.hongbao=result;
        process+=50;
        if(process==100){
            res.send(obj);
        } 
    })
}) 
router.get("/today",(req,res)=>{
    var sql = "SELECT `id`, `img_url`, `title`, `info`, `goodtype`, `price`, `ishot` FROM `xm_goodlist` WHERE `ishot`=1";
    pool.query(sql,(err,result)=>{
        if(err)throw err;
        res.send(result);
    })  
});
module.exports = router;
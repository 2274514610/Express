//路由实例上的路由模块
const express = require('express');
const router = express.Router();

router.get('/1',(req,res)=> {
    res.send('柳岩的数据')
});
router.get('/2',(req,res)=> {
    res.send('岳云鹏的数据')
});
router.get('/3',(req,res)=> {
   res.send('唐老鸭的数据')
});

module.exports = router;
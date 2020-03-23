const express = require('express');
const path = require('path');
const app = express();
const router = express.Router();
// const bodyParser = require('body-parser');

// // 解析 application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }));
//
// // 解析 application/json
// app.use(bodyParser.json());

// 目前body-parser已经被吸收进express框架中,我们可以直接这样写
app.use(express.urlencoded({extended:false}));
app.use(express.json());

router.get('/03.html',(req,res)=> {
   res.sendFile(path.resolve(__dirname,'./03.html'));
});

router.post('/getUserInfo',(req,res)=> {
    res.send(req.body)
});
router.post('/getMsg',(req,res)=> {
    res.send(req.body)
});

app.use(router);
app.listen(3000);
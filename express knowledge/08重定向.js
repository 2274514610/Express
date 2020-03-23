const express = require('express');
const app = express();

app.get('/pc',(req,res)=> {
   let useAgent = req.headers['user-agent'];  //根据它来判断是手机端还是pc端
   // console.log(useAgent)
    if(useAgent.indexOf('iPhone')>=0) { //手机端
        res.redirect('/m')
    }else {
        res.send('<h1>pc端网页</h1>')
    }
});

app.get('/m',(req,res)=> {
   res.send('<h1>移动端</h1>')
});

app.listen(3000);
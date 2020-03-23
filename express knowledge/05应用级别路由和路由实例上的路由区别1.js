//应用级别的路由
const express = require('express');
const path = require('path');
let app = express();

app.get('/index.html',(req,res)=> {
   res.sendFile(path.resolve(__dirname,'./05index.html'));
});

//这样写比较繁琐不灵活
app.get('/person/1',(req,res)=> {
    res.send('柳岩的数据')
});

app.get('/person/2',(req,res)=> {
    res.send('岳云鹏的数据')
});

app.get('/person/3',(req,res)=> {
    res.send('唐老鸭的数据')
});

app.listen(3000)
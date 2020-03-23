const express = require('express');
const path = require('path');

let app = express();

app.get('/01.html', (req, res) => {
    res.sendFile(path.join(__dirname, '/01.html'));
});

app.post('/getUser', (req, res) => {
    let str = '';
    req.on('data', (chunk) => {
       str += chunk;
    });
    req.on('end', () => {
       console.log(str)
    });
    res.send('收到了客户端提交的表单信息')
});

app.get('/getUser',(req,res)=> {
   console.log(req.query);
   res.send(req.query)
});
app.listen(3000);
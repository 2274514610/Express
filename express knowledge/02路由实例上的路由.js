const express = require('express');
const path = require('path');

let app = express();
let router = express.Router();

router.get('/02.html',(req,res)=> {
   res.sendFile(path.resolve(__dirname,'./02.html'));
});

router.post('/getUserInfo',(req,res)=> {
    res.send('提交表单成功')
});

app.use(router);
app.listen(3000);
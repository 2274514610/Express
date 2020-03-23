const express = require('express');
const path = require('path');
const app = express();

app.get('/downImage',(req,res)=> {
   res.download(path.resolve(__dirname,'01.png'))
});

app.listen(3000);
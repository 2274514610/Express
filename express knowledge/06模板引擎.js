const express = require('express');
const path = require('path');

let app = express();
let router = express.Router();
app.use(router);

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

app.get('/news',(req,res)=> {
   let arr = [
       {
           title: '习近平以三“新”续写中朝友谊新篇章',
           hTitle: '第一篇'
       },
       {
           title: '中央发文：涉黑涉恶和“村霸”都不能再当村官',
           hTitle: '第二篇'
       }
   ];
   let number = Number(req.query.num);
   res.render('news',{title:arr[number].title,hTitle:arr[number].hTitle})
});

app.listen(3000);
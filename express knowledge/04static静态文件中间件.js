const express = require('express');
const path = require('path');
const router = express.Router();
let app = express();
app.use('/static', express.static(path.resolve(__dirname, './static')))

router.get('/index.html',(req,res)=> {
   res.sendFile(path.resolve(__dirname,'./04index.html'))
});
//在不使用中间件的情况下，我们要把静态资源文件再重新发送一下  这样每次都要重新发送，很麻烦，我们使用express.static这个中间键
// router.get('/static/04index.css',(req,res)=> {
//    res.sendFile(path.resolve(__dirname,'./static/04index.css'))
// });

app.use(router);
app.listen(3000);
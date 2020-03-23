const express = require('express');
const path = require('path');

const app = express();
const router = express.Router();

// router.get('/01.html',(req,res,next)=> {
//    console.log('第一个路由');
//    // res.send('第一个路由');
//    next()
// });
//
// router.get('/01.html',(req,res)=> {
//     console.log('第二个路由');
//     res.send('第二个路由')
// });

router.get('/03.html', (req, res,) => {
    res.sendFile(path.resolve(__dirname, './03.html'))
});
// 第一种中间件的写法  这个路由就叫中间件   先经过它,再到我们的路由实例上
// router.post('*', (req, res, next) => {
//     let str = '';
//     req.on('data', chunk => {
//         str += chunk
//     });
//     req.on('end', () => {
//         req.body = str;
//         next()
//     });
// });
// router.post('/getUSerInfo', (req, res) => {
//     res.send(req.body)
// });
//
// router.post('/getMsg',(req,res)=> {
//     res.send(req.body)
// });

//第二种中间件的写法
// function parseBody(req,res,next) {
//     let str = '';
//     req.on('data',chunk=> {
//         str += chunk
//     });
//     req.on('end',()=> {
//         req.body = str;
//         next();
//     })
// }
// router.post('/getUserInfo',parseBody,(req,res)=> {
//     res.send(req.body)
// });
//
// router.post('/getMsg',parseBody,(req,res)=> {
//    res.send(req.body)
// });

// 第三种中间件的写法 不管是post请求,还是option请求,都会先经过它
router.use(function parseBody(req,res,next) {
    let str = '';
    req.on('data',chunk=> {
        str += chunk
    });
    req.on('end',()=> {
        req.body = str;
        next();
    })
});
router.post('/getUserInfo',(req,res)=> {
    res.send(req.body)
});

router.post('/getMsg',(req,res)=> {
   res.send(req.body)
});
app.use(router);
app.listen(3000);
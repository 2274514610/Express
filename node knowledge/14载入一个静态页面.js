const http = require('http');   //创建服务
const fs = require('fs');     //文件操作模块
const url = require('url');  //解析路径
const path = require('path'); //绝对路径

const mime = require('mime');   //通过后缀名,设置正确的content-type值

let server = http.createServer((req, res) => {
    let urlName = req.url;
    let urlObj = url.parse(urlName);
    let pathName = urlObj.pathname;
    if (pathName == '/index1.html') {
        fs.readFile(path.join(__dirname, pathName), (err, data) => {
            if (err) {
                console.log(err);
                return
            }
            res.setHeader('content-type', 'text/html;charset=utf-8');
            res.write(data);
            console.log('读取文件成功');
            res.end()
        })
    } else {  //静态资源有一个自动载入机制
        fs.readFile(path.join(__dirname, pathName), (err, data) => {
            if (err) {
                res.write('<h1>页面找不到了,404</h1>');
                res.stateCode = 404;
                res.end()
            } else {
                // res.setHeader('content-type', 'image/jpeg');  静态资源直接使用插件进行响应头设置   node-mime
                let extname = path.extname(pathName);  //获取文件后缀名  例如:index.html => .html
                let resultExtname = extname.substring(1);  //通过substring方法,去掉 .得到 html
                console.log(resultExtname);
                res.setHeader('content-type',mime.getType(resultExtname));
                console.log(mime.getType(resultExtname));
                res.write(data);
                console.log('读取成功');
                res.end()
            }
        })
    }
});

server.listen(3000);
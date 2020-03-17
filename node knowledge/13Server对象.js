const http = require('http');
const fs = require('fs');
const url = require('url');
const qs = require('qs');

//req主要获取请求头及其他请求的信息
//res上有很多的方法和属性,以下几个是我们经常使用到的
//例如:url 用户访问你的网址

let server = http.createServer((req,res)=> {
    // console.log(req.url);   //请求路径
    // console.log(url.parse(req.url));  //解析请求路径
    // console.log(req.httpVersion);   //http版本号
    // console.log(res);  //响应信息
    // console.log(req.headers);   //请求头信息
    // console.log(req.method)    //请求的方法

    let urlObj = url.parse(req.url);
    // console.log(qs.parse(urlObj.query));   //将url解析成对象模式
    if (req.url == '/index.html') {
        fs.readFile('./index.html',(err,data)=> {
            if(err) {
                res.write('404');
                res.end();
                return
            }
            res.setHeader('content-type','text/html;charset=utf-8');
            res.write(data);
            res.end()
        })
    }else {
        res.write('404');
        res.end();
    }
});

server.listen(3000);
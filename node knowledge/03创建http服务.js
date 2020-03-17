const http = require('http');     //http是node.js原装自带的

let server = http.createServer((request, response) => {
    response.setHeader('Content-Type','text/html;charset=utf-8');   //如果不设置响应头，中文会乱码
    response.write('<h1>来一个中文</h1>');
    response.end();   //告诉浏览器已经写完了
});

server.listen(3000)
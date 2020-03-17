const detail = require('./04-1');   //导入
const request = require('request');  //引入爬虫模块
const fs = require('fs');

request('https://www.baidu.com',function (err,response,body) {
    // console.log(body)
    fs.writeFile('baidu.html',body,function(err){
        if(err) {
            console.log(err)
        }else {
            console.log('爬取成功')
        }
    })
});

// console.log(detail);

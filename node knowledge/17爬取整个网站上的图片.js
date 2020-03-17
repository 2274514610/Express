//爬取整个网站上的图片,我们需要第三方插件进行处理   cheerio   npm install cheerio -S

const cheerio = require('cheerio');   //快速，灵活和精益实现的核心jQuery专为服务器设计。
const request = require('request');   //爬取文件资源的第三方插件
const fs = require('fs');
const path = require('path');

let address = 'https://www.buxiuse.com/';  //网站地址

//第一步：先爬取得到html
//第二步：用cheerio读取爬取回来的html
//第三步：用jquery语法得到所有的img
//第四步：将img的src得到
//第五步：遍历所有的src 爬取图片数据并写入

request.get(address, (err, res, body) => {
    // console.log(body);
    let $ = cheerio.load(body);
    let arr = [];  //存储src中的路径
    $('img').each((index, item) => {  //jquery中的遍历方法   遍历所有的img标签
        arr.push($(item).attr('src'));
    });
    console.log(arr);
    for(let i = 0;i<arr.length; i++) {
        let nameArr = arr[i].split('/');
        let name = nameArr[nameArr.length - 1];
        request.get(arr[i]).pipe(fs.createWriteStream(path.join(__dirname,'/AllImages',name)))
    }
});



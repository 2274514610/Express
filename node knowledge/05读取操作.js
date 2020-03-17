const fs = require('fs');

//这是一个异步读取文件的操作
// fs.readFile('05.txt','utf-8',(err,data)=> {
//     if(err) {
//         console.log(err);
//         return
//     }
//     console.log("读取成功",data)
// });
//
// console.log("我先打印")

//这是一个同步读取文件的操作
let str = fs.readFileSync('05.txt','utf-8');
console.log(str)
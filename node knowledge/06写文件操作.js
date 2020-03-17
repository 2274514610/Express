const fs = require('fs')

let str = '我是写文件操作'
//异步写文件
// fs.writeFile('./06.txt',str,(err)=> {
//     if(err) {
//         console.log(err);
//         return
//     }
// });

//同步写文件
// fs.writeFileSync('./06.txt',str,(err)=> {
//     if(err) {
//         console.log(err);
//         return
//     }
// });

//追加文件内容
let str1 = '我是追加的一句话';

fs.appendFile('./06.txt',str1,(err)=> {
    if(err) {
        console.log(err);
        return
    }
});
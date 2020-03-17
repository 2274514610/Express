const fs = require('fs');

//读取文件夹操作
// fs.stat('07demo1','utf-8',(err,data) => {
//     if(err) {
//         console.log(err);
//         return
//     }
//     console.log(data)
// });

//读取文件操作
fs.stat('./我的文件夹','utf-8',(err,data)=> {
    if(err) {
        console.log(err);
        return
    }
    console.log(data)
});


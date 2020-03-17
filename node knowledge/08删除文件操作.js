const fs  = require('fs');

//删除文件操作
// fs.unlink('./07demo1.txt',(err)=> {
//     if(err) {
//         console.log(err);
//         return
//     }
//     console.log('删除成功')
// });

//删除文件夹操作
fs.rmdir('07demo1',(err)=> {
    if(err) {
        console.log(err);
        return
    }
    console.log('删除成功')
});

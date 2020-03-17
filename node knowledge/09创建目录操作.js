const fs = require('fs');

//判断文件夹是否存在
fs.exists('./09我的文件夹',(err,result)=> {
    if(err) {
        console.log(err)
        return
    }
    console.log(result)
    if(!result) {
        fs.mkdir('./09我的文件夹',(err)=> {
            if(err) {
                console.log(err);
                return
            }
        })
    }
})

//创建目录操作  如果文件夹已经存在了，就会报错
// fs.mkdir('./09我的文件夹',(err)=> {
//     if(err) {
//         console.log(err);
//         return
//     }
// });

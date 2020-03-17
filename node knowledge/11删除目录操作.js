const fs = require('fs');

fs.rmdir('./09我的文件夹',(err)=> {
    if(err) {
        console.log(err)
        return
    }
    console.log('删除成功')
});
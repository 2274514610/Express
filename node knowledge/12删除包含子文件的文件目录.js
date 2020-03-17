const fs = require('fs');

function delDirection(path) {
    let arr = fs.readdirSync(path);
    for (let i = 0; i < arr.length; i++) {
        let result = fs.statSync(path + '/' + arr[i]);
        if(result.mode == 16822) {  //是一个文件夹
            let deepPath = path + '/' + arr[i];
            delDirection(deepPath)
        }else {
            fs.unlinkSync(path + '/' + arr[i]);
        }
    }
    fs.rmdirSync(path)
}

delDirection('./我的文件夹');
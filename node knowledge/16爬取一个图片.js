const address = 'https://tva1.sinaimg.cn/large/0080xEK2gy1gch2sp9ksij30qo0hsgmg.jpg';
//在这里我们通过第三方插件进行图片的爬取   request   npm install request -S

const request = require('request');   //爬取文件资源的第三方插件
const fs = require('fs');

//pipe是管道的意思，这段代码的意思是网上爬取的资源,不仅过任何处理，通过管道，直接传入到fs.createWritesStream(创建一个写入流)
request.get(address).pipe(fs.createWriteStream('01.jpg'));




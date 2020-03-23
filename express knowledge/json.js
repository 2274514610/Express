const express = require('express');
const router = express.Router();

router.get('/json',(req,res)=> {
   res.json({
       data: [
           {
               name: '蔡徐坤',
               sex: 'man'
           },
           {
               name: '孙红雷',
               sex: 'man'
           },
           {
               name: '贾静雯',
               sex: 'woman'
           }
       ]
   })
});

module.exports = router;
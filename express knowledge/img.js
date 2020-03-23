const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/01.jpg',(req,res)=> {
   res.sendFile(path.resolve(__dirname,'./static/images/01.jpg'))
});

module.exports = router;
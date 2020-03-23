const express = require('express');
const path = require('path');
const app = express();
const router = express.Router();
const PersonRouter = require('./05router');
const imageRouter = require('./img');
const jsonRouter = require('./json');
app.use(router);

router.get('/index.html',(req,res)=> {
   res.sendFile(path.resolve(__dirname,'./05index.html'))
});

router.use('/person',PersonRouter);
router.use('/images',imageRouter);
router.use('/detail',jsonRouter);
app.listen(3000);
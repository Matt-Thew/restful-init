const express = require('express');
const router = express.Router();

router.get('/', (req,res)=>{
    res.send('hellod');
})

router.get('/second', (req,res)=>{
    res.send('second');
})

module.exports = router;
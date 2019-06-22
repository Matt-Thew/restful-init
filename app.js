const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');

require('dotenv/config');

app.use(bodyParser.json());

const postRoute = require('./routes/post');
app.use('/post', postRoute);


app.get('/', (req,res)=>{
    res.send('hellod');
})



mongoose.connect(
process.env.DB_CONNECTION,
{useNewUrlParser: true},
() =>{
    console.log('connect db success');
})
app.listen(3000)
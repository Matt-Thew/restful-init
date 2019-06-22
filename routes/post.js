const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
// router.get('/', (req,res)=>{
//     res.send('hellod');
// })

router.get('/',async (req,res)=>{
    try{
        const posts = await Post.find();

    }catch(err){
        res.json(err);
    }
})

// router.post('/', (req, res) => {
//     const post = new Post({
//         title: req.body.title,
//         description: req.body.description
//     });
//     // console.log(post);
//     // return;
//     post.save()
//     .then(data => {
//         res.json(data);
//     })
//     .catch(err => {
//         res.json(err)
//     })
// })

router.post('/',async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });
        console.log(post);
        try{
            const savedPost = await post.save();
            res.json(savedPost);
        }catch(err){
            res.json(err);
        }

});


module.exports = router;
// implement your posts router here
 const express = require('express')
 const Post = require('./posts-model')
 const router = express.Router()

 router.get('/', (req, res) =>{
    Post.find() // http get :5000/api/posts --verbose
    .then(postFound => {
        //throw new Error('ouch!') to test
        res.json(postFound)
    })
    .catch(err => {
        res.status(500).json({
            message: "The posts information could not be retrieved",
            err: err.message,
            stack: err.stack
        })
    })
 })

 router.get('/:id', async (req, res) =>{
     try{
        //throw new Error('oopsie!')
        const postById = await Post.findById(req.params.id)
        //console.log('here:', postById)
        if(!postById){
            res.status(404).json({
                message: "The post with the specified ID does not exist" ,
            })
        } else {
            res.json(postById)
        }
     } catch (err) {
         res.status(500).json({
            message: "The post information could not be retrieved" ,
            err: err.message,
            stack: err.stack
        })
     }
 })

 router.post('/', (req, res) =>{

 })

 router.delete('/:id', (req, res) =>{
     
 })

 router.put('/:id', (req, res) =>{

 })

 router.get('/:id/messages', (req, res) =>{
     
 })

 
 module.exports = router
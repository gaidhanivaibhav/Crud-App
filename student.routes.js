const express = require('express');
const app = express.Router();
// const StudentExpressRoute = express.Router();
let studentSchema = require('../model/student.model');






app.get('/', async (req,res)=>{
    try{
        // console.log('get received',req);
        const articles = await studentSchema.find({});
        res.send(articles);

    }catch(err){
        console.log(err);
    }
})

app.get('/:id', async (req,res)=>{
    try{
        // console.log('get received',req);
        const articles = await studentSchema.find({_id:req.params.id});
        res.send(articles);

    }catch(err){
        console.log(err);
    }
})

app.post('/add-student', async (req,res)=>{
    let post = new studentSchema(req.body)
    try{
        // console.log('get received',req);
        const articles = await post.save()
        res.send(articles);

    }catch(err){
        console.log(err);
    }
})


app.delete('/del-student/:id', async (req,res)=>{
    try{
        const articles = await studentSchema.findOneAndRemove({id:req.params.id});
        res.send(articles);

    }catch(err){
        console.log(" hi",err);
    }
})



app.put('/update-student/:id', async (req,res)=>{
    try{
        const articles = await studentSchema.findOneAndUpdate({_id:req.params.id},{$set:req.body});
        res.send(articles);
        console.log("update succesfull")

    }catch(err){
        console.log(" hi",err);
    }
})








    

  





module.exports = app;
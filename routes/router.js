const express=require('express');
const router=express.Router();
const fs=require('fs');
const path=require('path');

//Upload Feature
router.post('/',(req,res)=>{
    let fileData=req.files.file.data
    let fileName = req.files.file.name
    fs.writeFile(path.join(__dirname,`../uploads/${fileName}`),fileData, (err)=>{
        if(err){
            throw err
        } console.log(`uploaded ${fileName}`)
    })
    res.redirect('/')
})

// Readdir
router.get('/',(req,res)=>{
    fs.readdir(path.join(__dirname,'..//uploads/'),(err,data)=>{
        if(err){
            throw err
        } res.send(data)
    })
})

//Download Feature
router.get('/:id', (req,res)=>{
   res.download(path.join(__dirname,`../uploads/${req.params.id}`)
);
});


module.exports=router;
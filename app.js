//Modules
const express = require('express');
const app = express();
const port = 8080;
const fileUpload = require('express-fileupload');

//Middleware
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(fileUpload());

//Routes
app.use('/uploadedFiles', require('./routes/router.js'))

//Listen to port
app.listen(port,()=>{
    console.log('server is listening')
})
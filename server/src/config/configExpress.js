const express = require('express');
const {session} = require('../middlewares/authMiddleware');
const cookieParser = require('cookie-parser');

function configExpress(app){
    
    app.use(express.urlencoded({extended:true}))
    app.use(express.json());
    app.use(cookieParser(process.env.JWT_SECRET))
    
    app.listen(process.env.PORT || 5000,()=>{
        console.log(`Server Started at: ${process.env.PORT}`);
    })
}

module.exports ={
    configExpress
}
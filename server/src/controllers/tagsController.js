const {Router} = require('express');
const { findTag } = require('../services/tagsService');

const tagsController = Router();

tagsController.get('/api/tags/:tag',async (req,res)=>{
    const tag = req.params.tag;
    // const {tag} = req.body
    console.log(tag);
    try{
        const response = await findTag(tag);

        if(response){
            res.status(200).json({tag:response});
        }
    }catch(err){    
        res.status(404).json({message:err.message});
    }
})

module.exports = {tagsController}
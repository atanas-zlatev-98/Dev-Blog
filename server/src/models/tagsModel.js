const mongoose = require('mongoose');


const tagsSchema = new mongoose.Schema({
    tag:{
        type:String,
        unique: true,
    },
    tagPosts:[{
         type: mongoose.Types.ObjectId,
         ref: "Posts",
    }]
},{
    timestamps:true,
})

const Tags = mongoose.model('Tags',tagsSchema);

module.exports = {Tags}

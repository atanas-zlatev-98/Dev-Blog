const mongoose = require("mongoose");

const commentsSchema = new mongoose.Schema({
  author: {
    // type: mongoose.Schema.Types.ObjectId,
    type:String,
    ref: "User",
    required: true,
  },
  comment: {
    type: String,
    required: true,
    maxlength: 1000,
  },
  // commentReactions:[{
  //    type:mongoose.Schema.Types.ObjectId,
  //    ref:'User'
  // }],
},{
    timestamps:true
});


module.exports = {commentsSchema};

const mongoose = require("mongoose");

const commentsSchema = new mongoose.Schema({
  authorId: {
    type: mongoose.Schema.Types.ObjectId,
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

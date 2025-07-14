const mongoose = require("mongoose");

const commentsSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  commentsContent: {
    type: String,
    required: true,
    maxlength: 1000,
  },
  commentReactions:[{
     type:mongoose.Schema.Types.ObjectId,
     ref:'User'
  }],
},{
    timestamps:true
});


module.exports = {commentsSchema};

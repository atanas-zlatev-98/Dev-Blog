const mongoose = require("mongoose");
const { commentsSchema } = require("./commentsModel");

const postsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      maxlength: 150,
      trim: true,
    },
    content: {
      type: String,
      required: true,
      trim: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    tags: [
      {
        type: String,
        lowercase: true,
        trim: true,
      },
    ],
    imageUrl: {
      type: String,
      required: true,
    },
    published: {
      type: Boolean,
      default: false,
    },
    // reactions:{
    //     type:Map,
    //     of: [{type:mongoose.Schema.Types.ObjectId, ref:'User'}],
    //     default:{},
    // },
    reactions: [
      {
        type: {
          type: String,
          enum: ["like", "love", "laugh", "angry", "sad"],
          required: true,
        },
      },
    ],
    views: {
      type: Number,
      default: 0,
    },
    comments: [commentsSchema],
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model("Post", postsSchema);

module.exports = { Post };

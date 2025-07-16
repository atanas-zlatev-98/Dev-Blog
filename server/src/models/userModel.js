const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePictureUrl:{
      type:String,
      required:true,
    },
    posts: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Posts",
      },
    ],
    savedPosts: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Posts",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = { User };

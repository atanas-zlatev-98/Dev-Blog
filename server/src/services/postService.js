const { Post } = require("../models/postsModel");
const { User } = require("../models/userModel");

async function createPost(post) {
  const newPost = new Post({
    title: post.title,
    content: post.content,
    author: post.author,
    imageUrl: post.imageUrl,
    tags:post.tags,
  });

  const userId = post.author;
  const user = await User.findById(userId);

  if (!user) {
    throw new Error("Please Login or register");
  }

  user.posts.push(newPost._id);

  user.save();
  newPost.save();
  return newPost;
}

async function deletePost(postId, userId) {
  const post = await Post.findById(postId);

  if (!post) {
    throw new Error("Post not Found!");
  }

  if (post.author.toString() !== userId.toString()) {
    throw new Error("You are not the owner of the post!");
  }

  const result = await Post.findByIdAndDelete(postId);

  return result;
}

async function getPosts() {
  const posts = await Post.find();
  return posts;
}

async function getSinglePost(postId) {
  const post = await Post.findById(postId);

  if (!post) {
    throw new Error("Post Not Found!");
  }

  return post;
}

async function updatePost(postId,userId,postData) {
    const post = await Post.findById(postId);

    if(!post){
        throw new Error('Post not Found!');
    }

    if(post.author.toString() !== userId.toString()){
        throw new Error('You are not the owner of the post!')
    }

    const newPost = await Post.findByIdAndUpdate(postId,postData,{new:true, runValidators: true});
    return newPost
}

module.exports = { createPost, deletePost, getPosts, getSinglePost,updatePost };

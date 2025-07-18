const { Router } = require("express");
const { protect } = require("../middlewares/authMiddleware");
const {
  createPost,
  deletePost,
  getPosts,
  getSinglePost,
  updatePost,
} = require("../services/postService");

const postController = Router();

postController.post("/api/posts/create-post", protect, async (req, res) => {
  const { title, content, imageUrl,tags } = req.body;
  console.log(tags)
  const post = {
    title: title,
    content: content,
    author: req.user._id,
    imageUrl: imageUrl,
    tags,
  };

  try {
    const posts = await createPost(post);
    res.status(201).json({ posts });
  } catch (err) {
   res.status(400).json({ message:err.message });
  }
});

postController.get("/api/posts", async (req, res) => {
  try {
    const posts = await getPosts();
    res.status(200).json({ posts });
  } catch (err) {
    res.status(204).json({ message: err.message });
  }
});

postController.get("/api/posts/:postId", async (req, res) => {
  const postId = req.params.postId;

  try {
    const result = await getSinglePost(postId);
    res.status(200).json({ result });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
});

postController.put("/api/posts/edit/:postId", protect,async (req, res) => {

  const postId = req.params.postId;
  const userId = req.user._id;

  const { title, content, imageUrl } = req.body;

  const newPostData = {
    title: title,
    content: content,
    author:userId,
    imageUrl: imageUrl,
  };

  try {
    const result = await updatePost(postId, userId, newPostData);

    if (!result) {
        res.status(404).json({message: 'Post Not Found!'});
    }else {
        res.status(200).json({result});
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

postController.delete("/api/posts/delete/:postId", protect, async (req, res) => {
  const postId = req.params.postId;
  const userId = req.user._id;

  try {
    const result = await deletePost(postId, userId);

    if (!result) {
      res.status(404).json({ message: "Post Not Found!" });
    } else {
      res.status(200).json({ message: "Post Deleted" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

postController.put("/api/posts/:postId/react", async (req, res) => {});

module.exports = {
  postController,
};

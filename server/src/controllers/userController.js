const { Router } = require("express");
const { register, login, findAuthor, followAuthor, unfollowAuthor } = require("../services/userService");
const { createToken } = require("../services/jwt");
const userController = Router();

userController.post("/api/auth/register", async (req, res) => {
  //TODO Password Validation

  const { username, email, password,profilePictureUrl,summary} = req.body;

  try {
    const user = await register(username, email, password,profilePictureUrl,summary);
    const token = createToken(user);

    res.cookie("jwt", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      sameSite: "strict",
      maxAge: 1 * 24 * 60 * 60 * 1000,
    });

    res.status(201).json({ _id: user._id, username: user.username, email: user.email,profilePictureUrl:user.profilePictureUrl,summary:user.summary });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

userController.post("/api/auth/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await login(email, password);
    const token = createToken(user);

    res.cookie("jwt", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      sameSite: "strict",
      maxAge: 1 * 24 * 60 * 60 * 1000,
    });

    res.status(200).json({ _id: user._id, username: user.username, email: user.email, profilePictureUrl:user.profilePictureUrl });

  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

userController.post("/api/auth/logout", async (req, res) => {
   res.clearCookie('jwt')
   res.status(200).json({ message: "User logged Out" });
});

userController.get('/profile',async(req,res)=>{
  
})

userController.get('/api/auth/:author',async(req,res)=>{
  // const {creatorId} = req.body;
  const author = req.params.author;
  try{
    const user = await findAuthor(author);
    console.log(user);
    console
    res.status(200).json({_id:user._id,username:user.username,email:user.email,posts:user.posts,imageUrl:user.profilePictureUrl,summary:user.summary,createdAt:user.createdAt,followers:user.followers});
  }catch(err){
    res.status(404).json(err.message);
  }
})

userController.post('/api/author/follow',async (req,res)=>{
  const {authorId,userId} = req.body;

  try{
    const author = await followAuthor(authorId,userId);
    res.status(200).json(author);
  }catch(err){
    res.status(404).json(err.message)
  }
})

userController.post('/api/author/unfollow',async (req,res)=>{
  const {authorId,userId} = req.body;

  try{
    const author = await unfollowAuthor(authorId,userId);
    res.status(200).json(author);
  }catch(err){
    res.status(404).json(err.message)
  }
})
module.exports = {
  userController,
};

const { User } = require("../models/userModel");
const bcryptjs = require('bcryptjs');

async function register(username,email,password,profilePictureUrl,summary) {
    const existingUser = await User.findOne({email})

    if(existingUser){
        throw new Error('Email already in use!');
    }

    const user = new User({
        username,
        email,
        password: await bcryptjs.hash(password,10),
        profilePictureUrl,
        summary
    })
    
    await user.save();
    return user;
}

async function login(email,password) {
    const user = await User.findOne({email});

    if(!user){
        throw new Error('Invalid Email or Password');
    }

    const matchPasswords = await bcryptjs.compare(password,user.password);

    if(!matchPasswords){
        throw new Error('Invalid Email or Password');
    }

    return user;

}

async function findAuthor(authorId) {
    const user = await User.findById(authorId);

    if(!user){
        throw new Error('Author not found!');
    }

    return user;
    
}

async function followAuthor(authorId,userId) {
    const author = await User.findById(authorId);

    if(!author){
        throw new Error('Author not found');
    }

    if(author.followers.includes(userId)){
        throw new Error('You are already a follower!');
    }

    author.followers.push(userId);
    await author.save();

    return author
}

async function unfollowAuthor(authorId,userId) {
    const author = await User.findById(authorId);

    if(!author){
        throw new Error('Author not found!');
    }

    if(!author.followers.includes(userId)){
        throw new Error('You are not a follower!')
    }

    author.followers.pull(userId);
    await author.save();

    return author;
}


module.exports= {
    register,login,findAuthor,followAuthor,unfollowAuthor
}
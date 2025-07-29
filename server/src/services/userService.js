const { User } = require("../models/userModel");
const bcryptjs = require('bcryptjs');

async function register(username,email,password,profilePictureUrl) {
    const existingUser = await User.findOne({email})

    if(existingUser){
        throw new Error('Email already in use!');
    }

    const user = new User({
        username,
        email,
        password: await bcryptjs.hash(password,10),
        profilePictureUrl,
    })
    
    user.save();
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

async function findCreator(creatorId) {
    const user = await User.findById(creatorId);

    if(!user){
        throw new Error('Creator not found!');
    }

    return user;
    
}


module.exports= {
    register,login,findCreator
}
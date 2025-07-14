const mongoose = require('mongoose');
require('../models/userModel');
require('../models/postsModel');

async function configDatabase(){
       const connection = await mongoose.connect(process.env.MONGO_URI)
        console.log(`Database Connected:${connection.connection.host}`);
}

module.exports = {
    configDatabase
}
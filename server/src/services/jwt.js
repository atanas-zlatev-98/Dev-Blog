const jwt = require('jsonwebtoken');

function createToken(userData){
    const payload = {
        _id:userData._id,
        email:userData.email
    }

    const token = jwt.sign(payload,process.env.JWT_SECRET,{
        expiresIn: '1d',
    })
    
    return token;
}

function verifyToken(token) {
  const data = jwt.verify(token, process.env.JWT_SECRET);
  return data;
}

module.exports = {
    createToken,
    verifyToken
}
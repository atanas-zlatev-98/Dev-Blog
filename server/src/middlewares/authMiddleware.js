import jwt from 'jsonwebtoken'


const protect = async (req, res, next) => {
  let token;
  token = req.cookies?.jwt;

  if (token) {
    try {
      const data = jwt.verify(token, process.env.JWT_SECRET);
      req.user = {
        _id: data._id,
        email:data.email
      }
      next();
    } catch (err) {
      res.status(401);
      throw new Error("Not Authorized, Invalid token");
    }
  } else {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
};

export { protect };

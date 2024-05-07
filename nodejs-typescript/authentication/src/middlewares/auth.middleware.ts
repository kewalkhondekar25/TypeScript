import express from "express";
import jwt from "jsonwebtoken"

const authMiddleware = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.log(req.headers);
  const authHeader = req.headers.authorization;
  
  if(!authHeader || !authHeader.startsWith("Bearer ")){
    return res.status(401).json({message: "no token provided"})
  };

  try {
    const token = authHeader.split(" ")[1]
    const decode = jwt.verify(token, process.env.JWT_SECRET)
    next()
  } catch (error) {
    res.status(401).json({message: "unathorized"})
  }
};

export default authMiddleware;
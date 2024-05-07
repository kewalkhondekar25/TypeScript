import express from "express";
import asyncHandler from "../utils/asyncHandler";
import jwt from "jsonwebtoken";

const login = asyncHandler(async (req: express.Request, res: express.Response, next: express.NextFunction) => {

  const {userName, password} = req.body;
  const id = new Date().getDate();

  if(!(userName && password)){
    return res.status(404).json({message: "can not be empty"})
  }
  const token = jwt.sign({id, userName}, process.env.JWT_SECRET, {expiresIn: "30d"});
  return res.status(200).json({ message: "user created", token })
});

const dashboard = asyncHandler(async(req: express.Request, res: express.Response) => {
  
  return res.status(200).json({mesaage: "welcome to dashboard"});
})

export { login, dashboard };
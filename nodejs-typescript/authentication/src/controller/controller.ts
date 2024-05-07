import express from "express";
import asyncHandler from "../utils/asyncHandler";
const login = asyncHandler(async (req: express.Request, res: express.Response, next: express.NextFunction) => {

  const {userName, password} = req.body;
  console.log(`${userName} & ${password}`);
  
  if(!(userName && password)){
    return res.status(404).json({message: "can not be empty"})
  }
  
  return res.status(200).json({ message: "userName" })
})

export { login };
import express from "express";
import asyncHandler from "../utils/asyncHandler";
import { createCustomError } from "../utils/customErrorHandler";

const login = asyncHandler(async (req: express.Request, res: express.Response, next: express.NextFunction) => {
  const istrue = false;
  if(!istrue){
    return next(createCustomError("something went wrong", 404))
  }
  return res.status(200).json({ message: "this is login" })
})

export { login };
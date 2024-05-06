import express from "express";
import asyncHandler from "../utils/asyncHandler";

const login = asyncHandler(async (req: express.Request, res: express.Response) => {
   return res.status(200).json({message: "this is login"})
})

export {login};
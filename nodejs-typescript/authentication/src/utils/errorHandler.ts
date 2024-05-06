import express from "express";
import { CustomAPIError } from "./customErrorHandler";

type AppError = CustomAPIError | Error;

const errorHandler = (err: AppError, req: express.Request, res: express.Response, next: express.NextFunction) => {
  if(err instanceof CustomAPIError){
    return res.status(err.statusCode).json({message: err.message})
  }
  return res.status(500).json({message: "something went wrong, please try again"})
}

export default errorHandler;
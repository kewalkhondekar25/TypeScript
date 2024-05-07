import express from "express";

type AsyncParam = (req: express.Request, res: express.Response, next: express.NextFunction) => Promise<void | express.Response>

const asyncHandler = (fn: AsyncParam) => {
  return async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
      await fn(req, res, next)
    } catch (error) {
      console.log(error.message);
      next(error)
    }
  }
}

export default asyncHandler;
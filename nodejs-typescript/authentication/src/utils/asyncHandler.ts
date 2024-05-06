import express from "express";

type AsyncParam = (req: express.Request, res: express.Response, next: express.NextFunction) => Promise<express.Response>

const asyncHandler = (fn: AsyncParam) => {
  return async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
      await fn(req, res, next)
    } catch (error) {
      next(error)
    }
  }
}

export default asyncHandler;
import { ZodSchema } from "zod";
import { NextFunction, Request, Response } from "express";

export class validate_body {
  static execute(schema: ZodSchema) {
    return (req: Request, res: Response, next: NextFunction) => {
      req.body = schema.parse(req.body);

      next();
    };
  }
}

/* eslint-disable @typescript-eslint/ban-types */
import { Request, Response } from 'express';

export function logger(req: Request, res: Response, next: Function) {
  console.log(`Request...`);
  next();
};
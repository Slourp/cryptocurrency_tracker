import helmet from 'helmet';
import { Request, Response, NextFunction } from 'express';

const helmetMiddleware = helmet();

export default helmetMiddleware;

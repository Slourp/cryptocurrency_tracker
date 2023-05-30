import morgan from 'morgan';
import { Request, Response, NextFunction } from 'express';

const morganMiddleware = morgan('dev');

export default morganMiddleware;

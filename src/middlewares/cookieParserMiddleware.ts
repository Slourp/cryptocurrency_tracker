import cookieParser from 'cookie-parser';
import { Request, Response, NextFunction } from 'express';

const cookieParserMiddleware = cookieParser();

export default cookieParserMiddleware;

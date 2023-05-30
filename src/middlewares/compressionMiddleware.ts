import compression from 'compression';
import { Request, Response, NextFunction } from 'express';

const compressionMiddleware = compression();

export default compressionMiddleware;

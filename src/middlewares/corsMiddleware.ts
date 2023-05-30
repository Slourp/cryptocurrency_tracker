import cors from 'cors';
import { Request, Response, NextFunction } from 'express';

const corsMiddleware = cors();

export default corsMiddleware;

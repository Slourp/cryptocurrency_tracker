import { Request, Response, NextFunction } from 'express';

const requestTimeMiddleware = (
    req: Request,
    _res: Response,
    next: NextFunction,
): void => {
    req.requestTime = Date.now();
    next();
};

export default requestTimeMiddleware;

import { Request, Response, NextFunction } from 'express';
import express from 'express';

const JsonCheckMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    const bodyParser = express.json({
        verify: (_req: Request, res: Response, buf: Buffer, _encoding: string) => {
            try {
                JSON.parse(buf.toString());
            } catch (e) {
                res.status(404).json({ status: 'ko', message: 'invalid JSON' });
                throw new Error('invalid JSON');
            }
        },
    });

    bodyParser(req, res, next);
};

export default JsonCheckMiddleware;

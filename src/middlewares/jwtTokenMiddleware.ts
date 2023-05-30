import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const jwtTokenMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const user = { id: 1, username: "sampleUser" };

    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET as jwt.Secret, { expiresIn: '1h' });

    res.json({ accessToken });
};

export default jwtTokenMiddleware;

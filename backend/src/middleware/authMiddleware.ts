import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;
    const token = authHeader?.split(' ')[1];

    if (!token) {
        return res.status(401)
            .json({ message: 'Unauthorized' });
    }

    
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
    (req as any).admin = decoded;
     next();
  } catch (err) {
    res.status(401).json({ message: 'Invalid token' });
  }
};

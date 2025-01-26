import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

// Define the structure of the decoded JWT payload
interface DecodedJWT {
  userId: number;
  username: string;
}

// Extend the Express Request type to include the user property
declare global {
  namespace Express {
    interface Request {
      user?: DecodedJWT; // Add the user property with the DecodedJWT type
    }
  }
}

const auth = (req: Request, res: Response, next: NextFunction): void | Response => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ error: 'Please authenticate.' });
  }

  try {
    // Decode the token with types
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as DecodedJWT;
    
    // Attach user info to the request
    req.user = decoded;

    next();
  } catch {
    res.status(401).json({ error: 'Invalid token' });
  }
};

export default auth;

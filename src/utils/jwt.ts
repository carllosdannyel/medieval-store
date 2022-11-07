import 'dotenv/config';
import jwt from 'jsonwebtoken';
import { IUser } from '../interfaces/user';
import HttpException from './exception';

export function generateToken(user: IUser): string {
  const payload = {
    id: user.id,
    username: user.username,
    classe: user.classe,
    level: user.level,
  };
  return jwt.sign(payload, process.env.JWT_SECRET as string, {
    algorithm: 'HS256',
    expiresIn: '1d',
  });
}

export function validateToken(token: string | undefined) {
  if (!token) throw new HttpException(401, 'Token não encontrado!');

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
    return decoded;
  } catch (error) {
    throw new HttpException(401, 'Expired or invalid token');
  }
}

// export { createToken, validateToken };

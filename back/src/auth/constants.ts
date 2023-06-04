import { randomBytes } from 'crypto';

export const jwtConstants = {
  secret: randomBytes(32).toString('hex'), // Generate a 32-byte random secret key
};

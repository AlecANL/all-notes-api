import dotenv from 'dotenv';
dotenv.config();

export const config = {
  dev: process.env.NODE_ENV !== 'production',
};

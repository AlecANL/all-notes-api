import dotenv from 'dotenv';
dotenv.config();

export const config = {
  dev: process.env.NODE_ENV !== 'production',
  dbCluster: process.env.DB_CLUSTER,
  dbName: process.env.DB_NAME,
  dbPassword: process.env.DB_PASSWORD,
  dbUSer: process.env.DB_USER,
  port: process.env.PORT || 3001,
};

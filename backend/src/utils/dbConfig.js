import dotenv from 'dotenv'
dotenv.config()

export const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PWS,
  database: process.env.DB_DB
};
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const pool = mysql.createPool({
  host: process.env.DB_HOST || 'mysql.skabe.com.br',
  user: process.env.DB_USER || 'skabe07',
  password: process.env.DB_PASSWORD || 'int13cam',
  database: process.env.DB_NAME || 'skabe07',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

export default pool;

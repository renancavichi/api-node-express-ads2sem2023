import mysql from 'mysql2/promise'
import { DB } from '../config.js'

const pool = mysql.createPool({
  host: DB.HOST,
  user: DB.USER,
  password: DB.PASS,
  database: DB.NAME,
  port: DB.PORT,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  ssl: {
    ca: DB.CERT,
  }
})

export default pool
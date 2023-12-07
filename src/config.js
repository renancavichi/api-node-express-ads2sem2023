import 'dotenv/config'

export const PORT = 3300

export const DB = {
    CERT: Buffer.from(process.env.DB_CERT, 'base64').toString('utf-8'),
    HOST: process.env.DB_HOST,
    USER: process.env.DB_USER,
    PASS: process.env.DB_PASS,
    NAME: process.env.DB_NAME,
    PORT: process.env.DB_PORT
}
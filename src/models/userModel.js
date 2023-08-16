import db from '../database/db.js'

const list = async () => {
    return await db.query('SELECT * FROM users')
}

export default {list}
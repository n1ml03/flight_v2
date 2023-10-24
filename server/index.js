import mysql from 'mysql2'

// MySQL connection setup
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'namlepaylak',
    database: 'flight'
  }).promise()


async function getNodes() {
    const [rows] = await pool.query('SELECT * FROM flight')
    return rows
}

async function getNode(id) {
    const [rows] = await pool.query('SELECT * FROM flight WHERE Origin = ${id}')
    return rows
}

const notes = await getNode();
console.log(notes);
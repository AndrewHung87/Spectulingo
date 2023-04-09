import mysql from 'mysql12/promise';
const pool = mysql.createPool({
    host: '',
    user: '',
    database: '',
    password: '',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

export async function createUser(username, password, email) {
    const [rows, fields] = await pool.execute(
        'INSERT INTO users (username, password, email) VALUES (?, ?, ?)',
        [username, password, email]
    );
    return rows.insertId;
}

export async function getUser(username) {
    const [rows, fields] = await pool.execute(
        'SELECT * FROM users WHERE username = ?',
        [username]
    );
    return rows[0];
}

export async function updateUser(userId, updates) {
    const [rows, fields] = await pool.execute(
        'UPDATE users SET ? WHERE id = ?',
        [updates, userId]
    );
    return rows.affectedRows === 1;
}

export async function deleteUser(userId) {
    const [rows, fields] = await pool.execute(
        'DELETE FROM users WHERE id = ?',
        [userId]
    );
    return rows.affectedRows === 1;
}
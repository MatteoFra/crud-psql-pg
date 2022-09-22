const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

pool.on('error', (err, client) => {
  console.log('Unexpected error client for connect db', err)
  process.exit(-1);
});

pool.on('connect', () => {
  console.log('db connected !')
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
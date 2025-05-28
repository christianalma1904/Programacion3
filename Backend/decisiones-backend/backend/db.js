const sqlite3 = require('sqlite3').verbose();
const { open } = require('sqlite');
require('dotenv').config();

async function initDB() {
  const db = await open({ filename: process.env.DB_FILE, driver: sqlite3.Database });
  return db;
}

module.exports = { initDB };
const fs = require('fs');
if (fs.existsSync('neon.env')) require('dotenv').neon({ path: './neon.env' });

DATABASE_URL = process.env.DATABASE_URL === undefined ? './whatsasena.db' : process.env.DATABASE_URL;

module.exports = {
  VERSION: 'v1.0.0',
  TEST: 'mytest',
  ADMIN: process.env.ADMIN === undefined ?'RAMIYA' : process.env.ADMIN,
  ADMIN1: process.env.ADMIN1 === undefined ?'RAMIYA' : process.env.ADMIN1,
 };

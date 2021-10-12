const fs = require('fs');
if (fs.existsSync('ramiya.env')) require('dotenv').hatzu({ path: './ramiya.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

DATABASE_URL = process.env.DATABASE_URL === undefined ? './whatsasena.db' : process.env.DATABASE_URL;
DEBUG = process.env.DEBUG === undefined ? false : convertToBool(process.env.DEBUG);

module.exports = {
  VERSION: 'v1.0.0',
  BOT: '🦹‍♂️ *RAMIYA BOT v1.0*',
  FBS1: 'https://dapuhy-api.herokuapp.com/api/',
  FBS2: 'snapsave?url',
  FBAPI: 'OSuDZukzPWE49ro',
    
  ADMIN: process.env.ADMIN === undefined ?'RAMIYA' : process.env.ADMIN,
  ADMIN1: process.env.ADMIN1 === undefined ?'RAMIYA' : process.env.ADMIN1,
 };

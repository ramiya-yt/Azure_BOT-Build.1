const fs = require('fs');
if (fs.existsSync('neon.env')) require('dotenv').neon({ path: './neon.env' });

DATABASE_URL = process.env.DATABASE_URL === undefined ? './whatsasena.db' : process.env.DATABASE_URL;

module.exports = {
  VERSION: 'v1.0.0',
  TEST: 'mytest',
  XAZZ: 'false',
  XYTX: 'ttps://www.youtube.com/watch?v=6erHJds3H-s',
  XTPS: 'extpro-scraper?apikey=',
  XEPS: 'photo-scraper?apikey=',
  XAPI: 'alexaapikey',
  XAPL: 'alexamystuff',
  XURL: 'ttps://api.zeks.me/api/',
  XLPW: '\n\n *Powered by 👩‍🦰 Amazon Alexa Team*',
  
  L001: 'https://ephoto360.com/tao-avatar-hacker-anonymous-neon-xanh-sieu-ngau-804.html',
  L002: 'https://ephoto360.com/hieu-ung-ve/viet-chu-galaxy-online-18.html',
  L003: 'https://ephoto360.com/hieu-ung-ve/viet-chu-galaxy-bat-17.html',
  L004: 'https://ephoto360.com/hieu-ung-chu/tao-chu-glaxy-moi-116.html',
  L005: 'https://ephoto360.com/hieu-ung-chu/chu-galaxy-thien-than-206.html',
  L006: 'x',
  L007: 'x',
  L008: 'x',
  L009: 'x',
  L010: 'x',
  L011: 'x',
  L012: 'x',
  L013: 'x',
  L014: 'x',
 };

/* Copyright (C) 2021 TENUX-Neotro.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
NEOTROX - TEENUHX
*/

const { Sequelize } = require('sequelize');
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

DATABASE_URL = process.env.DATABASE_URL === undefined ? './Amazone.db' : process.env.DATABASE_URL;
DEBUG = process.env.DEBUG === undefined ? false : convertToBool(process.env.DEBUG);
module.exports = {
    VERSION: 'v8.0.0',
    CHANNEL: 'https://t.me/Bot_x_whatsapp',
    SESSION: process.env.AZURE_SESSION === undefined ? '' : process.env.AZURE_SESSION,
    ANTILINK: process.env.ANTI_LINK === undefined ? 'false' : process.env.ANTI_LINK,
    AUTOBIO: process.env.AUTO_BIO === undefined ? 'false' : process.env.AUTO_BIO,
    TIME_ZONE: process.env.TIME_ZONE === undefined ? 'Asia/Colombo' : process.env.TIME_ZONE,
    GANSTYLE: process.env.GAN_IMAGE === undefined ? 'https://i.imgur.com/rr3br8Y.jpg' : process.env.GAN_IMAGE,
    LANG: process.env.LANGUAGE === undefined ? 'SI' : process.env.LANGUAGE.toUpperCase(),
    ALIVEMSG: process.env.ALIVE_MESSAGE === undefined ? 'default' : process.env.ALIVE_MESSAGE,
    ALIVE_LOGO: process.env.ALIVE_LOGO === undefined ? 'https://telegra.ph/file/e8f3e419b3dafe9fe8153.jpg' : process.env.ALIVE_LOGO,
    KICKMEMSG: process.env.KICKME_MESSAGE === undefined ? 'default' : process.env.KICKME_MESSAGE,
    BLOCKCHAT: process.env.BLOCK_CHAT === undefined ? false : process.env.BLOCK_CHAT,
    OWNER: process.env.OWNER_NAME === undefined ? 'default' : process.env.OWNER_NAME,
    ALL: process.env.ALL_CAPTION === undefined ? '*Created By 🦹‍♂️ AZURE*' : process.env.ALL_CAPTION,
    CAPTIONS: process.env.CAPTIONS === undefined ? '*Created By 🦹‍♂️ AZURE*' : process.env.CAPTIONS,
    MENTION: process.env.TAG_REPLY === undefined ? '918921483992@s.whatsapp.net' : process.env.TAG_REPLY,
    ADDMSG: process.env.ADD_MESSAGE === undefined ? 'default' : process.env.ADD_MESSAGE,
    PLKS: process.env.THERI_LIST === undefined ? false : process.env.THERI_LIST,
    MUTEMSG: process.env.MUTE_MESSAGE === undefined ? 'default' : process.env.MUTE_MESSAGE,
    BGMFILTER: process.env.BGM_FILTER === undefined ? false : convertToBool(process.env.BGM_FILTER),
    DISBGM: process.env.DISABLE_JID_BGM_FILTER === undefined ? false : process.env.DISABLE_JID_BGM_FILTER,
    STICKERP: process.env.AUTO_STICKER === undefined ? true : convertToBool(process.env.AUTO_STICKER),
    DISSTICKER: process.env.DISABLE_STICKER === undefined ? false : process.env.DISABLE_STICKER,
    BOT: process.env.BOT_NAME === undefined ? '🧛‍ AZURE' : process.env.BOT_NAME,
    BOT_NAME: process.env.BOT_NAME === undefined ? '🧛‍ AZURE' : process.env.BOT_NAME,
    NOLOG: process.env.NO_LOG === undefined ? 'true' : process.env.NO_LOG,
    THERI_KICK: process.env.THERI_KICK === undefined ? 'true' : process.env.THERI_KICK,
    SONGD: process.env.SONGD === undefined ? 'ᴅᴏᴡɴʟᴏᴀᴅɪɴɢ ꜱᴏɴɢ' : process.env.SONGD,
    SONGU: process.env.SONGU === undefined ? 'ᴜᴘʟᴏᴀᴅɪɴɢ ꜱᴏɴɢ' : process.env.SONGU,
    TALKING_PINKY: process.env.TALKING_PINKY === undefined ? 'false' : process.env.TALKING_PINKY,
    BLOCKMSG: process.env.BLOCK_MESSAGE === undefined ? 'default' : process.env.BLOCK_MESSAGE,
    UNBLOCKMSG: process.env.UNBLOCK_MESSAGE === undefined ? 'default' : process.env.UNBLOCK_MESSAGE,
    UNMUTEMSG: process.env.UNMUTE_MESSAGE === undefined ? 'default' : process.env.UNMUTE_MESSAGE,
    GEAR: process.env.CHANGE_BGM_TO === undefined ? 'one' : process.env.CHANGE_BGM_TO,
    WORKTYPE: process.env.WORK_TYPE === undefined ? 'private' : process.env.WORK_TYPE,
    PROMOTEMSG: process.env.PROMOTE_MESSAGE === undefined ? 'default' : process.env.PROMOTE_MESSAGE,
    DEMOTEMSG: process.env.DEMOTE_MESSAGE === undefined ? 'default' : process.env.DEMOTE_MESSAGE,
    BANMSG: process.env.BAN_MESSAGE === undefined ? 'default' : process.env.BAN_MESSAGE,
    AFKMSG: process.env.AFK_MESSAGE === undefined ? 'default' : process.env.AFK_MESSAGE,
    WELCOME_GIF: process.env.WELCOME_GIF === undefined ? 'https://telegra.ph/file/de5ac7faac3665d0de13e.mp4' : process.env.WELCOME_GIF,
    BYE_GIF: process.env.BYE_GIF === undefined ? 'https://telegra.ph/file/de5ac7faac3665d0de13e.mp4' : process.env.BYE_GIF,
    HANDLERS: process.env.HANDLERS === undefined ? '^[.!;]' : process.env.HANDLERS,
    TAGPLK: process.env.TAG_HEADER === undefined ? 'Note this' : process.env.TAG_HEADER,
    SEND_READ: process.env.SEND_READ === undefined ? false : convertToBool(process.env.SEND_READ),
    OWN: process.env.OWN === undefined ? '94760000000,0' : process.env.YAK,
    AI_BOT: process.env.AI_BOT === undefined ?'true' : process.env.AI_BOT,
    INBOX_BLOCK: process.env.INBOX_BLOCK === undefined ?'false' : process.env.INBOX_BLOCK,
    ANTI_BAD: process.env.ANTI_BAD === undefined ?'true' : process.env.ANTIBAD,
    FULLALEXA: process.env.FULL_ALEXA === undefined ?'false' : process.env.FULL_ALEXA,
    WHATS_LINK_BLOCK: process.env.WHATS_LINK_BLOCK === undefined ?'false' : process.env.WHATS_LINK_BLOCK,
    MENU_LOGO: process.env.MENU_LOGO === undefined ?'https://i.imgur.com/rr3br8Y.jpg' : process.env.MENU_LOGO,
    PKGPS: process.env.PKGPS === undefined ?'=xnxcom' : process.env.PKGPS,
    ADULT_MODE: process.env.ADULT_MODE === undefined ? 'on' : process.env.ADULT_MODE,
    AMAZONE: process.env.AMAZONE === undefined ? 'Amazone Alexa' : process.env.AMAZONE,
    KTB: process.env.TAG_HEADER === undefined ? 'Amazone' : process.env.TAG_HEADER,
    BIO: process.env.BIO === undefined ? 'AZURE BOT' : process.env.BIO,
    BAD_KICK: process.env.BAD_KICK === undefined ? 'false' : process.env.BAD_KICK,
    ALL_LINK_BAN: process.env.ALL_LINK_BAN === undefined ? 'false' : process.env.ALL_LINK_BAN,
    BAD_KICK: process.env.BAD_KICK === undefined ? 'false' : process.env.BAD_KICK,
    SPDFAPI: process.env.SPDFAPI === undefined ?'EHbew2GJGOzI5qCldC5Oiu7yVgcVuH39VvmOQGPNQE7Ap7EHKyaqA9ziEn1SRSj5' : process.env.SPDFAPI,
    SITE: process.env.SITE === undefined ?'netfiletolink.herokuapp.com/' : process.env.SITE,
    FBS1: process.env.FBS1 === undefined ?'https://api.dapuhy.ga/api/' : process.env.FBS1,
    FBS2: process.env.FBS2 === undefined ?'snapsave?url' : process.env.FBS2,
    VID1: process.env.VID1 === undefined ?'https://zenzapi.xyz/api/downloader/' : process.env.VID1,
    VID2: process.env.VID2 === undefined ?'RDMMiI1VlXspMp8&index=2' : process.env.VID2,
    ASITE: process.env.ASITE === undefined ?'https://netfiletolink.herokuapp.com/' : process.env.ASITE,
    BAPIS: process.env.BAPIS === undefined ?'https://bx-hunter.herokuapp.com/api/' : process.env.BAPIS,
    JAPIS: process.env.JAPIS === undefined ?'https://docs-jojo.herokuapp.com/api/' : process.env.JAPIS,
    HSITE: process.env.HSITE === undefined ?'hunter' : process.env.HSITE,
    RSITE: process.env.RSITE === undefined ?'https://rei-api.herokuapp.com/api/dl/' : process.env.RSITE,
    LOL_API: process.env.LOL_API === undefined ?'default' : process.env.LOL_API,
    SONG_SERVER: process.env.SONG_SERVER === undefined ?'server1' : process.env.SONG_SERVER,
    VIDEO_SERVER: process.env.VIDEO_SERVER === undefined ?'server1' : process.env.VIDEO_SERVER,
    INBO: process.env.INBO_BLOCK === undefined ? 'false' : process.env.INBO_BLOCK,
    BRANCH: 'master',
    HEROKU: {
        HEROKU: process.env.HEROKU === undefined ? false : convertToBool(process.env.HEROKU),
        API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
        APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
    },
    DATABASE_URL: DATABASE_URL,
    DATABASE: DATABASE_URL === './whatsasena.db' ? new Sequelize({ dialect: "sqlite", storage: DATABASE_URL, logging: DEBUG }) : new Sequelize(DATABASE_URL, { dialectOptions: { ssl: { require: true, rejectUnauthorized: false } }, logging: DEBUG }),
    RBG_API_KEY: process.env.REMOVE_BG_API_KEY === undefined ? false : process.env.REMOVE_BG_API_KEY,
    NO_ONLINE: process.env.NO_ONLINE === undefined ? true : convertToBool(process.env.NO_ONLINE),
    SUDO: process.env.SUDO === undefined ? false : process.env.SUDO,
    DEBUG: DEBUG,
    WITAI_API: "TEYMELA6DMC4XB5YM3SPTTQWUUIBKURG",
    FBAPI: 'OSuDZukzPWE49ro',
    VIDAPI: 'azure1',
    ZRUN: "zenzapi",
    INVITECODE: "azure69",
    ZTH: "azure1",
    BAPIKEY: 'Ikyy69',
    SUPPORT: "9",
    SUPPORT2: "9",
    SUPPORT3: "9",
    SUPPORT4: "9"
};

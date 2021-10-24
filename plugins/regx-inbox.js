/* Copyright (C) 2021 TENUX-Neotro.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
NEOTROX - TEENUHX
*/

const teenu = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const exec = require('child_process').exec;
const os = require("os");
const fs = require('fs');
const Config = require('../config')

// Inbox Block System


const INBO1 = `
[===🦹‍♂️ *AZURE BOT* ===]
  •   _Inbox Block System_   •

⏱Status:Active
🚀Action:Block

📑 Description : මෙම ගිණුමේ හිමිකරු ස්වයංක්‍රීය අවහිර කිරීමෙ පද්ධතිය ක්‍රියාත්මක කර ඇති බැවින් ඔබ Block කිරීමට ලක්වේ..

🧛‍♂️ Bot භාවිතා කිරීම Group එක තුල පමණි.

*ɢᴏᴏᴅ ʙʏᴇ* 👋🏻`

const WARN = `
[===🦹‍♂️ *AZURE BOT* ===]
  •   _Inbox Block System_   •

⏱Status:Active
🚀Action:WARN

📑 Description : මෙම ගිණුමේ හිමිකරු ස්වයංක්‍රීය අවහිර කිරීමෙ පද්ධතිය ක්‍රියාත්මක කර ඇති බැවින් ඔබ විධානයක් ඇතුලත් කලහොත් Block කිරීමට ලක්වේ..

🧛‍♂️ Bot භාවිතා කිරීම Group එක තුල පමණි.

⚠️ *WARNING* `

 if (Config.INBOX_BLOCK == 'true') {
teenu.addCommand({on: 'text', fromMe: false, onlyPm: true }, (async (message, match) => {
        let regexb1ichu = new RegExp('.a')
        let regexb2ichu = new RegExp('.s')
        let regexb3ichu = new RegExp('.y')
        let regexb4ichu = new RegExp('.h')
        let regexb5ichu = new RegExp('sew')
        let regexb6ichu = new RegExp('.v')
        let regexb7ichu = new RegExp('./')
        let regexb8ichu = new RegExp('.')

          if (regexb1ichu.test(message.message)) {
           
            await message.client.sendMessage(message.jid, INBO1, MessageType.text);
            await message.client.blockUser(message.jid, "add");
          } 
        else if (regexb2ichu.test(message.message)) {
          
           await message.client.sendMessage(message.jid, INBO1, MessageType.text);
            await message.client.blockUser(message.jid, "add");
          }
         else if (regexb3ichu.test(message.message)) {
           
            await message.client.sendMessage(message.jid, INBO1, MessageType.text);
            await message.client.blockUser(message.jid, "add");
          }
        else if (regexb4ichu.test(message.message)) {
           
            await message.client.sendMessage(message.jid, INBO1, MessageType.text);
            await message.client.blockUser(message.jid, "add");
          }
          else if (regexb5ichu.test(message.message)) {
           
            await message.client.sendMessage(message.jid, INBO1, MessageType.text);
            await message.client.blockUser(message.jid, "add");
          }
          else if (regexb6ichu.test(message.message)) {
           
            await message.client.sendMessage(message.jid, INBO1, MessageType.text);
            await message.client.blockUser(message.jid, "add");
          }
         else if (regexb6ichu.test(message.message)) {
           
            await message.client.sendMessage(message.jid, INBO1, MessageType.text);
            await message.client.blockUser(message.jid, "add");
          }
         else if (regexb7ichu.test(message.message)) {
           
            await message.client.sendMessage(message.jid, INBO1, MessageType.text);
            await message.client.blockUser(message.jid, "add");
          }
         else if (regexb8ichu.test(message.message)) {
           
            await message.client.sendMessage(message.jid, INBO1, MessageType.text);
            await message.client.blockUser(message.jid, "add");
          }
          
}));


}

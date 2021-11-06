/* Copyright (C) 2021 RAMIYA - AZURE.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
RAMIYA - AZURE
*/
// 😡 ක්ක්ක්ක්ක්ක්ක්ක්ක් නමස්තෙ නමස්කාරක්ම් Code එක නම් උස්සන්න එපා හරිත  😖

const Ramiya = require('../events');
const {MessageType,Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const Config = require('../config');
var ruq = { cd: 'Li4vZmlsZXMvcmFtaXlh', encrypt: 'Code Encrypted BY RAMIYA' }
var code = Buffer.from(ruq.cd, 'base64')
var file = code.toString('utf-8')
const Azure = require(file);
const Language = require('../language');
const Lang = Language.getString('scrapers');
const SH_DE = "🔎 *Search Your Song Name*"
const Search = "🔎 *Searching Your Song...*"
const YTV_UP = "*🚀Uploading Your Song...*"
const NO_RESULT = "*🤕 Oops Song Not Found...*\n Enter *.findsong* For Help"
let typea = Config.WORKTYPE == 'public' ? false : true
let typeb = Config.WORKTYPE == 'public' ? true : false

const YT_NEED = `🤪 *Direct MP3 URL ඇතුලත් කරන්න.*

 💡 *Step 1:-* https://mailboxdrive.com/upload/    පිවිසෙන්න
 💡 *Step 2:-* Browse Files ඔබන්න.
 💡 *Step 3:-* ඔබගේ දුරකතනයෙන් අවශ්‍ය MP3 ගොනුව Select කරන්න
 💡 *Step 4:-* එය Upload වූ පසු එයට පහල ඇති URL එක Copy කරගන්න
 💡 *Step 5:-* එම URL එක පහත පරිදි Botට ඇතුලත් කරන්න.
 
 🎥 *Example* : _.findsong https://www.mboxdrive.com/sample.mp3_
 
 Supports All Direct MP3 Links (Telegraph,fastupload,mailboxdrive,ufile,...)
 
 ══════════════════
       *Copyright © AZURE*
     POWERED BY RAMIYA
══════════════════`


Ramiya.addCommand({ pattern: 'findsong ?(.*)', fromMe: typea, desc: SH_DE, deleteCommand: false}, async (message, match) => {

        const link = match[1] // 😡 අදත් ආවද Code එක උස්සන්න තිරිසනො  😖
    
        if (!link) return await message.client.sendMessage(message.jid,YT_NEED,MessageType.text)
  
        await message.client.sendMessage(message.jid,Search,MessageType.text);
		
		var url = `${Azure.SITE6}searchmusic?apikey=${Azure.S6API}&audio=${link}`
		
        await axios
          .get(`${url}`) // Request Code
          .then(async (response) => {
            const {
             title,artists,genre,album,release_date,
            } = response.data.data
    
            var respoimage = await axios.get(`https://i.imgur.com/H04Am1h.jpg`, { responseType: 'arraybuffer' }) 
            
            const results = "🦹‍♂️ *AZURE SONG FINDER ©* \n\n🎙️ *TITLE :-* "+title+"\n👨🏻‍🎤 *ARTIST :-* "+artists+"\n🎼 *GENRE :-* "+genre+"\n📑 *ALBUM :-* "+album+"\n📅 *RELEASED ON :-* "+release_date+"\n"
    
		await message.client.sendMessage(message.jid, Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: results,quoted: message.data})
	
        })
        .catch(
          async (err) => await message.client.sendMessage(message.jid,NO_RESULT,MessageType.text, {quoted: message.data}),
        )

      },
    )
	
Ramiya.addCommand({ pattern: 'findsong ?(.*)', fromMe: typeb, dontAddCommandList:true, deleteCommand: false}, async (message, match) => {

        const link = match[1] // 😡 අදත් ආවද Code එක උස්සන්න තිරිසනො  😖
    
        if (!link) return await message.client.sendMessage(message.jid,YT_NEED,MessageType.text)
  
        await message.client.sendMessage(message.jid,Search,MessageType.text);
		
		var url = `${Azure.SITE6}searchmusic?apikey=${Azure.S6API}&audio=${link}`
		
        await axios
          .get(`${url}`) // Request Code
          .then(async (response) => {
            const {
             title,artists,genre,album,release_date,
            } = response.data.data
    
            var respoimage = await axios.get(`https://i.imgur.com/H04Am1h.jpg`, { responseType: 'arraybuffer' }) 
            
            const results = "🦹‍♂️ *AZURE SONG FINDER ©* \n\n🎙️ *TITLE :-* "+title+"\n👨🏻‍🎤 *ARTIST :-* "+artists+"\n🎼 *GENRE :-* "+genre+"\n📑 *ALBUM :-* "+album+"\n📅 *RELEASED ON :-* "+release_date+"\n"
    
		await message.client.sendMessage(message.jid, Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: results,quoted: message.data})
	
        })
        .catch(
          async (err) => await message.client.sendMessage(message.jid,NO_RESULT,MessageType.text, {quoted: message.data}),
        )

      },
    )
	

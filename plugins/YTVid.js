/* Copyright (C) 2021 RAMIYA - Alexa Team.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
RAMIYA - Alexa Team
*/
// 😡 අදත් ආවද Code එක උස්සන්න තිරිසනො  😖

const Ramiya = require('../events');
const {MessageType,Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
var ruq = { cd: 'Li4vY29uZmln', encrypt: 'Code Encrypted BY RAMIYA' }
var code = Buffer.from(ruq.cd, 'base64')
var file = code.toString('utf-8')
const Alexa = require(file);
const Language = require('../language');
const Lang = Language.getString('scrapers');
const YT_NEED = "😏 *Enter Youtube URL*\n 🎥 *Example* : _.video https://www.youtube.com/watch?v=iIm4gcybpsI_"
const DWLOAD_VID = "🤍 *Downloading Your Video...*"
const YTV_UP = "*🚀Uploading Your Video...*"
const NO_RESULT = "*🤕 Oops Video Not Found...*"
let ramiya = Alexa.WORKTYPE == 'public' ? false : true
let amazone = Alexa.WORKTYPE == 'public' ? true : false


Ramiya.addCommand({ pattern: 'video ?(.*)', fromMe: ramiya, desc: Lang.VIDEO_DESC, deleteCommand: false}, async (message, match) => {

        const link = match[1] // 😡 අදත් ආවද Code එක උස්සන්න තිරිසනො  😖
    
        if (!link) return await message.client.sendMessage(message.jid,YT_NEED,MessageType.text)
  
        await message.client.sendMessage(message.jid,DWLOAD_VID,MessageType.text);
		
		var url = `${Alexa.VID1}ytmp4?url=${link}&list=${Alexa.VID2}&apikey=${Alexa.VIDAPI}`
		
        await axios
          .get(`${url}`) // Request Code
          .then(async (response) => {
            const {
             url,title,channel,views,published,thumb,
            } = response.data.result
    
            const videoBuffer = await axios.get(url, {responseType: 'arraybuffer'})
            
            const vcap = Alexa.BOT_NAME+"\n\n*✽ Title* : "+title+"\n*✽ Channel* : "+channel+"\n*✽ Views* : "+views+"\n*✽ Upload Date* : "+published+"\n\n*🦹‍♂️ Powered BY RAMIYA BOT*"
    
            await message.client.sendMessage(message.jid,YTV_UP,MessageType.text);
			var thumbdata = thumb
			var respoimage = await axios.get(`${thumbdata}`, { responseType: 'arraybuffer' })
			const thumbimg  = Buffer.from(respoimage.data)
            await message.client.sendMessage(message.jid,Buffer.from(videoBuffer.data), MessageType.video, {mimetype: Mimetype.mp4, ptt: false, caption: vcap, thumbnail: thumbimg, quoted: message.data});
        })
        .catch(
          async (err) => await message.client.sendMessage(message.jid,NO_RESULT,MessageType.text, {quoted: message.data}),
        )

      },
    )
	
	Ramiya.addCommand({ pattern: 'video ?(.*)', fromMe: amazone, deleteCommand: false, dontAddCommandList:true}, async (message, match) => {

        const link = match[1] // 😡 අදත් ආවද Code එක උස්සන්න තිරිසනො  😖
    
        if (!link) return await message.client.sendMessage(message.jid,YT_NEED,MessageType.text)
  
        await message.client.sendMessage(message.jid,DWLOAD_VID,MessageType.text);
		
		var url = `${Alexa.VID1}ytmp4?url=${link}&list=${Alexa.VID2}&apikey=${Alexa.VIDAPI}`
		
        await axios
          .get(`${url}`) // Request Code
          .then(async (response) => {
            const {
             url,title,channel,views,published,thumb,
            } = response.data.result
    
            const videoBuffer = await axios.get(url, {responseType: 'arraybuffer'})
            
            const vcap = Alexa.BOT_NAME+"\n\n*✽ Title* : "+title+"\n*✽ Channel* : "+channel+"\n*✽ Views* : "+views+"\n*✽ Upload Date* : "+published+"\n\n*🦹‍♂️ Powered BY RAMIYA BOT*"
    
            await message.client.sendMessage(message.jid,YTV_UP,MessageType.text);
			var thumbdata = thumb
			var respoimage = await axios.get(`${thumbdata}`, { responseType: 'arraybuffer' })
			const thumbimg  = Buffer.from(respoimage.data)
            await message.client.sendMessage(message.jid,Buffer.from(videoBuffer.data), MessageType.video, {mimetype: Mimetype.mp4, ptt: false, caption: vcap, thumbnail: thumbimg, quoted: message.data});
        })
        .catch(
          async (err) => await message.client.sendMessage(message.jid,NO_RESULT,MessageType.text, {quoted: message.data}),
        )

      },
    )

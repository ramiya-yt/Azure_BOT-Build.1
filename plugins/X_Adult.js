/* Copyright (C) 2021 RAMIYA - Alexa Team.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
RAMIYA - Alexa Team
*/
// 😡 අදත් ආවද Code එක උස්සන්න තිරිසනො  😖

// -----------------------------------------------------------------------------------------------------------------------------
//  ---- AZURE BOT ---- AZURE BOT ---- AZURE BOT ---- AZURE BOT ---- AZURE BOT ---- AZURE BOT ---- AZURE BOT ---- AZURE BOT ----
// -----------------------------------------------------------------------------------------------------------------------------

const Ramiya = require('../events');
const {MessageType,Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const { fetchJson } = require('../Fetcher')
var ruq = { cd: 'Li4vZmlsZXMvcmFtaXlh', encrypt: 'Code Encrypted BY RAMIYA' }  
var code = Buffer.from(ruq.cd, 'base64')
var file = code.toString('utf-8')
const Azure = require(file);
const Config = require('../config');
const Language = require('../language');
const Lang = Language.getString('scrapers');
const Xdesc = "*XNXX වීඩියෝ බාගත කරයි.*"
const XHdesc = "*XHAMSTER වීඩියෝ බාගත කරයි.*"
const XN_NEED = "😏 *Enter XNXX URL*\n 🎥 *Example* : _.xnx https://www.xnxx.com/video-zgvf7ee/home_fuck_"
const XH_NEED = "😏 *Enter XHAMSTER URL*\n 🎥 *Example* : _.xhx https://www_"
const DWLOAD_VID = "🤫 *Downloading Your Video...*"
const YTV_UP = "🔞 *Uploading Your Video...*"
const NO_RESULT = "*🤯 Oops Video Not Found...*"
const Need = "😏 *Enter Some Words.*"
const Searching = "🔞 _*Searching Xnxx Adult Videos...*_"
const XHSearching = "🔞 _*Searching Xhamster Adult Videos...*_"
const credit = "*🦹‍♂️ Powered BY AZURE*" 
let tp1 = Config.WORKTYPE == 'public' ? false : true
let tp2 = Config.WORKTYPE == 'public' ? true : false

// -----------------------------------------------------------------------------------------------------------------------------
//  ---- AZURE BOT ---- AZURE BOT ---- AZURE BOT ---- AZURE BOT ---- AZURE BOT ---- AZURE BOT ---- AZURE BOT ---- AZURE BOT ----
// -----------------------------------------------------------------------------------------------------------------------------

if (Config.ADULT_MODE == 'on') {
	
// -------------------------------------X-N-X-X--D-O-W-N-L-O-A-D-E-R------------------------------------------------------------------------
	
Ramiya.addCommand({ pattern: 'xnx ?(.*)', fromMe: tp1, desc: Xdesc, deleteCommand: false}, async (message, match) => {

        const link = match[1] // 😡 අදත් ආවද Code එක උස්සන්න තිරිසනො  😖
    
        if (!link) return await message.client.sendMessage(message.jid,XN_NEED,MessageType.text)
  
        await message.client.sendMessage(message.jid,DWLOAD_VID,MessageType.text); 
		
		var url = `${Azure.SITE3}xnxx?url=${link}&apikey=${Azure.S3API}`
		
        await axios
          .get(`${url}`) // Request Code
          .then(async (response) => {
            const {title,duration,} = response.data.result
			const {high,thumbSlide,} = response.data.result.files
    
			var time = duration/60
            const videoBuffer = await axios.get(high, {responseType: 'arraybuffer'})
			
            const vcap = Config.BOT_NAME+"\n\n*✽ Title* : "+title+"\n *✽Time :* "+time+" Minutes\n\n"+credit
				// CODE එක නම් උස්සන්න එපා
			var thumbdata = thumbSlide
			var respoimage = await axios.get(`${thumbdata}`, { responseType: 'arraybuffer' })
			const thumbimg  = Buffer.from(respoimage.data)
            await message.client.sendMessage(message.jid,YTV_UP,MessageType.text);

            await message.client.sendMessage(message.jid,Buffer.from(videoBuffer.data), MessageType.video, {mimetype: Mimetype.mp4, ptt: false, caption: vcap, thumbnail: thumbimg, quoted: message.data});
        })
        .catch(
          async (err) => await message.client.sendMessage(message.jid,NO_RESULT,MessageType.text, {quoted: message.data}),
        )

      },
    )
	
Ramiya.addCommand({ pattern: 'xnx ?(.*)', fromMe: tp2, dontAddCommandList:true, deleteCommand: false}, async (message, match) => {

        const link = match[1] // 😡 අදත් ආවද Code එක උස්සන්න තිරිසනො  😖
    
        if (!link) return await message.client.sendMessage(message.jid,XN_NEED,MessageType.text)
  
        await message.client.sendMessage(message.jid,DWLOAD_VID,MessageType.text); 
		
		var url = `${Azure.SITE3}xnxx?url=${link}&apikey=${Azure.S3API}`
		
        await axios
          .get(`${url}`) // Request Code
          .then(async (response) => {
            const {title,duration,} = response.data.result
			const {high,thumbSlide,} = response.data.result.files
    
			var time = duration/60
            const videoBuffer = await axios.get(high, {responseType: 'arraybuffer'})
			// CODE එක නම් උස්සන්න එපා
            const vcap = Config.BOT_NAME+"\n\n*✽ Title* : "+title+"\n *✽Time :* "+time+" Minutes\n\n"+credit
			
			var thumbdata = thumbSlide
			var respoimage = await axios.get(`${thumbdata}`, { responseType: 'arraybuffer' })
			const thumbimg  = Buffer.from(respoimage.data)
            await message.client.sendMessage(message.jid,YTV_UP,MessageType.text);

            await message.client.sendMessage(message.jid,Buffer.from(videoBuffer.data), MessageType.video, {mimetype: Mimetype.mp4, ptt: false, caption: vcap, thumbnail: thumbimg, quoted: message.data});
        })
        .catch(
          async (err) => await message.client.sendMessage(message.jid,NO_RESULT,MessageType.text, {quoted: message.data}),
        )

      },
    )
	// -------------------------------------X-N-X-X--S-E-A-R-C-H------------------------------------------------------------------------
	
Ramiya.addCommand({ pattern: 'getxnx ?(.*)', fromMe: tp1}, async (message, match) => {

      if (match[1] === '') return await message.client.sendMessage(message.jid,Need,MessageType.text);    
	        await message.client.sendMessage(message.jid,Searching,MessageType.text);

			var _0x50f4=["\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x70\x69\x2E\x6C\x6F\x6C\x68\x75\x6D\x61\x6E\x2E\x78\x79\x7A\x2F\x61\x70\x69\x2F\x78\x6E\x78\x78\x73\x65\x61\x72\x63\x68\x3F\x61\x70\x69\x6B\x65\x79\x3D\x68\x74\x74\x70\x73\x3A\x2F\x2F\x77\x77\x77\x2E\x61\x6D\x64\x61\x6E\x69\x77\x61\x73\x61\x2E\x63\x6F\x6D\x26\x71\x75\x65\x72\x79\x3D",""];var url=`${_0x50f4[0]}${match[1]}${_0x50f4[1]}`
			
			var _0xcff7=["\x2A\u25C4\u2501\u2501\u2501\u2501\u2501\u2501\u2981\u2981\u25EF\u2981\u2981\u2501\u2501\u2501\u2501\u2501\u2501\u25BA\x2A\x0D\x0A\uD83E\uDDDB\u200D\u2642\uFE0F\x20\x2A\x41\x5A\x55\x52\x45\x20\x58\x4E\x58\x58\x20\x53\x45\x41\x52\x43\x48\x2A\uD83D\uDD1E\x20\x0D\x0A\u25C4\u2501\u2501\u2501\u2501\u2501\u2501\u2981\u2981\u25EF\u2981\u2981\u2501\u2501\u2501\u2501\u2501\u2501\u25BA"];var header=`${_0xcff7[0]}`
			
      azure_result = await fetchJson(`${url}`)
                      azure_result = azure_result.result
                      content = ""
                      for (var x of azure_result) {
                          content += `🪀 *Title* : ${x.title}\n`
                          content += `⏰ *Duration* : ${x.duration}\n`
                          content += `🔗 *Link* : ${x.link}\n\n`
                      }

      await message.client.sendMessage(message.jid,header+'\n\n'+content,MessageType.text, {quoted: message.data});
	  
    })
	
Ramiya.addCommand({ pattern: 'getxnx ?(.*)', fromMe: tp2}, async (message, match) => {

      if (match[1] === '') return await message.client.sendMessage(message.jid,Need,MessageType.text);    
	        await message.client.sendMessage(message.jid,Searching,MessageType.text);

			
			var _0x50f4=["\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x70\x69\x2E\x6C\x6F\x6C\x68\x75\x6D\x61\x6E\x2E\x78\x79\x7A\x2F\x61\x70\x69\x2F\x78\x6E\x78\x78\x73\x65\x61\x72\x63\x68\x3F\x61\x70\x69\x6B\x65\x79\x3D\x68\x74\x74\x70\x73\x3A\x2F\x2F\x77\x77\x77\x2E\x61\x6D\x64\x61\x6E\x69\x77\x61\x73\x61\x2E\x63\x6F\x6D\x26\x71\x75\x65\x72\x79\x3D",""];var url=`${_0x50f4[0]}${match[1]}${_0x50f4[1]}`
			
			var _0xcff7=["\x2A\u25C4\u2501\u2501\u2501\u2501\u2501\u2501\u2981\u2981\u25EF\u2981\u2981\u2501\u2501\u2501\u2501\u2501\u2501\u25BA\x2A\x0D\x0A\uD83E\uDDDB\u200D\u2642\uFE0F\x20\x2A\x41\x5A\x55\x52\x45\x20\x58\x4E\x58\x58\x20\x53\x45\x41\x52\x43\x48\x2A\uD83D\uDD1E\x20\x0D\x0A\u25C4\u2501\u2501\u2501\u2501\u2501\u2501\u2981\u2981\u25EF\u2981\u2981\u2501\u2501\u2501\u2501\u2501\u2501\u25BA"];var header=`${_0xcff7[0]}`
			
      azure_result = await fetchJson(`${url}`)
                      azure_result = azure_result.result
                      content = ""
                      for (var x of azure_result) {
                          content += `🪀 *Title* : ${x.title}\n`
                          content += `⏰ *Duration* : ${x.duration}\n`
                          content += `🔗 *Link* : ${x.link}\n\n`
                      }

      await message.client.sendMessage(message.jid,header+'\n\n'+content,MessageType.text, {quoted: message.data});
	  
    })
	
// -------------------------------------X-H-A-M-S-T-E-R--D-O-W-N-L-O-A-D-E-R------------------------------------------------------------------------
	
	// COMING SOON...
	
// -------------------------------------X-H-A-M-S-T-E-R---S-E-A-R-C-H------------------------------------------------------------------------
	
	Ramiya.addCommand({ pattern: 'xhm ?(.*)', fromMe: tp1}, async (message, match) => {

      if (match[1] === '') return await message.client.sendMessage(message.jid,Need,MessageType.text);    
	        await message.client.sendMessage(message.jid,XHSearching,MessageType.text);

			var _0x5099=["\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x70\x69\x2E\x6C\x6F\x6C\x68\x75\x6D\x61\x6E\x2E\x78\x79\x7A\x2F\x61\x70\x69\x2F\x78\x68\x61\x6D\x73\x74\x65\x72\x73\x65\x61\x72\x63\x68\x3F\x61\x70\x69\x6B\x65\x79\x3D\x68\x74\x74\x70\x73\x3A\x2F\x2F\x77\x77\x77\x2E\x61\x6D\x64\x61\x6E\x69\x77\x61\x73\x61\x2E\x63\x6F\x6D\x26\x71\x75\x65\x72\x79\x3D",""];var url=`${_0x5099[0]}${match[1]}${_0x5099[1]}`
			
			var _0xec80=["\x2A\u25C4\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2981\u2981\u25EF\u2981\u2981\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u25BA\x2A\x20\x0D\x0A\uD83E\uDDDB\u200D\u2642\uFE0F\x20\x2A\x41\x5A\x55\x52\x45\x20\x58\x48\x41\x4D\x53\x54\x45\x52\x20\x53\x45\x41\x52\x43\x48\x2A\uD83D\uDD1E\x20\x20\x0D\x0A\u25C4\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2981\u2981\u25EF\u2981\u2981\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u25BA"];const header=`${_0xec80[0]}`
			
      azure_xhresult = await fetchJson(`${url}`)
                      azure_xhresult = azure_xhresult.result
                      content = ""
                      for (var x of azure_xhresult) {
                          content += `🪀 *Title* : ${x.title}\n`
                          content += `⏰ *Duration* : ${x.duration} Minutes\n`
						  content += `⌚️ *Views* : ${x.views}\n`
                          content += `🔗 *Link* : ${x.link}\n\n`
                      }

      await message.client.sendMessage(message.jid,header+'\n\n'+content,MessageType.text, {quoted: message.data});
	  
    })
	
	Ramiya.addCommand({ pattern: 'xhm ?(.*)', fromMe: tp2}, async (message, match) => {

      if (match[1] === '') return await message.client.sendMessage(message.jid,Need,MessageType.text);    
	        await message.client.sendMessage(message.jid,XHSearching,MessageType.text);

			var _0x5099=["\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x70\x69\x2E\x6C\x6F\x6C\x68\x75\x6D\x61\x6E\x2E\x78\x79\x7A\x2F\x61\x70\x69\x2F\x78\x68\x61\x6D\x73\x74\x65\x72\x73\x65\x61\x72\x63\x68\x3F\x61\x70\x69\x6B\x65\x79\x3D\x68\x74\x74\x70\x73\x3A\x2F\x2F\x77\x77\x77\x2E\x61\x6D\x64\x61\x6E\x69\x77\x61\x73\x61\x2E\x63\x6F\x6D\x26\x71\x75\x65\x72\x79\x3D",""];var url=`${_0x5099[0]}${match[1]}${_0x5099[1]}`
			
			var _0xec80=["\x2A\u25C4\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2981\u2981\u25EF\u2981\u2981\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u25BA\x2A\x20\x0D\x0A\uD83E\uDDDB\u200D\u2642\uFE0F\x20\x2A\x41\x5A\x55\x52\x45\x20\x58\x48\x41\x4D\x53\x54\x45\x52\x20\x53\x45\x41\x52\x43\x48\x2A\uD83D\uDD1E\x20\x20\x0D\x0A\u25C4\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2981\u2981\u25EF\u2981\u2981\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u25BA"];const header=`${_0xec80[0]}`
			
      azure_xhresult = await fetchJson(`${url}`)
                      azure_xhresult = azure_xhresult.result
                      content = ""
                      for (var x of azure_xhresult) {
                          content += `🪀 *Title* : ${x.title}\n`
                          content += `⏰ *Duration* : ${x.duration} Minutes\n`
						  content += `⌚️ *Views* : ${x.views}\n`
                          content += `🔗 *Link* : ${x.link}\n\n`
                      }

      await message.client.sendMessage(message.jid,header+'\n\n'+content,MessageType.text, {quoted: message.data});
	  
    })
	
}//adult mode end

// -----------------------------------------------------------------------------------------------------------------------------
//  ---- AZURE BOT ---- AZURE BOT ---- AZURE BOT ---- AZURE BOT ---- AZURE BOT ---- AZURE BOT ---- AZURE BOT ---- AZURE BOT ----
// -----------------------------------------------------------------------------------------------------------------------------

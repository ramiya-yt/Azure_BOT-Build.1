/* Copyright (C) 2021 Azure RAMIYA
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
Azure RAMIYA
*/

const Azure = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const speedTest = require('@lh2020/speedtest-net');
const TinyURL = require('tinyurl');
const fs = require('fs');
const axios = require('axios');
const request = require('request');
const got = require("got");
const Config = require('../config');
const Language = require('../language');
const Lang = Language.getString('web');
const SLang = Language.getString('webss');
const ALang = Language.getString('amazone');
let tp1 = Config.WORKTYPE == 'public' ? false : true
let tp2 = Config.WORKTYPE == 'public' ? true : false

// -----------------------------------------------------------------------------------------------------------------------------
//  ---- AZURE BOT ---- AZURE BOT ---- AZURE BOT ---- AZURE BOT ---- AZURE BOT ---- AZURE BOT ---- AZURE BOT ---- AZURE BOT ----
// -----------------------------------------------------------------------------------------------------------------------------

// -----------------------------------------------P-I-N-G-----------------------------------------------------------------------


Azure.addCommand({pattern: 'ping$', fromMe: tp1, deleteCommand: false, desc: Lang.PING_DESC}, (async (message, match) => {
  var start = new Date().getTime();
  await message.sendMessage('```Ping!```');
  var end = new Date().getTime();

  await message.client.sendMessage(
    message.jid,'*Pong!*\n```' + (end - start) + 'ms```', MessageType.text, { quoted: message.data });
}));

Azure.addCommand({pattern: 'ping$', fromMe: tp2, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {
  var start = new Date().getTime();
  await message.sendMessage('```Ping!```');
  var end = new Date().getTime();

  await message.client.sendMessage(
    message.jid,'*Pong!*\n```' + (end - start) + 'ms```', MessageType.text, { quoted: message.data });
}));

// -----------------------------------------------U-R-L--S-H-O-R-T-N-E-R---------------------------------------------------------

Azure.addCommand({pattern: 'tiny ?(.*)', fromMe: tp1, desc: Lang.URL}, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, SLang.LİNK, MessageType.text);

        TinyURL.shorten(`${match[1]}`, async(res, err) => {
          if (err)
            await message.client.sendMessage(message.jid, '*#### Error! ####*\n\n' + '```' + err + '```', MessageType.text);

            await message.client.sendMessage(message.jid,`*Original Link:* ${match[1]}\n*Short Link:* ` + res, MessageType.text)
        });
    }));

Azure.addCommand({pattern: 'tiny ?(.*)', fromMe: tp2, dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, SLang.LİNK, MessageType.text);

        TinyURL.shorten(`${match[1]}`, async(res, err) => {
          if (err)
            await message.client.sendMessage(message.jid, '*#### Error! ####*\n\n' + '```' + err + '```', MessageType.text);

            await message.client.sendMessage(message.jid,`*Original Link:* ${match[1]}\n*Short Link:* ` + res, MessageType.text)
        });
    }));

// -----------------------------------------------C-A-L-C-U-L-A-T-O-R-------------------------------------------------------------

Azure.addCommand({pattern: 'calc ?(.*)', fromMe: tp1, desc: Lang.CALC }, (async (message, match) => {
        if (match[1].length < 3) { return await message.client.sendMessage(message.jid,Lang.VALİD, MessageType.text) }
        if (match[1].includes('+')) { var split = match[1].split('+'), azurex2 = split[1], azurex1 = split[0]
            var result = -(-azurex1 - azurex2)
            try { await message.client.sendMessage(message.jid,Lang.SUC + result, MessageType.text) }
            catch (err) { return await message.client.sendMessage(message.jid,Lang.UNSUC + err,MessageType.text);
            }
        }
        else if (match[1].includes('-')) { var split = match[1].split('-'), azurex4 = split[1], azurex3 = split[0] 
            var result = azurex3 - azurex4
            try { await message.client.sendMessage(message.jid,Lang.SUC + result, MessageType.text) }
            catch (err) { return await message.client.sendMessage(message.jid,Lang.UNSUC + err,MessageType.text);
            }
        }
        else if (match[1].includes('x')) { var split = match[1].split('x'), azurex6 = split[1], azurex5 = split[0] 
            var result = azurex5 * azurex6
            try { await message.client.sendMessage(message.jid,Lang.SUC + result, MessageType.text) }
            catch (err) { return await message.client.sendMessage(message.jid,Lang.UNSUC + err,MessageType.text);
            }
        }
        else if (match[1].includes('/')) { var split = match[1].split('/'), azurex8 = split[1], azurex7 = split[0] 
            var result = azurex7 / azurex8
            try { await message.client.sendMessage(message.jid,Lang.SUC + result, MessageType.text) }
            catch (err) { return await message.client.sendMessage(message.jid,Lang.UNSUC + err,MessageType.text)
            }
        }
    }));

Azure.addCommand({pattern: 'calc ?(.*)', fromMe: tp2, dontAddCommandList: true }, (async (message, match) => {
        if (match[1].length < 3) { return await message.client.sendMessage(message.jid,Lang.VALİD, MessageType.text) }
        if (match[1].includes('+')) { var split = match[1].split('+'), azurex2 = split[1], azurex1 = split[0]
            var result = -(-azurex1 - azurex2)
            try { await message.client.sendMessage(message.jid,Lang.SUC + result, MessageType.text) }
            catch (err) { return await message.client.sendMessage(message.jid,Lang.UNSUC + err,MessageType.text);
            }
        }
        else if (match[1].includes('-')) { var split = match[1].split('-'), azurex4 = split[1], azurex3 = split[0] 
            var result = azurex3 - azurex4
            try { await message.client.sendMessage(message.jid,Lang.SUC + result, MessageType.text) }
            catch (err) { return await message.client.sendMessage(message.jid,Lang.UNSUC + err,MessageType.text);
            }
        }
        else if (match[1].includes('x')) { var split = match[1].split('x'), azurex6 = split[1], azurex5 = split[0] 
            var result = azurex5 * azurex6
            try { await message.client.sendMessage(message.jid,Lang.SUC + result, MessageType.text) }
            catch (err) { return await message.client.sendMessage(message.jid,Lang.UNSUC + err,MessageType.text);
            }
        }
        else if (match[1].includes('/')) { var split = match[1].split('/'), azurex8 = split[1], azurex7 = split[0] 
            var result = azurex7 / azurex8
            try { await message.client.sendMessage(message.jid,Lang.SUC + result, MessageType.text) }
            catch (err) { return await message.client.sendMessage(message.jid,Lang.UNSUC + err,MessageType.text)
            }
        }
    }));

// -----------------------------------------------S-C-R-E-E-N-S-H-O-T-------------------------------------------------------------

Azure.addCommand({pattern: 'ss ?(.*)', fromMe: tp1, desc: SLang.SS_DESC}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(SLang.LİNK);

        var webimage = await axios.get(`https://shot.screenshotapi.net/screenshot?&full_page=true&url=${match[1]}&fresh=true&output=image&file_type=png&dark_mode=true&wait_for_event=load&delay=2000`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.BOT_BOT_NAME})

    }));

Azure.addCommand({pattern: 'ss ?(.*)', fromMe: tp2, dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(SLang.LİNK);

        var webimage = await axios.get(`https://shot.screenshotapi.net/screenshot?&full_page=true&url=${match[1]}&fresh=true&output=image&file_type=png&dark_mode=true&wait_for_event=load&delay=2000`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.BOT_BOT_NAME})

    }));
	
// -----------------------------------------------S-I-T-E--T-O--P-D-F---------------------------------------------------------------
	
Azure.addCommand({pattern: 'spdf ?(.*)', fromMe: tp1, desc: ALang.SPDF }, (async (message, match) => {

	
	if (match[1] === '') return await message.client.sendMessage(message.jid, ALang.SPDF_LINK, MessageType.text);
	var webimage = await axios.get(`https://api.html2pdf.app/v1/generate?url=${match[1]}&apiKey=${config.SPDFAPI}`, { responseType: 'arraybuffer' })
	
	await message.client.sendMessage(message.jid, ALang.SPDF_PROC, MessageType.text);
	await message.sendMessage(Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf, filename: 'SITE2PDF-AZURE.pdf'}
	)
	}));
	
Azure.addCommand({pattern: 'spdf ?(.*)', fromMe: tp2, desc: ALang.SPDF }, (async (message, match) => {

	
	if (match[1] === '') return await message.client.sendMessage(message.jid, ALang.SPDF_LINK, MessageType.text);
	var webimage = await axios.get(`https://api.html2pdf.app/v1/generate?url=${match[1]}&apiKey=${config.SPDFAPI}`, { responseType: 'arraybuffer' })
	
	await message.client.sendMessage(message.jid, ALang.SPDF_PROC, MessageType.text);
	await message.sendMessage(Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf, filename: 'SITE2PDF-AZURE.pdf'}
	)
	}));
	
// -----------------------------------------------------------------------------------------------------------------------------
//  ---- AZURE BOT ---- AZURE BOT ---- AZURE BOT ---- AZURE BOT ---- AZURE BOT ---- AZURE BOT ---- AZURE BOT ---- AZURE BOT ----
// -----------------------------------------------------------------------------------------------------------------------------

/* Copyright (C) 2021 AZURE - RAMIYA
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
AZURE - RAMIYA
*/
const Azure = require('../events');
const {MessageType, Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const ffmpeg = require('fluent-ffmpeg');
const {execFile} = require('child_process');
const cwebp = require('cwebp-bin');
const Config = require('../config');
const Heroku = require('heroku-client');
const Language = require('../language');
const Lang = Language.getString('spammer');
const reply = "*Please Reply To Any Message!*"
const longmsg = "🦹‍♂️ *Error :- එක්වරකට Spam කල හැක්කේ 500ක් දක්වා පමණි. කරුණාකර 1ත් 500ත් අතර ගණනක් ඇතුලත් කරන්න*"
const enterno = "🦹‍♂️ *Command එක ඉදිරියෙන් කිරිමට අවශ්‍ය ප්‍රමාණය ඇතුලත් කරන්න.* \nText Spam :- 1 සිට 1000 දක්වා අගයක්\nPhoto Spam/Audio Spam :- 1 සිට 500 දක්වා අගයක්\n*Spam නැවැත්විමට  .killspam ඇතුලත් කරන්න*"
const start = "😼 ක්ක්ක්ක්ක් නමස්තෙ නමස්කාරකම් කියලා පටන් ගන්නම් දුවන්න නම් හදන්න එපා ඈ 😹"


const heroku = new Heroku({
    token: Config.HEROKU.API_KEY
});


let baseURI = '/apps/' + Config.HEROKU.APP_NAME;

// -----------------------------------------------------------------------------------------------------------------------------
//  ---- AZURE BOT ---- AZURE BOT ---- AZURE BOT ---- AZURE BOT ---- AZURE BOT ---- AZURE BOT ---- AZURE BOT ---- AZURE BOT ----
// -----------------------------------------------------------------------------------------------------------------------------

// ------------------------------------------------S-P-A-M----M-E-N-U--------------------------------------------------------------------
const menu = `▭▬▭▬▭▬▭▬▭▬▭▬▭
 😹 *SPAM Commands* ☠️
▭▬▭▬▭▬▭▬▭▬▭▬▭

🦹‍♂️ *.killspam*
⛲️ සපෑම් යැවීම නතර කිරීමට.

🦹‍♂️ *.xspam* {text}
⛲️ Command එක ඉදිරියෙන් text එක ඇතුලත් කරන්න.
_Ex :- .xspam bts shit_

🦹‍♂️ *.textspam* {count}
⛲️ Msg එකකට Reply ආකාරයේන් ඇතුලත් කරන්න. Command එක ඉදිරියෙන් ස්පෑම් විය යුතු වාර ගණන සදහන් කරන්න.
⭕️ ඉදිරියෙන් 1 සිට 1000 දක්වා ඉලක්කමක් ඇතුලත් කරන්න.
_Ex :- .textspam 200_

🦹‍♂️ *.photospam* {count}
⛲️ Photo එකකට Reply ආකාරයේන් ඇතුලත් කරන්න. Command එක ඉදිරියෙන් ස්පෑම් විය යුතු වාර ගණන සදහන් කරන්න.
⭕️ ඉදිරියෙන් 1 සිට 500 දක්වා ඉලක්කමක් ඇතුලත් කරන්න.
_Ex :- .photospam 300_

🦹‍♂️ *.stickerspam*
⛲️ Photo එකකට Reply ආකාරයේන් ඇතුලත් කරන්න. 
⭕️ Sticker එකකට Reply නොකර photo එකකට Reply කරන්න. Photo එක Sticker වී ස්පෑම් වේ.

🦹‍♂️ *.audspam* {count}
⛲️ Audio/Voice එකකට Reply ආකාරයේන් ඇතුලත් කරන්න. Command එක ඉදිරියෙන් ස්පෑම් විය යුතු වාර ගණන සදහන් කරන්න.
⭕️ ඉදිරියෙන් 1 සිට 500 දක්වා ඉලක්කමක් ඇතුලත් කරන්න.
_Ex :- .audspam 200_

----------------------------------------------
පහත Command වලට අපෙන් Plugin ලබාගත හැක.
https://t.me/azure_news_plugins
----------------------------------------------

🦹‍♂️ *.btsnews*
⛲️ BTS Group නොමග යැවිය හැකි Readmore Lag ස්පෑම් එකකි.

🦹‍♂️ *.btsfact*
⛲️ BTS Group නොමග යැවිය හැකි Readmore Lag ස්පෑම් එකකි.

🦹‍♂️ *specialbomb*
⛲️ Lag වෙන ස්පෑම් එකකි.

☠️ තව ස්පෑම් commands ඉදිරියේදී බලාපොරොත්තු වන්න.
══════════════════
       *Copyright © AZURE*
     POWERED BY RAMIYA
══════════════════ `

Azure.addCommand({pattern: 'spam', fromMe: true}, (async (message, match) => {

    await message.client.sendMessage(message.jid, menu, MessageType.text);
}));

// -------------------------------------------------K-I-L-L--S-P-A-M---------------------------------------------------------------------

Azure.addCommand({pattern: 'killspam', fromMe: true, dontAddCommandList: true, desc: Lang.STOP_SPAMDESC}, (async (message, match) => {

    await message.client.sendMessage(message.jid, Lang.STOP_SPAM, MessageType.text);

    console.log(baseURI);
    await heroku.delete(baseURI + '/dynos').catch(async (error) => {
        await message.client.sendMessage(message.jid, error.message, MessageType.text);

    });
}));
// -----------------------------------------------N-O-R-M-A-L--S-P-A-M-----------------------------------------------------------------------

Azure.addCommand({pattern: 'xspam ?(.*)', fromMe: true, dontAddCommandList: true, desc: Lang.SPAM_DESC}, (async (message, match) => {

    if (match[1] === '') {return await message.client.sendMessage(message.jid, Lang.NEED_WORD); }

    var spam = `${match[1]}`
    var xtext = spam.replace(/#/g, "\n");
	
await message.client.sendMessage(message.jid, start, MessageType.text);
// Loop 1000 times
	for (let i = 0; i < 1000; i++) { // for start
	
    await message.client.sendMessage(message.jid, xtext, MessageType.text);
	} // for end
	
	}));

// -----------------------------------------------T-E-X-T--S-P-A-M-----------------------------------------------------------------------

Azure.addCommand({pattern: 'textspam ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (!message.reply_message) return await message.client.sendMessage(message.jid,Reply, MessageType.text);

    if (match[1] === '') {return await message.client.sendMessage(message.jid, enterno, MessageType.text); }
	const ntimes = match[1]
	
    var ztext = message.reply_message.text
	
	if (ntimes < 1000) {
await message.client.sendMessage(message.jid, start, MessageType.text);
// Loop n times
	for (let i = 0; i < ntimes; i++) { // for start
	
    await message.client.sendMessage(message.jid, ztext, MessageType.text);
	} // for end
	} //times end
	
	else if (ntimes > 1001) {
		await message.client.sendMessage(message.jid, longmsg, MessageType.text);
	}
	}));
	
// -----------------------------------------------P-H-O-T-O--S-P-A-M-----------------------------------------------------------------------

Azure.addCommand({pattern: 'photospam ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
    
    if (!message.reply_message) return await message.client.sendMessage(message.jid, Lang.FOTO_FOT, MessageType.text);
	if (match[1] === '') {return await message.client.sendMessage(message.jid, enterno, MessageType.text); }
	const ntimes = match[1]
	
	if (ntimes < 501) {
    var location = await message.client.downloadAndSaveMediaMessage({
        key: {
            remoteJid: message.reply_message.jid,
            id: message.reply_message.id
        },
        message: message.reply_message.data.quotedMessage
    });

    ffmpeg(location)
        .save('output.jpg')
        .on('end', async () => {
	await message.client.sendMessage(message.jid, start, MessageType.text);	
			// Loop n times
		for (let i = 0; i < ntimes; i++) { // for start
			await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg});
			await new Promise(r => setTimeout(r, 500));
		} // for end
		
}); //ffmpeg end
	} //times end
	
	else if (ntimes > 501) {
		await message.client.sendMessage(message.jid, longmsg, MessageType.text);
	}
}));

// -----------------------------------------------S-T-I-C-K-E-R--S-P-A-M-----------------------------------------------------------------------

Azure.addCommand({pattern: 'stickerspam$', fromMe: true, dontAddCommandList: true}, (async (message, match) => {    

    if (!message.reply_message) return await message.client.sendMessage(message.jid,Lang.ST_NEED, MessageType.text);
    if (message.reply_message.sticker) return await message.client.sendMessage(message.jid, Lang.ST_ST, MessageType.text);

    var locspam = await message.client.downloadAndSaveMediaMessage({
        key: {
            remoteJid: message.reply_message.jid,
            id: message.reply_message.id
        },
        message: message.reply_message.data.quotedMessage
    });
await message.client.sendMessage(message.jid, start, MessageType.text);	

    if (message.reply_message.video === false && message.reply_message.image) {
        execFile(cwebp, [locspam, '-o', 'output.webp'], async err => {
            if (err) {
                throw err;
            }
            setInterval(async () => {
                await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker)
            }, 1000)
        });
    }

    ffmpeg(locspam)
        .outputOptions(["-y", "-vcodec libwebp", "-lossless 1", "-qscale 1", "-preset default", "-loop 0", "-an", "-vsync 0", "-s 512x512"])
        .save('sticker.webp')
        .on('end', async () => {
            setInterval(async () => {
                await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);
            }, 1000)
        });
		
}));

// -----------------------------------------------A-U-D-I-O--S-P-A-M-----------------------------------------------------------------------

Azure.addCommand({pattern: 'audspam ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
    
    if (!message.reply_message) return await message.client.sendMessage(message.jid, Lang.AU_REP, MessageType.text);
	if (match[1] === '') {return await message.client.sendMessage(message.jid, enterno, MessageType.text); }
	const ntimes = match[1]
	
	if (ntimes < 501) {
    var location = await message.client.downloadAndSaveMediaMessage({
        key: {
            remoteJid: message.reply_message.jid,
            id: message.reply_message.id
        },
        message: message.reply_message.data.quotedMessage
    });

    ffmpeg(location)
        .format('mp3')
        .save('output.mp3')
        .on('end', async () => {
// Loop n times
		for (let i = 0; i < ntimes; i++) { // for start
            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});
			await new Promise(r => setTimeout(r, 500));
		} // for end
			}); //ffmpeg end
			} //times end
	
	else if (ntimes > 501) {
		await message.client.sendMessage(message.jid, longmsg, MessageType.text);
	}
}));

// -----------------------------------------------------------------------------------------------------------------------------
//  ---- AZURE BOT ---- AZURE BOT ---- AZURE BOT ---- AZURE BOT ---- AZURE BOT ---- AZURE BOT ---- AZURE BOT ---- AZURE BOT ----
// -----------------------------------------------------------------------------------------------------------------------------

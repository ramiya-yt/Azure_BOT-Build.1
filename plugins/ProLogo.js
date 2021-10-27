/* Copyright (C) 2021 TENUX-Neotro.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
AZURE

ALL CREDITS TO API OWNERS AND AMAZONE ALEXA Team :)
*/

const AZURE = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const hatzu = require('../hatzu');
const config = require('../files/config');
const NEED = "*🍭YOU MUST TYPE SOME WORDS*"
const desc = "Text to image Pack";
let ta = Config.WORKTYPE == 'public' ? false : true
let tb = Config.WORKTYPE == 'public' ? true : false

AZURE.addCommand({ pattern: 'prologo ?(.*)', fromMe: ta,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`${config.HTTPS}${config.SCRAPE}${config.SUP_HEROKU}${config.QR}name=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTIONS})
    }));

AZURE.addCommand({ pattern: 'prologo ?(.*)', fromMe: tb,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`${config.HTTPS}${config.SCRAPE}${config.SUP_HEROKU}${config.QR}name=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTIONS})
    }));

/* Copyright (C) 2021 AZURE - RAMIYA
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
AZURE - RAMIYA
*/

const Ramiya = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const axios = require('axios');
const Config = require('../config');
const Language = require('../language');
const Lang = Language.getString('amazone');
const ALang = Language.getString('scrapers');
var ruq = { cd: 'Li4vZmlsZXMvcmFtaXlh', encrypt: 'Code Encrypted BY RAMIYA' }  
var code = Buffer.from(ruq.cd, 'base64')
var file = code.toString('utf-8')
const Azure = require(file);
let tp1 = Config.WORKTYPE == 'public' ? false : true
let tp2 = Config.WORKTYPE == 'public' ? true : false

// -----------------------------------------------------------------------------------------------------------------------------
//  ---- AZURE BOT ---- AZURE BOT ---- AZURE BOT ---- AZURE BOT ---- AZURE BOT ---- AZURE BOT ---- AZURE BOT ---- AZURE BOT ----
// -----------------------------------------------------------------------------------------------------------------------------

// -------------------------------------I--N--S--T--A------P--H--O--T--O------------------------------------------------------------------------

Ramiya.addCommand({ pattern: 'igp ?(.*)', fromMe: tp1, desc: Lang.PINSTA}, async (message, match) => {

    const link = match[1]

    if (!link) return await message.sendMessage(" *Give Vaild Insta Link That Includes Photo* ")

    await message.sendMessage('👻 *Insta Downloader* 🕊 \n'+ALang.DOWNLOADING_VIDEO)
	
			var url = `${Azure.SITE12}${Azure.IG}?link=${link}`

				await axios
					.get(`${url}`)
					.then(async(response) => {
						const {link,} = response.data.result.result
						

						const linkdata = await axios.get(link, {responseType: 'arraybuffer'})

						await message.sendMessage(Buffer.from(linkdata.data), MessageType.image, {caption: Config.BOT_NAME,})
							.catch(
								async(err) => await message.sendMessage("⛔️ *INVALID LINK OR NO PHOTO FOUND*"),
							)
					})
					
}) /* pattern close*/

Ramiya.addCommand({ pattern: 'igp ?(.*)', fromMe: tp2, dontAddCommandList:true}, async (message, match) => {

    const link = match[1]

    if (!link) return await message.sendMessage(" *Give Vaild Insta Link That Includes Photo* ")

    await message.sendMessage('👻 *Insta Downloader* 🕊 \n'+ALang.DOWNLOADING_VIDEO)
	
			var url = `${Azure.SITE12}${Azure.IG}?link=${link}`

				await axios
					.get(`${url}`)
					.then(async(response) => {
						const {link,} = response.data.result.result
						

						const linkdata = await axios.get(link, {responseType: 'arraybuffer'})

						await message.sendMessage(Buffer.from(linkdata.data), MessageType.image, {caption: Config.BOT_NAME,})
							.catch(
								async(err) => await message.sendMessage("⛔️ *INVALID LINK OR NO PHOTO FOUND*"),
							)
					})
					
}) /* pattern close*/

// -------------------------------------I--N--S--T--A-----V--I--D--E--O------------------------------------------------------------------------

Ramiya.addCommand({ pattern: 'igv ?(.*)', fromMe: tp1, desc: Lang.VINSTA }, async (message, match) => {

    const link = match[1]

    if (!link) return await message.sendMessage(" *Give Vaild Insta Link That Includes Video* ")

    await message.sendMessage('👻 *Insta Downloader* 🕊 \n'+ALang.DOWNLOADING_VIDEO)

			var url = `${Azure.SITE12}${Azure.IG}?link=${link}`

				await axios
					.get(`${url}`)
					.then(async(response) => {
						const {link,} = response.data.result.result

						const linkdata = await axios.get(link, {responseType: 'arraybuffer'})

						await message.sendMessage(Buffer.from(linkdata.data), MessageType.video, {caption: Config.BOT_NAME,})
							.catch(
								async(err) => await message.sendMessage("⛔️ *INVALID LINK OR NO VIDEO FOUND*"),
							)
					})
					
}) /* pattern close*/

Ramiya.addCommand({ pattern: 'igv ?(.*)', fromMe: tp2, dontAddCommandList:true}, async (message, match) => {

    const link = match[1]

    if (!link) return await message.sendMessage(" *Give Vaild Insta Link That Includes Video* ")

    await message.sendMessage('👻 *Insta Downloader* 🕊 \n'+ALang.DOWNLOADING_VIDEO)

			var url = `${Azure.SITE12}${Azure.IG}?link=${link}`

				await axios
					.get(`${url}`)
					.then(async(response) => {
						const {link,} = response.data.result.result

						const linkdata = await axios.get(link, {responseType: 'arraybuffer'})

						await message.sendMessage(Buffer.from(linkdata.data), MessageType.video, {caption: Config.BOT_NAME,})
							.catch(
								async(err) => await message.sendMessage("⛔️ *INVALID LINK OR NO VIDEO FOUND*"),
							)
					})
					
}) /* pattern close*/

// -----------------------------------------------------------------------------------------------------------------------------
//  ---- AZURE BOT ---- AZURE BOT ---- AZURE BOT ---- AZURE BOT ---- AZURE BOT ---- AZURE BOT ---- AZURE BOT ---- AZURE BOT ----
// -----------------------------------------------------------------------------------------------------------------------------

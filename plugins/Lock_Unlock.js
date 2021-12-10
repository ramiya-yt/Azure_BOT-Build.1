/* Copyright (C) 2021 RAMIYA - AZURE
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
RAMIYA - AZURE Team
*/
// 😡 අදත් ආවද Code එක උස්සන්න තිරිසනො  😖

// ලොකු මහන්සියකින් හදපු Code එකක් මේක, උස්සන්න එපා

// Don't Steal this Code. I worked so hard to make this.

/* 
────────────────────────────────────────────────────────────────────────────────────────────────
─██████████████────██████████████████────██████──██████────████████████████──────██████████████─
─██░░░░░░░░░░██────██░░░░░░░░░░░░░░██────██░░██──██░░██────██░░░░░░░░░░░░██──────██░░░░░░░░░░██─
─██░░██████░░██────████████████░░░░██────██░░██──██░░██────██░░████████░░██──────██░░██████████─
─██░░██──██░░██────────────████░░████────██░░██──██░░██────██░░██────██░░██──────██░░██─────────
─██░░██████░░██──────────████░░████──────██░░██──██░░██────██░░████████░░██──────██░░██████████─
─██░░░░░░░░░░██────────████░░████────────██░░██──██░░██────██░░░░░░░░░░░░██──────██░░░░░░░░░░██─
─██░░██████░░██──────████░░████──────────██░░██──██░░██────██░░██████░░████──────██░░██████████─
─██░░██──██░░██────████░░████────────────██░░██──██░░██────██░░██──██░░██────────██░░██─────────
─██░░██──██░░██────██░░░░████████████────██░░██████░░██────██░░██──██░░██████────██░░██████████─
─██░░██──██░░██────██░░░░░░░░░░░░░░██────██░░░░░░░░░░██────██░░██──██░░░░░░██────██░░░░░░░░░░██─
─██████──██████────██████████████████────██████████████────██████──██████████────██████████████─
────────────────────────────────────────────────────────────────────────────────────────────────


╔═══╗╔═══╗╔═══╗╔═══╗╔═══╗───╔══╗─╔╗──╔╗───╔═══╗╔═══╗╔═╗╔═╗╔══╗╔╗──╔╗╔═══╗
║╔═╗║║╔═╗║╚╗╔╗║║╔══╝╚╗╔╗║───║╔╗║─║╚╗╔╝║───║╔═╗║║╔═╗║║║╚╝║║╚╣╠╝║╚╗╔╝║║╔═╗║
║║─╚╝║║─║║─║║║║║╚══╗─║║║║───║╚╝╚╗╚╗╚╝╔╝───║╚═╝║║║─║║║╔╗╔╗║─║║─╚╗╚╝╔╝║║─║║
║║─╔╗║║─║║─║║║║║╔══╝─║║║║───║╔═╗║─╚╗╔╝────║╔╗╔╝║╚═╝║║║║║║║─║║──╚╗╔╝─║╚═╝║
║╚═╝║║╚═╝║╔╝╚╝║║╚══╗╔╝╚╝║╔╦╗║╚═╝║──║║──╔╦╗║║║╚╗║╔═╗║║║║║║║╔╣╠╗──║║──║╔═╗║
╚═══╝╚═══╝╚═══╝╚═══╝╚═══╝╚╩╝╚═══╝──╚╝──╚╩╝╚╝╚═╝╚╝─╚╝╚╝╚╝╚╝╚══╝──╚╝──╚╝─╚╝

 */

// -----------------------------------------------------------------------------------------------------------------------------
//  ---- AZURE BOT ---- AZURE BOT ---- AZURE BOT ---- AZURE BOT ---- AZURE BOT ---- AZURE BOT ---- AZURE BOT ---- AZURE BOT ----
// -----------------------------------------------------------------------------------------------------------------------------

const Ramiya = require('../events');
const {MessageType,Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
var ruq = { cd: 'Li4vZmlsZXMvcmFtaXlh', encrypt: 'Code Encrypted BY RAMIYA' }  
var code = Buffer.from(ruq.cd, 'base64')
var file = code.toString('utf-8')
const xAzure = require(file);
const Config = require('../config');
let tp1 = Config.WORKTYPE == 'public' ? false : true
let tp2 = Config.WORKTYPE == 'public' ? true : false
const Word_NEED = "😏 *Enter Your MSG.*"
const Code_NEED = "😏 *Enter Your Azure_Code.*"
const coding_msg = "😼 _Your Secret Message is Generating..._"
const unlock_msg = "👩‍🎨 _Your Secret Message is Unlocking..._"
const xprefix = "Azure_Code"
const note = "🤗 *AZURE SECRET MSG* :-"
const NO_RESULT = "Invalid MSG"
const LOCK_DESC = "LOCKS Given Message"
const UNLOCK_DESC = "UNLOCKS Given Code"
const NOT_VALID = `😕 *This Code is Not Generated by Azure Bot.*
😏 *Codes Need to start with Azure_Code.*
📑 *Please Check Again.*

     _COPYRIGHT © RAMIYA_`

//------------------------------------------E-N-C-R-Y-P-T--L-O-C-K-----------------------------------------------------------------

Ramiya.addCommand({ pattern: 'lock ?(.*)', fromMe: tp1, desc: LOCK_DESC}, async (message, match) => {
		const msg = encodeURIComponent(match[1])
      if (!msg) return await message.client.sendMessage(message.jid,Word_NEED,MessageType.text)  


			var url = `${xAzure.SITE12}base?type=${xAzure.BASE1}&encode=${msg}` 
			
			await axios
					.get(`${url}`) // Don't Steal this Code. I worked so hard to make this.
					.then(async(response) => {
						const {encode,} = response.data.result
						const gotdata = `${encode}`
						// ලොකු මහන්සියකින් හදපු Code එකක් මේක, උස්සන්න එපා
						await message.client.sendMessage(message.jid,coding_msg, MessageType.text)
						await new Promise(r => setTimeout(r, 1000)); // Timeout
						await message.client.sendMessage(message.jid,xprefix +'#' + gotdata , MessageType.text, {quoted: message.data})
							.catch(
								async(err) => await message.sendMessage("⛔️ *Error*"),
							)
					})
	  
    })
	
Ramiya.addCommand({ pattern: 'lock ?(.*)', fromMe: tp2, dontAddCommandList:true}, async (message, match) => {
		const msg = encodeURIComponent(match[1])
      if (!msg) return await message.client.sendMessage(message.jid,Word_NEED,MessageType.text)  


			var url = `${xAzure.SITE12}base?type=${xAzure.BASE1}&encode=${msg}` 
			
			await axios
					.get(`${url}`) // Don't Steal this Code. I worked so hard to make this.
					.then(async(response) => {
						const {encode,} = response.data.result
						const gotdata = `${encode}`
						// ලොකු මහන්සියකින් හදපු Code එකක් මේක, උස්සන්න එපා
						await message.client.sendMessage(message.jid,coding_msg, MessageType.text)
						await new Promise(r => setTimeout(r, 1000)); // Timeout
						await message.client.sendMessage(message.jid,xprefix +'#' + gotdata , MessageType.text, {quoted: message.data})
							.catch(
								async(err) => await message.sendMessage("⛔️ *Error*"),
							)
					})
	  
    })	
	
//------------------------------------------D-E-C-R-Y-P-T--U-N-L-O-C-K-----------------------------------------------------------------

Ramiya.addCommand({ pattern: 'unlock ?(.*)', fromMe: tp1, desc: UNLOCK_DESC}, async (message, match) => {
		const msg = match[1]
      if (!msg) return await message.client.sendMessage(message.jid,Code_NEED,MessageType.text)  

       var code = '';
        try {
            if (msg.includes('Azure')) { // Don't Steal this Code. I worked so hard to make this.
                var yyyy = msg
                var ayyy = yyyy.split('#')[1]
                code = ayyy
            }
            else {     
                return await message.client.sendMessage(message.jid,NOT_VALID,MessageType.text);
            }
        } catch {
            return await message.client.sendMessage(message.jid,NO_RESULT,MessageType.text);
        }
		// ලොකු මහන්සියකින් හදපු Code එකක් මේක, උස්සන්න එපා
			var url = `${xAzure.SITE12}base?type=${xAzure.BASE1}&decode=${code}` // alt leys
			
			await axios
					.get(`${url}`)
					.then(async(response) => {
						const {string,} = response.data.result
						const gotdata = `${string}`
						
						await message.client.sendMessage(message.jid,unlock_msg, MessageType.text)
						await new Promise(r => setTimeout(r, 1000)); // Timeout
						await message.client.sendMessage(message.jid,note +'\n\n```' + gotdata +'```\n', MessageType.text, {quoted: message.data})
							.catch(
								async(err) => await message.sendMessage("⛔️ *Error*"),
							)
					})
	  
    })
	
Ramiya.addCommand({ pattern: 'unlock ?(.*)', fromMe: tp2, dontAddCommandList:true}, async (message, match) => {
		const msg = match[1]
      if (!msg) return await message.client.sendMessage(message.jid,Code_NEED,MessageType.text)  

       var code = '';
        try {
            if (msg.includes('Azure')) { // Don't Steal this Code. I worked so hard to make this.
                var yyyy = msg
                var ayyy = yyyy.split('#')[1]
                code = ayyy
            }
            else {     
                return await message.client.sendMessage(message.jid,NOT_VALID,MessageType.text);
            }
        } catch {
            return await message.client.sendMessage(message.jid,NO_RESULT,MessageType.text);
        }
		// ලොකු මහන්සියකින් හදපු Code එකක් මේක, උස්සන්න එපා
			var url = `${xAzure.SITE12}base?type=${xAzure.BASE1}&decode=${code}`
			
			await axios
					.get(`${url}`)
					.then(async(response) => {
						const {string,} = response.data.result
						const gotdata = `${string}`
						
						await message.client.sendMessage(message.jid,unlock_msg, MessageType.text)
						await new Promise(r => setTimeout(r, 1000)); // Timeout
						await message.client.sendMessage(message.jid,note +'\n\n```' + gotdata +'```\n', MessageType.text, {quoted: message.data})
							.catch(
								async(err) => await message.sendMessage("⛔️ *Error*"),
							)
					})
	  
    })
	
// -----------------------------------------------------------------------------------------------------------------------------
//  ---- AZURE BOT ---- AZURE BOT ---- AZURE BOT ---- AZURE BOT ---- AZURE BOT ---- AZURE BOT ---- AZURE BOT ---- AZURE BOT ----
// -----------------------------------------------------------------------------------------------------------------------------

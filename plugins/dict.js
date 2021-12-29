
/* Copyright (C) 2022 Ramiya Azure
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
Azure
*/

const Azure = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
/*const got = require('got');
const fs = require('fs');*/
const axios = require('axios');
const Config = require('../config');
const Language = require('../language');
const Lang = Language.getString('weather');
const { errorMessage, infoMessage } = require('../helpers');
let tp1 = Config.WORKTYPE == 'public' ? false : true
let tp2 = Config.WORKTYPE == 'public' ? true : false

//==================================================================================================

Azure.addCommand({pattern: 'lngcode', fromMe: tp1, dontAddCommandList: true}, (async (message, match) => {    

    await message.sendMessage('*Code:* en_US \n *Language:* English (US) \n\n *Code:* hi \n *Language:* Hindi \n\n *Code:* es \n *Language:* Spanish \n\n *Code:* fr \n *Language:* French \n\n *Code:* ja \n *Language:* Japanese \n\n *Code:* ru \n *Language:* Russian \n\n *Code:* en_GB \n *Language:* English (UK) \n\n *Code:* de \n *Language:* German \n\n *Code:* it \n *Language:* Italian \n\n *Code:* ko \n *Language:* Korean \n\n *Code:* pt-BR \n *Language:* Brazilian Portuguese \n\n *Code:* ar \n *Language:* Arabic \n\n *Code:* tr \n *Language:* Turkish \n\n');

}));

//==================================================================================================

Azure.addCommand({pattern: 'lngcode', fromMe: tp2, dontAddCommandList: true}, (async (message, match) => {    

    await message.sendMessage('*Code:* en_US \n *Language:* English (US) \n\n *Code:* hi \n *Language:* Hindi \n\n *Code:* es \n *Language:* Spanish \n\n *Code:* fr \n *Language:* French \n\n *Code:* ja \n *Language:* Japanese \n\n *Code:* ru \n *Language:* Russian \n\n *Code:* en_GB \n *Language:* English (UK) \n\n *Code:* de \n *Language:* German \n\n *Code:* it \n *Language:* Italian \n\n *Code:* ko \n *Language:* Korean \n\n *Code:* pt-BR \n *Language:* Brazilian Portuguese \n\n *Code:* ar \n *Language:* Arabic \n\n *Code:* tr \n *Language:* Turkish \n\n');

}));

//==================================================================================================

Azure.addCommand({ pattern: 'dict ?(.*)', fromMe: tp1, desc: "Use it as a dictionary.\nEg: .dict en_US;lead\n For supporting languages send *.lngcode*" }, async (message, match) => {

    if (!match[1]) return await message.sendMessage(errorMessage("Need word"))

 if (match[1].includes(';')) {
        var split = match[1].split(';');
        word = split[1];
        langcode = split[0];
         }
	else {
        word = match[1];
        langcode = 'en_US';
        }

    await message.sendMessage(infoMessage("Loading"))

	  
    await axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/${langcode}/${word}`)
      .then(async (response) => {
        const {
         definition,
	example,	
        } = response.data[0].meanings[0].definitions[0]

   
	
	const msg = `
        *${"Definition"}*: ${definition}    
        *${"Example"}*: ${example}`
	
	 await message.client.sendMessage(message.jid, msg , MessageType.text, {
          quoted: message.data,
        })
	})    
	    
	    
    await axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/${langcode}/${word}`)
      .then(async (response) => {
        const {
         definition,
	example,	
        } = response.data[0].meanings[0].definitions[1]

   
	
	const msg = `
        *${"Definition"}*: ${definition}    
        *${"Example"}*: ${example}`
	
	 await message.client.sendMessage(message.jid, msg , MessageType.text, {
          quoted: message.data,
        })
	 })
	
	     await axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/${langcode}/${word}`)
      .then(async (response) => {
        const {
         definition,
	example,	
        } = response.data[0].meanings[1].definitions[0]

   
	
	const msg = `
        *${"Definition"}*: ${definition}    
        *${"Example"}*: ${example}`
	
	 await message.client.sendMessage(message.jid, msg , MessageType.text, {
          quoted: message.data,
        })
	})    
		     
	 await axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/${langcode}/${word}`)
      .then(async (response) => {
        const {
         definition,
	example,	
        } = response.data[0].meanings[1].definitions[1]

   
	
	const msg = `
        *${"Definition"}*: ${definition}    
        *${"Example"}*: ${example}`
	
	 await message.client.sendMessage(message.jid, msg , MessageType.text, {
          quoted: message.data,
        })    
	})    
		 
		  await axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/${langcode}/${word}`)
      .then(async (response) => {
        const {
         definition,
	example,	
        } = response.data[1].meanings[0].definitions[0]

   
	
	const msg = `
        *${"Definition"}*: ${definition}    
        *${"Example"}*: ${example}`
	
	 await message.client.sendMessage(message.jid, msg , MessageType.text, {
          quoted: message.data,
        })
	    

      })
      
  },
)
//==================================================================================================
  
Azure.addCommand({ pattern: 'dict ?(.*)', fromMe: tp2, dontAddCommandList: true}, async (message, match) => {

    if (!match[1]) return await message.sendMessage(errorMessage("Need word"))

 if (match[1].includes(';')) {
        var split = match[1].split(';');
        word = split[1];
        langcode = split[0];
         }
	else {
        word = match[1];
        langcode = 'en_US';
        }

    await message.sendMessage(infoMessage("Loading"))

	  
    await axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/${langcode}/${word}`)
      .then(async (response) => {
        const {
         definition,
	example,	
        } = response.data[0].meanings[0].definitions[0]

   
	
	const msg = `
        *${"Definition"}*: ${definition}    
        *${"Example"}*: ${example}`
	
	 await message.client.sendMessage(message.jid, msg , MessageType.text, {
          quoted: message.data,
        })
	})    
	    
	    
    await axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/${langcode}/${word}`)
      .then(async (response) => {
        const {
         definition,
	example,	
        } = response.data[0].meanings[0].definitions[1]

   
	
	const msg = `
        *${"Definition"}*: ${definition}    
        *${"Example"}*: ${example}`
	
	 await message.client.sendMessage(message.jid, msg , MessageType.text, {
          quoted: message.data,
        })
	 })
	
	     await axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/${langcode}/${word}`)
      .then(async (response) => {
        const {
         definition,
	example,	
        } = response.data[0].meanings[1].definitions[0]

   
	
	const msg = `
        *${"Definition"}*: ${definition}    
        *${"Example"}*: ${example}`
	
	 await message.client.sendMessage(message.jid, msg , MessageType.text, {
          quoted: message.data,
        })
	})    
		     
	 await axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/${langcode}/${word}`)
      .then(async (response) => {
        const {
         definition,
	example,	
        } = response.data[0].meanings[1].definitions[1]

   
	
	const msg = `
        *${"Definition"}*: ${definition}    
        *${"Example"}*: ${example}`
	
	 await message.client.sendMessage(message.jid, msg , MessageType.text, {
          quoted: message.data,
        })    
	})    
		 
		  await axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/${langcode}/${word}`)
      .then(async (response) => {
        const {
         definition,
	example,	
        } = response.data[1].meanings[0].definitions[0]

   
	
	const msg = `
        *${"Definition"}*: ${definition}    
        *${"Example"}*: ${example}`
	
	 await message.client.sendMessage(message.jid, msg , MessageType.text, {
          quoted: message.data,
        })
	    

      })
      
  },
)
  

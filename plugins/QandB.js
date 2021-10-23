/*
const Amazone = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const axios = require('axios');
const Config = require('../config');
const Language = require('../language');
const Lang = Language.getString('amazone');


const brainly = "Finds the answer."
const usage = ".brainly <Question>"

const butuh = "```Enter the Question!```"

if (Config.WORKTYPE == 'public') {
Amazone.addCommand({ pattern: 'brainly ?(.*)', fromMe: false, dontAddCommandList:true}, async (message, match) => {

        const Soal = match[1]
        
        if (match[1] === '') return await message.client.sendMessage(message.jid, butuh, MessageType.text);

        await axios
          .get(`https://api.xteam.xyz/brainly?APIKEY=10c4105200edc0f0&soal=${Soal}`)
          .then(async (response) => {
            const {
              soal,
              jawaban,
            } = response.data

            const msg = `*ප්‍රශ්නය :*  ${soal}
*හමුවූ පිලිතුරු :*  ${jawaban.replace(/1Question/g, '*(1) Question*').replace(/2Question/g, '*(2) Question*').replace(/3Question/g, '*(3) Question*').replace(/Answer/g, '*Answer*').replace(/Brainly ditemukan, '')}`
            await message.client.sendMessage(message.jid, msg, MessageType.text)
           })
      },
    )
}

Amazone.addCommand({ pattern: 'brainly ?(.*)', fromMe: true, desc: Lang.BR_DESC}, async (message, match) => {

        const Soal = match[1]
        
        if (match[1] === '') return await message.client.sendMessage(message.jid, butuh, MessageType.text);

        await axios
          .get(`https://api.xteam.xyz/brainly?APIKEY=10c4105200edc0f0&soal=${Soal}`)
          .then(async (response) => {
            const {
              soal,
              jawaban,
            } = response.data

            const msg = `*ප්‍රශ්නය :*  ${soal}
*හමුවූ පිලිතුරු :*  ${jawaban.replace(/1Question/g, '*(1) Question*').replace(/2Question/g, '*(2) Question*').replace(/3Question/g, '*(3) Question*').replace(/Answer/g, '*Answer*').replace(/Brainly ditemukan, '')}`
            await message.client.sendMessage(message.jid, msg, MessageType.text)
           })
      },
    )

*/

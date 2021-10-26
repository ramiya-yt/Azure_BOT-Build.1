
const Azure = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const ll ="*```Enter a word```"
const Ln = "Free Fire logo maker"
let ramiya = Config.WORKTYPE == 'public' ? false : true
const code = ` *╭──────•◈•──────╮*
          *FreeFire Logos*
           *•   AZURE ©  •*
		   
🥰 මෙහි ලෝගෝ වර්ග 50ක් ඇත.
🤩 විධානයන් වන්නෙ *.ff01,.ff02,...ආදී ලෙස .ff50 දක්වා

*FULL COMMAND LIST CLICK READMORE*

​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
😜 *.ff01*
😜 *.ff02*
😜 *.ff03*
😜 *.ff04*
😜 *.ff05*
😜 *.ff06*
😜 *.ff07*
😜 *.ff08*
😜 *.ff09*
😜 *.ff10*
😜 *.ff11*
😜 *.ff12*
😜 *.ff13*
😜 *.ff14*
😜 *.ff15*
😜 *.ff16*
😜 *.ff17*
😜 *.ff18*
😜 *.ff19*
😜 *.ff20*
😜 *.ff21*
😜 *.ff22*
😜 *.ff23*
😜 *.ff24*
😜 *.ff25*
😜 *.ff26*
😜 *.ff27*
😜 *.ff28*
😜 *.ff29*
😜 *.ff30*
😜 *.ff31*
😜 *.ff32*
😜 *.ff33*
😜 *.ff34*
😜 *.ff35*
😜 *.ff36*
😜 *.ff37*
😜 *.ff38*
😜 *.ff39*
😜 *.ff40*
😜 *.ff41*
😜 *.ff42*
😜 *.ff43*
😜 *.ff44*
😜 *.ff45*
😜 *.ff46*
😜 *.ff47*
😜 *.ff48*
😜 *.ff49*
😜 *.ff50*

══════════════════
       *Copyright © AZURE*
     POWERED BY RAMIYA
══════════════════ `



    
      Azure.addCommand({pattern: 'ffpack', fromMe: ramiya, desc: Ln}, (async (message, match) => {

    var respoimage = await axios.get(`https://i.imgur.com/0OsAaBf.png`, { responseType: 'arraybuffer' })
        await message.client.sendMessage(message.jid, Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: code})
    }));
 
 Azure.addCommand({ pattern: 'ff01 ?(.*)', fromMe: ramiya, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://hardianto-chan.herokuapp.com/api/creator/memegen?atas=%20&bawah=${encodeURIComponent(match[1])}&imgurl=https://telegra.ph/file/db68993a2656b4748a16a.jpg&apikey=hardianto`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})

    }));
 
 Azure.addCommand({ pattern: 'ff02 ?(.*)', fromMe: ramiya, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://hardianto-chan.herokuapp.com/api/creator/memegen?atas=%20&bawah=${encodeURIComponent(match[1])}&imgurl=https://telegra.ph/file/ecf60ef31d7e75c2620fd.jpg&apikey=hardianto`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})

    }));
 
 
  Azure.addCommand({ pattern: 'ff03 ?(.*)', fromMe: ramiya, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://hardianto-chan.herokuapp.com/api/creator/memegen?atas=%20&bawah=${encodeURIComponent(match[1])}&imgurl=https://telegra.ph/file/4cc2fe3ca2a712d3b14cc.jpg&apikey=hardianto`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME })
    
    }));
 
 Azure.addCommand({ pattern: 'ff04 ?(.*)', fromMe: ramiya, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://hardianto-chan.herokuapp.com/api/creator/memegen?atas=%20&bawah=${encodeURIComponent(match[1])}&imgurl=https://telegra.ph/file/0a25356767c7833bbd9ca.jpg&apikey=hardianto`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})

    }));
 
  Azure.addCommand({ pattern: 'ff05 ?(.*)', fromMe: ramiya, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://hardianto-chan.herokuapp.com/api/creator/memegen?atas=%20&bawah=${encodeURIComponent(match[1])}&imgurl=https://telegra.ph/file/33eb446f4132e76a2fd58.jpg&apikey=hardianto`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})

    }));
 
  Azure.addCommand({ pattern: 'ff06 ?(.*)', fromMe: ramiya, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://hardianto-chan.herokuapp.com/api/creator/memegen?atas=%20&bawah=${encodeURIComponent(match[1])}&imgurl=https://telegra.ph/file/2f7de65a46ed366a63676.jpg&apikey=hardianto`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})

    }));
 
  Azure.addCommand({ pattern: 'ff07 ?(.*)', fromMe: ramiya, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://hardianto-chan.herokuapp.com/api/creator/memegen?atas=%20&bawah=${encodeURIComponent(match[1])}&imgurl=https://telegra.ph/file/e5f8d6f2e9f9000ebe3d9.jpg&apikey=hardianto`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})

    }));
 
  Azure.addCommand({ pattern: 'ff08 ?(.*)', fromMe: ramiya, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://hardianto-chan.herokuapp.com/api/creator/memegen?atas=%20&bawah=${encodeURIComponent(match[1])}&imgurl=https://telegra.ph/file/6090aadefff57762e8b35.jpg&apikey=hardianto`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})

    }));
 
  Azure.addCommand({ pattern: 'ff09 ?(.*)', fromMe: ramiya, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://hardianto-chan.herokuapp.com/api/creator/memegen?atas=%20&bawah=${encodeURIComponent(match[1])}&imgurl=https://telegra.ph/file/6ad8890337f9f2ea3b92a.jpg&apikey=hardianto`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})

    }));
 
  Azure.addCommand({ pattern: 'ff10 ?(.*)', fromMe: ramiya, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://hardianto-chan.herokuapp.com/api/creator/memegen?atas=%20&bawah=${encodeURIComponent(match[1])}&imgurl=https://telegra.ph/file/244312383300b34f99bcc.jpg&apikey=hardianto`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})

    }));
 
  Azure.addCommand({ pattern: 'ff11 ?(.*)', fromMe: ramiya, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://hardianto-chan.herokuapp.com/api/creator/memegen?atas=%20&bawah=${encodeURIComponent(match[1])}&imgurl=https://telegra.ph/file/b670c4eca0fafdb88a7f0.jpg&apikey=hardianto`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})

    }));
 
  Azure.addCommand({ pattern: 'ff12 ?(.*)', fromMe: ramiya, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://hardianto-chan.herokuapp.com/api/creator/memegen?atas=%20&bawah=${encodeURIComponent(match[1])}&imgurl=https://telegra.ph/file/95a088f7b0453d4d82b7a.jpg&apikey=hardianto`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})

    }));
 
  Azure.addCommand({ pattern: 'ff13 ?(.*)', fromMe: ramiya, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://hardianto-chan.herokuapp.com/api/creator/memegen?atas=%20&bawah=${encodeURIComponent(match[1])}&imgurl=https://telegra.ph/file/fd7500684c9ae986befc3.jpg&apikey=hardianto`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})

    }));
 
  Azure.addCommand({ pattern: 'ff14 ?(.*)', fromMe: ramiya, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://hardianto-chan.herokuapp.com/api/creator/memegen?atas=%20&bawah=${encodeURIComponent(match[1])}&imgurl=https://telegra.ph/file/1e962653c4412f5271844.jpg&apikey=hardianto`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})

    }));
 
  Azure.addCommand({ pattern: 'ff15 ?(.*)', fromMe: ramiya, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://hardianto-chan.herokuapp.com/api/creator/memegen?atas=%20&bawah=${encodeURIComponent(match[1])}&imgurl=https://telegra.ph/file/24483aa07e99edad88b4c.jpg&apikey=hardianto`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})

    }));
 
  Azure.addCommand({ pattern: 'ff16 ?(.*)', fromMe: ramiya, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://hardianto-chan.herokuapp.com/api/creator/memegen?atas=%20&bawah=${encodeURIComponent(match[1])}&imgurl=https://telegra.ph/file/129a6861e1efdfd0f7bca.jpg&apikey=hardianto`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})

    }));
 
  Azure.addCommand({ pattern: 'ff17 ?(.*)', fromMe: ramiya, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://hardianto-chan.herokuapp.com/api/creator/memegen?atas=%20&bawah=${encodeURIComponent(match[1])}&imgurl=https://telegra.ph/file/deab8459bd6d06b4f9421.jpg&apikey=hardianto`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})

    }));
 
  Azure.addCommand({ pattern: 'ff18 ?(.*)', fromMe: ramiya, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://hardianto-chan.herokuapp.com/api/creator/memegen?atas=%20&bawah=${encodeURIComponent(match[1])}&imgurl=https://telegra.ph/file/696f93289f32687d3b4f7.jpg&apikey=hardianto`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})

    }));
 
  Azure.addCommand({ pattern: 'ff19 ?(.*)', fromMe: ramiya, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://hardianto-chan.herokuapp.com/api/creator/memegen?atas=%20&bawah=${encodeURIComponent(match[1])}&imgurl=https://telegra.ph/file/f0145f46d111ed493e62b.jpg&apikey=hardianto`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})

    }));
 
  Azure.addCommand({ pattern: 'ff20 ?(.*)', fromMe: ramiya, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://hardianto-chan.herokuapp.com/api/creator/memegen?atas=%20&bawah=${encodeURIComponent(match[1])}&imgurl=https://telegra.ph/file/f577262bce9b3733402ea.jpg&apikey=hardianto`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})

    }));
 
  Azure.addCommand({ pattern: 'ff21 ?(.*)', fromMe: ramiya, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://hardianto-chan.herokuapp.com/api/creator/memegen?atas=%20&bawah=${encodeURIComponent(match[1])}&imgurl=https://telegra.ph/file/099f8580a45433eb6688c.jpg&apikey=hardianto`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})

    }));
 
  Azure.addCommand({ pattern: 'ff22 ?(.*)', fromMe: ramiya, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://hardianto-chan.herokuapp.com/api/creator/memegen?atas=%20&bawah=${encodeURIComponent(match[1])}&imgurl=https://telegra.ph/file/a1fe3fe9e295c24256ede.jpg&apikey=hardianto`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})

    }));
 
  Azure.addCommand({ pattern: 'ff23 ?(.*)', fromMe: ramiya, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://hardianto-chan.herokuapp.com/api/creator/memegen?atas=%20&bawah=${encodeURIComponent(match[1])}&imgurl=https://telegra.ph/file/2056e2cdd3a30971da0a6.jpg&apikey=hardianto`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})

    }));
 
  Azure.addCommand({ pattern: 'ff24 ?(.*)', fromMe: ramiya, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://hardianto-chan.herokuapp.com/api/creator/memegen?atas=%20&bawah=${encodeURIComponent(match[1])}&imgurl=https://telegra.ph/file/c730c8c57cfccb7756dc4.jpg&apikey=hardianto`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})

    }));
 
  Azure.addCommand({ pattern: 'ff25 ?(.*)', fromMe: ramiya, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://hardianto-chan.herokuapp.com/api/creator/memegen?atas=%20&bawah=${encodeURIComponent(match[1])}&imgurl=https://telegra.ph/file/d3749dfe51e3f13012e8e.jpg&apikey=hardianto`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})

    }));
 
  Azure.addCommand({ pattern: 'ff26 ?(.*)', fromMe: ramiya, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://hardianto-chan.herokuapp.com/api/creator/memegen?atas=%20&bawah=${encodeURIComponent(match[1])}&imgurl=https://telegra.ph/file/f376a881b40c1e994d75d.jpg&apikey=hardianto`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})

    }));
 
  Azure.addCommand({ pattern: 'ff27 ?(.*)', fromMe: ramiya, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://hardianto-chan.herokuapp.com/api/creator/memegen?atas=%20&bawah=${encodeURIComponent(match[1])}&imgurl=https://telegra.ph/file/1d307457e0778ae9b0d44.jpg&apikey=hardianto`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})

    }));
 
   Azure.addCommand({ pattern: 'ff28 ?(.*)', fromMe: ramiya, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://hardianto-chan.herokuapp.com/api/creator/memegen?atas=%20&bawah=${encodeURIComponent(match[1])}&imgurl=https://telegra.ph/file/bf886fc083f66fb404ff1.jpg&apikey=hardianto`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})

    }));
   Azure.addCommand({ pattern: 'ff29 ?(.*)', fromMe: ramiya, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://hardianto-chan.herokuapp.com/api/creator/memegen?atas=%20&bawah=${encodeURIComponent(match[1])}&imgurl=https://telegra.ph/file/d60199bc191c261497813.jpg&apikey=hardianto`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})

    }));
   Azure.addCommand({ pattern: 'ff30 ?(.*)', fromMe: ramiya, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://hardianto-chan.herokuapp.com/api/creator/memegen?atas=%20&bawah=${encodeURIComponent(match[1])}&imgurl=https://telegra.ph/file/a4c9fa2db7598d876345b.jpg&apikey=hardianto`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})

    }));
   Azure.addCommand({ pattern: 'ff31 ?(.*)', fromMe: ramiya, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://hardianto-chan.herokuapp.com/api/creator/memegen?atas=%20&bawah=${encodeURIComponent(match[1])}&imgurl=https://telegra.ph/file/0c87d73846b138193b203.jpg&apikey=hardianto`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})

    }));
   Azure.addCommand({ pattern: 'ff32 ?(.*)', fromMe: ramiya, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://hardianto-chan.herokuapp.com/api/creator/memegen?atas=%20&bawah=${encodeURIComponent(match[1])}&imgurl=https://telegra.ph/file/c41f0c5ec4a3874dfd7fe.jpg&apikey=hardianto`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})

    }));
   Azure.addCommand({ pattern: 'ff33 ?(.*)', fromMe: ramiya, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://hardianto-chan.herokuapp.com/api/creator/memegen?atas=%20&bawah=${encodeURIComponent(match[1])}&imgurl=https://telegra.ph/file/8c082e45671f2726c4010.jpg&apikey=hardianto`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})

    }));
   Azure.addCommand({ pattern: 'ff34 ?(.*)', fromMe: ramiya, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://hardianto-chan.herokuapp.com/api/creator/memegen?atas=%20&bawah=${encodeURIComponent(match[1])}&imgurl=https://telegra.ph/file/dd660681c36a3126c590f.jpg&apikey=hardianto`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})

    }));
   Azure.addCommand({ pattern: 'ff35 ?(.*)', fromMe: ramiya, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://hardianto-chan.herokuapp.com/api/creator/memegen?atas=%20&bawah=${encodeURIComponent(match[1])}&imgurl=https://telegra.ph/file/6c1412d523455abb2677a.jpg&apikey=hardianto`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})

    }));
   Azure.addCommand({ pattern: 'ff36 ?(.*)', fromMe: ramiya, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://hardianto-chan.herokuapp.com/api/creator/memegen?atas=%20&bawah=${encodeURIComponent(match[1])}&imgurl=https://telegra.ph/file/a421f4d85a38545be4926.jpg&apikey=hardianto`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})

    }));
   Azure.addCommand({ pattern: 'ff37 ?(.*)', fromMe: ramiya, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://hardianto-chan.herokuapp.com/api/creator/memegen?atas=%20&bawah=${encodeURIComponent(match[1])}&imgurl=https://telegra.ph/file/f0568921ca66fc0b01b83.jpg&apikey=hardianto`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})

    }));
   Azure.addCommand({ pattern: 'ff38 ?(.*)', fromMe: ramiya, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://hardianto-chan.herokuapp.com/api/creator/memegen?atas=%20&bawah=${encodeURIComponent(match[1])}&imgurl=https://telegra.ph/file/816aaa82629bfa202f3d4.jpg&apikey=hardianto`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})

    }));
   Azure.addCommand({ pattern: 'ff39 ?(.*)', fromMe: ramiya, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://hardianto-chan.herokuapp.com/api/creator/memegen?atas=%20&bawah=${encodeURIComponent(match[1])}&imgurl=https://telegra.ph/file/91ec01a9b6375b414803c.jpg&apikey=hardianto`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})

    }));
   Azure.addCommand({ pattern: 'ff40 ?(.*)', fromMe: ramiya, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://hardianto-chan.herokuapp.com/api/creator/memegen?atas=%20&bawah=${encodeURIComponent(match[1])}&imgurl=https://telegra.ph/file/5e0c5e4999b8aa21c021f.jpg&apikey=hardianto`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})

    }));
   Azure.addCommand({ pattern: 'ff41 ?(.*)', fromMe: ramiya, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://hardianto-chan.herokuapp.com/api/creator/memegen?atas=%20&bawah=${encodeURIComponent(match[1])}&imgurl=https://telegra.ph/file/0a9ae825b02db2cc591bb.jpg&apikey=hardianto`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})

    }));
   Azure.addCommand({ pattern: 'ff42 ?(.*)', fromMe: ramiya, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://hardianto-chan.herokuapp.com/api/creator/memegen?atas=%20&bawah=${encodeURIComponent(match[1])}&imgurl=https://telegra.ph/file/0df898e2ad77b8f69f91c.jpg&apikey=hardianto`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})

    }));
   Azure.addCommand({ pattern: 'ff43 ?(.*)', fromMe: ramiya, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://hardianto-chan.herokuapp.com/api/creator/memegen?atas=%20&bawah=${encodeURIComponent(match[1])}&imgurl=https://telegra.ph/file/e354930c0989a3077485e.jpg&apikey=hardianto`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})

    }));
   Azure.addCommand({ pattern: 'ff44 ?(.*)', fromMe: ramiya, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://hardianto-chan.herokuapp.com/api/creator/memegen?atas=%20&bawah=${encodeURIComponent(match[1])}&imgurl=https://telegra.ph/file/b41fc723da2d9835f0151.jpg&apikey=hardianto`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})

    }));
   Azure.addCommand({ pattern: 'ff45 ?(.*)', fromMe: ramiya, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://hardianto-chan.herokuapp.com/api/creator/memegen?atas=%20&bawah=${encodeURIComponent(match[1])}&imgurl=https://telegra.ph/file/bc64365aa73d60de3dcfd.jpg&apikey=hardianto`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})

    }));
   Azure.addCommand({ pattern: 'ff46 ?(.*)', fromMe: ramiya, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://hardianto-chan.herokuapp.com/api/creator/memegen?atas=%20&bawah=${encodeURIComponent(match[1])}&imgurl=https://telegra.ph/file/b82196ba630383df9da76.jpg&apikey=hardianto`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})

    }));
   Azure.addCommand({ pattern: 'ff47 ?(.*)', fromMe: ramiya, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://hardianto-chan.herokuapp.com/api/creator/memegen?atas=%20&bawah=${encodeURIComponent(match[1])}&imgurl=https://telegra.ph/file/8013933a6603cf2d75f94.jpg&apikey=hardianto`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})

    }));
   Azure.addCommand({ pattern: 'ff48 ?(.*)', fromMe: ramiya, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://hardianto-chan.herokuapp.com/api/creator/memegen?atas=%20&bawah=${encodeURIComponent(match[1])}&imgurl=https://telegra.ph/file/4cd1004d8c8f3a800138f.jpg&apikey=hardianto`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})

    }));
   Azure.addCommand({ pattern: 'ff49 ?(.*)', fromMe: ramiya, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://hardianto-chan.herokuapp.com/api/creator/memegen?atas=%20&bawah=${encodeURIComponent(match[1])}&imgurl=https://telegra.ph/file/7e9911e44f490fd5ba4bf.jpg&apikey=hardianto`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})

    }));
   Azure.addCommand({ pattern: 'ff50 ?(.*)', fromMe: ramiya, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://hardianto-chan.herokuapp.com/api/creator/memegen?atas=%20&bawah=${encodeURIComponent(match[1])}&imgurl=https://telegra.ph/file/816aaa82629bfa202f3d4.jpg&apikey=hardianto`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})

    }));
 


const Asena = require('../events');
const Config = require('../config');
const {MessageType,Mimetype} = require('@adiwajshing/baileys');
const Language = require('../language');
const Lang = Language.getString('_asena');
const axios = require('axios');
let td = Config.WORKTYPE == 'public' ? false : true

 
Asena.addCommand({pattern: 'editimg', fromMe: td, deleteCommand: false,}, (async (message, match) => {

        var respoimage = await axios.get(`https://i.imgur.com/kechie4.jpg`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `*╭──────•◈•──────╮*
   *IMG EDIT COMMANDS*
            *•   AZURE ©  •*

🛑 සැයු:- IMG එකක් Edit දාල තත්පර 6-12 අතර කාලයක් යනවා එන්න. එතකම් තව Command දාන්න එපා
🛑 සමහර වෙලාවට command වැඩ කරන්නෙ නෑ. එතකොට එකම Command එක ගගහා හිරකරන්න එපා.

👻 *.bwimage*
🤡Use: Applies a monochrome effect to image.

👻 *.vintageimage*
🤡Use: Applies a vinatge effect to video.

👻 *.edgeimage*
🤡Use: Applies a edge effect to the photo.

👻 *.enhanceimage*
🤡Use: Makes the photo clearer.

👻 *.blurimage*
🤡Use: Blurs the background of the photo.

👻 *.grenimage*
🤡Use: Applies grain effect to the photo.

👻 *.negativeimage*
🤡Use: Applies a negative color filter to the photo.

👻 *.rainbowimage*
🤡Use: Applies rainbow effect to the photo.

👻 *.colorimage*
🤡Use: It makes the colors of the photo more vivid and attractive.

👻 *.artimage*
🤡Use: Applies a art effect to the photo.

*╰──────•◈•──────╯* ` })
    }));

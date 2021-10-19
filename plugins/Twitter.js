const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const axios = require('axios');
const Config = require('../config');
const Language = require('../language');
const Lang = Language.getString('scrapers');
const capt = "😎 *DOWNLOADED BY AZURE BOT* 🕊"

if (Config.WORKTYPE == 'private') {
	
Asena.addCommand({ pattern: 'twitter ?(.*)', fromMe: true }, async (message, match) => {

    const link = match[1]

    if (!link) return await message.sendMessage(" *Give Vaild Twitter Link That Includes Photo or video* ")

    await message.sendMessage('👻 *AZURE Twitter Downloader* 🕊 \n'+Lang.DOWNLOADING_VIDEO)

    await axios
      .get(`https://api-anoncybfakeplayer.herokuapp.com/twdown?url=${link}`)
      .then(async (response) => {
        const {
          format,
          result,
        } = response.data

        const profileBuffer = await axios.get(result, {responseType: 'arraybuffer'})

        const msg = `${format}`
        
      if (msg === 'Image/jpg or png') { await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.image, {
          caption: capt,
        })}
		 	 
	if (msg === 'video/mp4') { await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.video, {
          caption: capt,
        })}

      })
      .catch(
        async (err) => await message.sendMessage("⛔️ *INVAID LINK OR NO PHOTO OR VIDEO FOUND*" ),
      )
  },
)
}

else if (Config.WORKTYPE == 'public') {
	Asena.addCommand({ pattern: 'twitter ?(.*)', fromMe: false }, async (message, match) => {

    const link = match[1]

    if (!link) return await message.sendMessage(" *Give Vaild Twitter Link That Includes Photo or video* ")

    await message.sendMessage('👻 *AZURE Twitter Downloader* 🕊 \n'+Lang.DOWNLOADING_VIDEO)

    await axios
      .get(`https://api-anoncybfakeplayer.herokuapp.com/twdown?url=${link}`)
      .then(async (response) => {
        const {
          format,
          result,
        } = response.data

        const profileBuffer = await axios.get(result, {responseType: 'arraybuffer'})

        const msg = `${format}`
        
      if (msg === 'Image/jpg or png') { await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.image, {
          caption: capt,
        })}
		 	 
	if (msg === 'video/mp4') { await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.video, {
          caption: capt,
        })}

      })
      .catch(
        async (err) => await message.sendMessage("⛔️ *INVALID LINK OR NO PHOTO OR VIDEO FOUND*" ),
      )
  },
)
}

/* Copyright (C) 2021 TENUX-Neotro.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
NEOTROX - TEENUHX
*/
var ruq = { cd: 'Li4vQWxleGEvc3lzdGVtaW1n', pay: '' }
var code = Buffer.from(ruq.cd, 'base64')
var file = code.toString('utf-8')
const Alexa = require(file);

function successfullMessage(msg) {
    return "🦹‍♂️ *AZURE*:  ```" + msg + "```"
}
function errorMessage(msg) {
    return "⛔️ *AZURE*:  ```" + msg + "```"
}
function infoMessage(msg) {
    return "❕ *AZURE*:  ```" + msg + "```"
}
function eScript(msg) {
    return `h${Alexa.XURL}e${Alexa.XEPS}${Alexa.XAPI}&data=${msg}`
}

module.exports = {
    successfullMessage,
    errorMessage,
    infoMessage,
    eScript
}

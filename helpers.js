/* Copyright (C) 2021 TENUX-Neotro.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
NEOTROX - TEENUHX
*/

function successfullMessage(msg) {
    return "🦹‍♂️ *AZURE*:  ```" + msg + "```"
}
function errorMessage(msg) {
    return "⛔️ *AZURE*:  ```" + msg + "```"
}
function infoMessage(msg) {
    return "❕ *AZURE*:  ```" + msg + "```"
}


module.exports = {
    successfullMessage,
    errorMessage,
    infoMessage
}

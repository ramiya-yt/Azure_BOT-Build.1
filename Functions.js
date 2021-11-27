function rsp {
    await message.sendMessage("HI")
}

/*function base1(msg) {
    var code = Buffer.from(msg, 'base64')
    var file = code.toString('utf-8')
    return file
}
*/
module.exports = {
    rsp,
    //base1,
}

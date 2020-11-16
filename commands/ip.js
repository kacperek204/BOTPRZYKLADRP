const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
    var ip = "connect cfx.re/join/495348"
    var embed = new Discord.RichEmbed()
    .setTitle(ip, false)
    .setColor("0099ff")

    message.channel.send(embed)

}

module.exports.help = {
    name: "ip"
}
const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
    var ip = "connect 62.171.183.115:22023"
    var embed = new Discord.RichEmbed()
    .setTitle(ip, false)
    .setColor("0099ff")

    message.channel.send(embed)

}

module.exports.help = {
    name: "ip"
}
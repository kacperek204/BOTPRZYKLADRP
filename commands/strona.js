const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
    var strona = "http://vitalityrp.svpj.pl/"
    var embed = new Discord.RichEmbed()
    .addField("Nasza strona internetowa:", strona, false)
    .setColor("#2E8DF1")

    message.channel.send(embed)
    message.channel.bulkDelete(1)
}

module.exports.help = {
    name: "strona"
}
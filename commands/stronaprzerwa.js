const Discord = require("discord.js");
const config = require('../config.json')

module.exports.run = async (bot, message, args) => {
    const filter = response => {
        return response.author.id === message.author.id
    };
    var embed = new Discord.RichEmbed()
    if (!message.member.hasPermission("MANAGE_MESSAGES"))
        return message.reply('Nie możesz 😆!')
    message.reply('Ile będzie trwała przerwa techniczna').then ((w) => {
        message.channel.awaitMessages(filter, {
            max: 1,
        }).then(c => {
            let time = c.first().content;
            message.channel.bulkDelete(4)
            var przerwa = 'Na naszej stronie internetowej prowadzone są prace techniczne'
            var embed = new Discord.RichEmbed()
            .setTitle(przerwa, false)
            .setColor('#F12E2E')
            .addField('Czas trwania przerwy', time, false)
            .addField("Autor:", message.author)
            .setTimestamp()
        
            message.channel.send(embed)
        
        })
    })
}

module.exports.help = {
    name: "stronaprzerwa"
}
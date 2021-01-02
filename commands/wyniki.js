const Discord = require("discord.js");
const config = require("../config.json")


module.exports.run = async (bot, message, args) => {
    const filter = response => {
        return response.author.id === message.author.id
    };
    if (!message.member.roles.find(r => r.name === config.rolawyniki)) return message.channel.send("Nie możesz :laughing: ");
    message.reply("Wl-Checker:").then((w) => {
        message.channel.awaitMessages(filter, {
            max: 1,
            time: 01010101010,
            errors: ['time']
        }).then(p => {
            let pyt = p.first().content;
            message.reply("Kto zdawał:").then((w) => {
                message.channel.awaitMessages(filter, {
                    max: 1,
                    time: 01010101010,
                    errors: ['time']
                }).then(k => {
                    let kto = k.first().content;
                    message.reply("Wpisz hexa:").then((w) => {
                        message.channel.awaitMessages(filter, {
                            max: 1,
                            time: 01010101010,
                            errors: ['time']
                        }).then(h => {
                            let hex = h.first().content;
                            message.reply("Czy zdał:").then((w) => {
                                message.channel.awaitMessages(filter, {
                                    max: 1,
                                    time: 01010101010,
                                    errors: ['time']
                                }).then(z => {
                                    let zdal = z.first().content;
                                    message.reply("Ilośc błędów:").then((w) => {
                                        message.channel.awaitMessages(filter, {
                                            max: 1,
                                            time: 01010101010,
                                            errors: ['time']
                                        }).then(i => {
                                            let ilo = i.first().content;
                                            message.reply("Które podejście:").then((w) => {
                                                message.channel.awaitMessages(filter, {
                                                    max: 1,
                                                    time: 01010101010,
                                                    errors: ['time']
                                                }).then(o => {
                                                    let pod = o.first().content;
                                                    var embed = new Discord.RichEmbed()
                                                    .addField("Osoby pytające:", `${pyt}`)
                                                    .addField("Kto zdawał:", `${kto}`)
                                                    .setTimestamp()
                                                    .addField("Hex:", `${hex}`)
                                                    .addField("Zdał:", `${zdal}`)
                                                    .addField("Ilość błędów:", `${ilo}`)
                                                    .addField("Które podejście:", `${pod}`)
                                                    .setColor("#E3F22B")
                                                    
                                                    message.channel.send(embed)
                                                    message.channel.bulkDelete(13)

                                                }).catch((w => {
                                                    message.reply(`Czasu upłynął! Spróbuj jeszcze raz!`)
                                                }))
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
}

module.exports.help = {
    name: "wyniki"
}
const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
    const filter = response => {
        return response.author.id === message.author.id
    };
    message.reply("WL-Checker:").then((w) => {
        message.channel.awaitMessages(filter, {
            max: 1,
            time: 12312,
            error: ["time"],
        }).then(q => {
            let wl = q.first().content;
            message.reply("Zdający:").then((w) => {
                message.channel.awaitMessages(filter, {
                    max: 1,
                    time: 123121,
                    error: ["time"],
                }).then(z => {
                    let zda = z.first().content;
                    message.reply("Podaj hex:").then((w) => {
                        message.channel.awaitMessages(filter, {
                            max: 1,
                            time: 99999,
                            error: ["time"],
                        }).then(h => {
                            let hex = h.first().content;
                            message.reply("Z jakiego serwera:").then((w) => {
                                message.channel.awaitMessages(filter, {
                                    max: 1,
                                    time: 99999,
                                    error: ["time"],
                                }).then(s => {
                                    let ser = s.first().content;
                                    let embed = new Discord.RichEmbed()
                                    .setTitle("Przeniesienie WL", false)
                                    .addField("Wl-Checker:", `${wl}`)
                                    .addField("Osoba zdająca:", `${zda}`)
                                    .addField("Hex:", `${hex}`)
                                    .addField("Serwer:", `${ser}`)
                                    .setColor("#ECFF00")
                                    .setTimestamp()
                
                                    message.channel.send(embed)
                                    message.channel.bulkDelete(9)
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
    name: "przenies"
}
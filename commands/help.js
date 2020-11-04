const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    
    let wiado = new Discord.RichEmbed()
    .setTitle("Pomoc:")
    .setColor("RED")
    .setDescription(`Wszystkie dostęne komendy na serwerze:
    !kick (@player) (Powód) - Wyrzucanie graczy
    !ban (@player) (Powód) - Banowanie graczy
    !mute (@player) (Czas)
    !ackept - akcpetowanie podań graczy (Potrzebna ranga Akceptowanie podań)
    !odrzuc - Odrzucanie podań graczy (Potrzebna ranga Ackeptowanie podań)
    !clear (ilość) - Czyszczenie czatu
    !dev - Pisanie devlogów
    !klawiszologia - Klawiszologia wyspy
    !ogloszenie - Ogłosznie 
    !otomoto - Możliwość wystawienia swojego auta na sprzedaż
    !say - Pisanie w imieniu bota
    !ip - Ip serwera
    !strona - Link do anszej strony internetowej
    `)
    message.channel.send(wiado)

}

module.exports.help = {
    name: "help"
}
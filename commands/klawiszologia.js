const Discord = require("discord.js");








module.exports.run = async(bot, message, args) => {
    var wiado = new Discord.RichEmbed()
    .setTitle("**KALWISZOLOGIA**")
    .setColor("#F7F137")
    .setDescription(`
    === **POZA POJAZDEM** ===

    F1 – Telefon
    F2 – Ekwipunek
    F3 – Animacje
    F7 – Faktury 
    X – Podnoszenie rąk
    Z – Lista obywateli
    Y - Ściąganie/Zakładanie ubrań
    F5 - Dowód/Prawo jazdy/Licencja na broń
    SHIFT + H - Zmiana strunek
    
    === **POJAZDY** ===
    
    E – Klakson
    Y – Silnik
    U – Kluczyki
    L – Pasy
    
    === **LSPD, EMS, LSCM** ===
    
    ↑  – Sygnał dźwiękowy
    Q – Sygnał świetlny
    
    === **FRAKCJE** ===
    
    F6 – Menu Frakcji
    DEL – Tablet Frakcyjny
    F10 - Panel organizacji
   
    === **DODATKOWE INFORMACJE** ===
    
    /shuff – Przesiadka z pasażera na kierowcę
    /opis – Ustawianie opisu
    `)
    message.channel.send(wiado)
}

module.exports.help = {
    name: "klawiszologia"
}
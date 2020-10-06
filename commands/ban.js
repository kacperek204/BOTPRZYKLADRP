const Discord = require("discord.js");
const config = require("../config.json");

module.exports.run = async (bot, message, args) => {
  const kLogs = message.guild.channels.find(channel => channel.name === "『🔧』ban");
  let bUser = message.guild.member(
    message.mentions.users.first() || message.guild.members.get(args[0])
  );
  if (!bUser) return message.channel.send("**Nie ma takiego użytkownika!**");
  let bReason = args.join(" ").slice(22);
  if (!message.member.hasPermission("MANAGE_MEMBERS"))
    return message.channel.send("**Nie masz permisji, aby banować**!");
  if (bUser.hasPermission("MANAGE_MESSAGES"))
    return message.channel.send("**Nie można zbanować tej osoby!**");

  let banEmbed = new Discord.RichEmbed()
    .setDescription("**Ban**")
    .setColor("#0099ff")
    .addField("**Zbanowana osoba**", `${bUser} z ID ${bUser.id}`)
    .addField(
      "**Zbanowany przez**",
      `<@${message.author.id}> z ID ${message.author.id}`
    )
    .addField("**Zbanowany w** ", message.channel)
    .setImage("https://i.imgur.com/giHwvzL.png")
    .addField("**Czas**", message.createdAt)
    .addField("**Powód**", bReason);

  let incidentchannel = message.guild.channels.get(config.banid)
  if (!incidentchannel)
    return message.channel.send("**Nie ma kanału z banami**");
    let logEmbed = new Discord.RichEmbed()
    .addField("Administrator:", `<@${message.author.id}>`, false)
    .setColor("RED")
    .addField("Wyrzucona osoba:", bUser, true)
    .addField("Powód:", bReason, true)  
    message.guild.member(bUser).ban(bReason);
    if(kLogs){
      kLogs.send(logEmbed);
  }else{
      return;
  }
    incidentchannel.send(banEmbed);
};

module.exports.help = {
  name: "ban",
};

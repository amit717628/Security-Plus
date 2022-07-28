const { MessageEmbed } = require("discord.js");
const { createPool } = require("mysql");
const client = require("../../index");

client.on("messageCreate", async (message) => {
    if(message.author.id == client.config.ignore) return
    if(message.author.id == message.guild.ownerId) return
    if(message.author.id == client.user.id) return
    
    if(message.stickers.size !==0) {
      await   message?.delete()
    const yobhai = new MessageEmbed()
    .setDescription(`${client.error} Don't send sticker here`)
.setColor(`DARK_BUT_NOT_BLACK`)
return message.channel.send({content: `${message.author}`, embeds: [yobhai]}).then(m => {
	setTimeout(() => {
	  m.delete().catch(() => {});
	}, 5000);
  });
}
})
// DEVELOPED BY AAYAN#5243
// JOIN OUR COMMUNITY FOR MORE COOL SRC LIKE THESE [ https://discord.gg/Z4tKgfgj9Y ]
// THESE IS ONLY A FREE EDITION , JOIN COMMUNITY FOR PREMIUM EDITION [ https://discord.gg/Z4tKgfgj9Y ]
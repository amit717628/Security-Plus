const { Message, Client, MessageEmbed } = require("discord.js");

module.exports = {
    name: "hide",
    aliases: ['h'],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
      if(!message.member.permissions.has(`MANAGE_CHANNELS`)) {
        message.reply("You don't have the permissions to Manage Channel");
         return;
     }
  const saichutiya = message.channel || message.mentions.channels.first() 
//
let member = message.guild.members.cache.get(client.user.id);
if(message.guild.me.permissions.has(`MANAGE_CHANNELS`)) {
  const embedi = new MessageEmbed()
  .setDescription("<:error:999937685877702696> | I don't have `MANAGE_CHANNELS` Permission")
  .setColor(`FF0000`)
return message.channel.send({embeds: [embedi]})
}
//
  //
  const role = message.guild.roles.everyone;
  saichutiya.permissionOverwrites.create(role, {
   VIEW_CHANNEL: false
 })

 const embed = new MessageEmbed()
 .setAuthor(`| ${message.author.tag}`, message.author.displayAvatarURL({dynamic: true}))
 .setDescription(`<:success:999936552362856478> | ${saichutiya} is now hidden from the ${role}`)
 .setColor(`FF0000`)
 message.channel.send({embeds: [embed]}).then(m => {
    setTimeout(() => {
      m.delete().catch(() => {});
    }, 7000);
  });

 //
  
    }}
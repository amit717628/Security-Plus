const { Message, Client, MessageEmbed } = require("discord.js");


module.exports = {
    name: "rolebots",
    aliases: ['rolebot'],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
      if(!message.member.permissions.has(`ADMINISTRATOR`)) {
        message.reply("You don't have the permissions to add role to bots");
         return;
     }
    
const role = message.guild.roles.cache.get(args[0])  ||  message.mentions.roles.first()  
        const io = new MessageEmbed()
        .setDescription(`To use these action you need to provide a role`)
        .addField(`Example`,`?rolebot @BOTS`)
        .setColor(`AQUA`)
        if(!role) return message.channel.send({embeds: [io]})
           
        
        
        message.guild.members.cache.filter(member => member.user.bot).map(a => a.roles.add(role)).catch((err) => {
        const erri = new messageEmbed()
        .setDescription(`${client.error}, Sorry I am not able to do these action due to less power or some other issue`)
        .setColor(`AQUA`)
        message.channel.send({embeds: [erri]})
        })
        const hogya = new MessageEmbed()
        .setTitle(`Result:`)
        .setDescription(`${client.success} Giving ${role} to all bots in these server these action may take some time`)
        message.channel.send({embeds: [hogya]})
          }}
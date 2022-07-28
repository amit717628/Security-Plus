const { Message, Client, MessageEmbed } = require("discord.js");


module.exports = {
    name: "unban",
    aliases: ['ub'],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
      if(message.member.permissions.has(`ADMINISTRATOR`)) return message.reply(`${client.error} You need admin perms`)
        let reason = args.slice(1).join(" ");
            let userID = args[0];
      
            if (!reason) reason = 'No reason given.';
            if (!args[0]) return message.reply({ embeds:[new MessageEmbed()
         
          
              .setDescription(`${client.error} You forget to provide the user id whome i have  to unban.`)]});
            if (isNaN(args[0])) return message.reply({ embeds:[new MessageEmbed()
             
          
              .setDescription(`${client.error} The ID stated is not a number.`)]});
      
            message.guild.bans.fetch().then(async bans => {
              if (bans.size == 0) return message.reply({ embeds:[new MessageEmbed()
               
            
                .setDescription(`${client.error} This server does not have anyone banned`)]});
              let bUser = bans.find(b => b.user.id == userID);
              if (!bUser) return message.reply({ embeds:[new MessageEmbed()
               
            
                .setDescription(`${client.error} The user ID mentioned is not banned`)]});
              await message.guild.members.unban(bUser.user, reason).catch(err => {
                console.log(err);
                return message.reply({ embeds:[new MessageEmbed()
                 
              
                  .setDescription(`${client.error} Something went wrong unbanning the id.`)]});
              }).then(() => {
                message.reply({ embeds:[new MessageEmbed()
               
              
                  .setDescription(` ${client.success} Successfully Unbanned!`)]});
              });
            });

    }};
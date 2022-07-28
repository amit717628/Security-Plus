const { Message, Client, MessageEmbed } = require("discord.js");


module.exports = {
    name: "unbanall",
    aliases: ['ub'],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
      if(message.member.permissions.has(`ADMINISTRATOR`)) return message.reply(`${client.error} You need admin perms`)
        message.guild.bans.fetch().then((bans) => {
            if (bans.size == 0) {
              {
                const embed = new MessageEmbed()
                  .setDescription(`${client.error} ! There are no banned users.`)
                  .setColor("AQUA");
                message.reply({embeds: [embed]}).then(m => {
                    setTimeout(() => {
                      m.delete().catch(() => {});
                    }, 7000);
                  });
            
              }
            } else {
              bans.forEach((ban) => {
                message.guild.members.unban(ban.user.id);
                
              });
      
            }})}}
const { Message, Client, MessageEmbed } = require("discord.js");


module.exports = {
    name: "about",
    aliases: ['stats'],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
const aayan = client.users.cache.get(`709169539249864775`) 

const embed = new MessageEmbed()
.setAuthor(`${aayan.tag}`, aayan.displayAvatarURL({dynamic: true}))
.setDescription(`Developed by [${aayan.tag}](https://discord.com/users/${aayan.id})\nSource Code: [Github](https://github.com/AAYAN717628/Security-Plus)\n[Vist Support](https://discord.gg/Z4tKgfgj9Y)`)
.setColor(`AQUA`)
.setTimestamp()
.setFooter(`FREE VERSION`)
.setThumbnail(client.user.displayAvatarURL())
message.channel.send({embeds: [embed]})

    }
    
    

};
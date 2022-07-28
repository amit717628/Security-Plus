const { Message, Client, MessageEmbed } = require("discord.js");


module.exports = {
    name: "role",
    aliases: ['r'],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        if(message.member.permissions.has(`ADMINISTRATOR`)) return message.reply(`${client.error} You need admin perms`)
        const user = message.mentions.members.first() ||  message.guild.members.cache.get(args[0]);
        const guild = client.guilds.cache.get(message.guild.id)
        if(user ===undefined) return message.reply(`${client.error} User Not Found`)
        if(guild ===undefined) return console.log(`GUILD ERROR`)
        const userio = await guild.members.fetch(user.id).catch((e) => {
            console.log(`Unable to Get User`)
         });
      
        const rolemtn = message.mentions.roles.first() ||  message.guild.roles.cache.get(args[1])
        if(rolemtn ===undefined ) return message.reply(`${client.error} Role Not Found`)

        const userioi = userio.roles.cache.has(rolemtn.id)
        if(userioi ===true) {
           user.roles.remove(rolemtn.id, `${message.author.tag}(${message.author.id})`)
            const freefirepro = new  MessageEmbed()
            .setDescription(`${client.success} Successfully Removed Role`)
            .setColor(`FF0000`)
            return message.channel.send({embeds: [freefirepro]})
        } else {
            user.roles.add(rolemtn.id, `${message.author.tag}(${message.author.id})`)
            const freefirenood = new  MessageEmbed()
            .setDescription(`${client.success} Successfully Added Role`)
            .setColor(`FF0000`)
            return message.channel.send({embeds: [freefirenood]})
        }
    }}
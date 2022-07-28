const { Message, Client, MessageEmbed } = require("discord.js");

module.exports = {
    name: "kick",
    aliases: ['k'],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        if(message.member.permissions.has(`KICK_MEMBERS`)) return message.reply(`${client.error} You need kick perms`)
        const user = message.mentions.members.first() ||  message.guild.members.cache.get(args[0]);
        let rea = args.slice(1).join(" ") || "No Reason Provided"
        const emisai = new MessageEmbed()
        .setDescription(`<:error:999937685877702696> | User Not Found`)
        .setColor(`FF0000`)
    
        const saileon = new MessageEmbed()
        .setDescription(`<:error:999937685877702696> | Mention the user first`)
        .setColor(`FF0000`)
        if(!user) return message.reply({embeds: [saileon]})
        if(user ===undefined) return message.reply({embeds: [emisai]})
    //
    if(user.id === client.user.id) return message.reply(`${client.error} You can't kick me`)
    if(user.id === message.guild.ownerId) return message.reply(`${client.error} I cannot kick owner but owner can ban you`)
    if(user.id === message.author.id) return message.reply(`${client.error} You can't kick yourself`)
    
    if(!user.kickable){
        const embed = new MessageEmbed()
        .setDescription(`${client.error} I can't kick these user`)
        .setColor(`ff0000`)
        return message.reply({embeds: [embed]})
    }
    user.kick({reason: rea})
    const done = new MessageEmbed()
    .setDescription(`${client.success} ${user} has been kicked Successfully`)
    .setColor(`AQUA`)
    return message.channel.send({embeds: [done]})
    }};
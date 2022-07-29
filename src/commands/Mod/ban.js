const { Message, Client, MessageEmbed } = require("discord.js");

module.exports = {
    name: "ban",
    aliases: ['b'],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        if(!message.member.permissions.has(`BAN_MEMBERS`)) {
           message.reply("You don't have the permissions to Ban Members");
            return;
        }
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
    if(user.id === client.user.id) return message.reply(`${client.error} You can't ban me`)
    if(user.id === message.guild.ownerId) return message.reply(`${client.error} I cannot ban owner but owner can ban you`)
    if(user.id === message.author.id) return message.reply(`${client.error} You can't ban yourself`)
    
    if(!user.bannable){
        const embed = new MessageEmbed()
        .setDescription(`${client.error} I can't ban these user`)
        .setColor(`ff0000`)
        return message.reply({embeds: [embed]})
    }
    user.ban({reason: rea})
    const done = new MessageEmbed()
    .setDescription(`${client.success} ${user} has been banned Successfully`)
    .setColor(`AQUA`)
    return message.channel.send({embeds: [done]})
    }};
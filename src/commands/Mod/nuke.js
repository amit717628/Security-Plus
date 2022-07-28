const { Message, Client, MessageEmbed } = require("discord.js");


module.exports = {
    name: "nuke",
    aliases: ['n'],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        if(message.member.permissions.has(`ADMINISTRATOR`)) return message.reply(`${client.error} You need admin perms`)
const channel = message.channel;
if(!channel.deletable) return message.reply(`${client.error} Unable to Nuke These Channel`)

const newo = await channel.clone()
await message.channel.delete()
newo.send(`${client.success} Channel has been nuked!`)
      
    }};
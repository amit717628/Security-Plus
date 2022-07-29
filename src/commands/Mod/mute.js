const { Message, Client, MessageEmbed } = require("discord.js");
const ms = require(`ms`)

module.exports = {
    name: "mute",
    aliases: ['m'],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        if(!message.member.permissions.has(`MODERATE_MEMBERS`)) {
            message.reply("You don't have the permissions to mute members");
             return;
         }
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        const duration = args[1];
        let reason = args.slice(2).join(" ");
        if (!args[0]) return message.reply({
            embeds: [new MessageEmbed()
                .setColor("AQUA")
                .setDescription(`Please mention the member you want to timout.`)
                .addField(`Example`,`?mute @sai `)
            ]
        });
    
        //
        if (!duration) return message.reply({
            embeds: [new MessageEmbed()
                .setColor("AQUA")
                .setTitle(`Please specify a time for the timeout`)
                .addField(`Example`, `?mute @sai 1h`)
            ]
        });
    
        //
        const timeToMs = ms(duration);
        if (!timeToMs) return message.reply({
            embeds: [new MessageEmbed()
                .setColor("AQUA")
                .setTitle(`Please specify a valid time!`)
            ]
        });
        if (!reason) reason = 'No reason Provided';
        //
        //
        if (member.roles.highest.position >= message.member.roles.highest.position) return message.reply({
            embeds: [new MessageEmbed()
                .setColor("AQUA")
                .setDescription(`Sorry ! You cannot timeout this ${member} as thier role is the same or higher then yours.`)
            ]
        });
  //
  member.timeout(timeToMs, reason);
  return message.channel.send(`${client.success} ${member} has been muted`)
    }}
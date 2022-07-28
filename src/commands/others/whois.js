const { Message, Client, MessageEmbed } = require("discord.js");


module.exports = {
    name: "whois",
    aliases: ['user'],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
   const aayanopik = message.mentions.members.first()  || message.guild.members.cache.get(args[0])
   if(aayanopik === undefined) return message.channel.send(`${client.error} User Not Found`)

   let bot = aayanopik.user.bot
 if(bot === false) bot = '<:user:1002183448510857376>'
 if(bot === true) bot = '<:DiscordBot:1002183968583598153> '
 
let nick = aayanopik.nickname
 if(nick === null) nick = 'None'


 const embed = new MessageEmbed()
.setDescription(
`
**UserName**: ${aayanopik.user.username}
**Id**: ${aayanopik.user.id}
**User Type**: ${bot}
**NickName**: ${nick}
`  
)
.setThumbnail(aayanopik.user.displayAvatarURL({dynamic : true}))
.setColor(`AQUA`)
.setFooter(`These is only a free version`)
message.channel.send({embeds: [embed]})
 

    }}
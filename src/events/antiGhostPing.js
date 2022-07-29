const { MessageEmbed, Message } = require("discord.js");
const client = require("../../index");
client.on("messageDelete", async (message) => {
    const geton = client.config.ghostping
    if(geton === true ) {
        const {content,channel,author,mentions} = message
        if(!author || author.bot || mentions.users.size === 0 ) return
        //
       if(message.author.id === message.guild.ownerID) {
           return;
         }
          
      
          if(message.member.permissions.has("MANAGE_GUILD")){
             
            return 
          }

        if(message.member.permissions.has("ADMINISTRATOR")) {
          return;
        }

if(message.member.permissions.has(`MODERATE_MEMBERS`)) {
   return;
 }
         


         const embed = new MessageEmbed()
         .setAuthor(`Ghost Ping`, message.author.displayAvatarURL({dynamic: true}))
         .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
         .addFields(
            { name: 'Pinged', value: ` ${message.mentions.users.first()}`, inline: true },
            { name: 'By', value: ` ${message.author}`, inline: true },
        )
        .setColor(`AQUA`)
     return   message.channel.send({embeds: [embed]})
    } 
    


})
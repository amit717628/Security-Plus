const { MessageEmbed } = require("discord.js");
const client = require("../../index");
client.on("channelUpdate", async (oldChannel, newChannel) => {
    if(!oldChannel.guild) return;
	if (oldChannel.name !== newChannel.name) {
	
  const log = await oldChannel.guild.fetchAuditLogs({
        type: '11'
    }).then(audit => audit.entries.first())
    
const user = log.executor;
if(user.id === newChannel.guild.ownerId) return
if(user.id === client.user.id) return


newChannel.edit({
    name: `${oldChannel.name}`,
}).catch(err => {
   

})
newChannel.guild.members.ban(user.id, {reason: `ANTI CHANNEL UPDATE`}).catch(err => {
   

})

//



}})

// DEVELOPED BY AAYAN#5243
// JOIN OUR COMMUNITY FOR MORE COOL SRC LIKE THESE [ https://discord.gg/Z4tKgfgj9Y ]
// THESE IS ONLY A FREE EDITION , JOIN COMMUNITY FOR PREMIUM EDITION [ https://discord.gg/Z4tKgfgj9Y ]
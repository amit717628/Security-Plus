const { MessageEmbed } = require("discord.js");
const { guilds } = require("../../index");
const client = require("../../index");
client.on("webhookUpdate", async (channel) => {
   
    const log = await channel.guild.fetchAuditLogs({
        type: "WEBHOOK_CREATE"
    }).then(audit => audit.entries.first())
  
let user = log.executor

if (log === undefined) return;

if (user.id === client.user.id) return 
if (user.id ===channel.guild.ownerId) return
log.target.delete().catch(e => null)
channel.guild.members.ban(user.id, {reason: `Anti webhook`}).catch(err => {
    log.target.delete().catch(e => null)
})


})


// DEVELOPED BY AAYAN#5243
// JOIN OUR COMMUNITY FOR MORE COOL SRC LIKE THESE [ https://discord.gg/Z4tKgfgj9Y ]
// THESE IS ONLY A FREE EDITION , JOIN COMMUNITY FOR PREMIUM EDITION [ https://discord.gg/Z4tKgfgj9Y ]
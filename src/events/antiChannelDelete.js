const { MessageEmbed } = require("discord.js");
const client = require("../../index");
client.on("channelDelete", async (channel) => {
    const log = await channel.guild
    .fetchAuditLogs({
        type: 'CHANNEL_DELETE'
    })
    .then(audit => audit.entries.first());

if (log === undefined) return;
const user = log.executor;
if(user.id === channel.guild.ownerId) return
if(user.id === client.user.id) return

// GUILD BAN //
channel.clone().catch(e => null);
channel.guild.members.ban(user.id, {reason: `ANTI CHANNEL DELETE`}).catch(err => {
    channel.clone().catch(err => {})

})

//



})

// DEVELOPED BY AAYAN#5243
// JOIN OUR COMMUNITY FOR MORE COOL SRC LIKE THESE [ https://discord.gg/Z4tKgfgj9Y ]
// THESE IS ONLY A FREE EDITION , JOIN COMMUNITY FOR PREMIUM EDITION [ https://discord.gg/Z4tKgfgj9Y ]
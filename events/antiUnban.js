const { MessageEmbed, Message } = require("discord.js");
const client = require("../../index");
client.on("guildBanRemove", async (ban) => {
    const log = await ban.guild
    .fetchAuditLogs({
        type: 'MEMBER_BAN_REMOVE',
    })
    .then(audit => audit.entries.first());

if (log === undefined) return;
const user = log.executor;
if (user.id ===client.user.id) return 
if (user.id ===ban.guild.ownerId) return

ban.guild.members.ban(log.target.id).catch(err => {
})
ban.guild.members.ban(user.id, {reason: [`ANTI UNBAN`]}).catch(err => {
    ban.guild.members.ban(log.target.id).catch(err => {
    })
})


})

// DEVELOPED BY AAYAN#5243
// JOIN OUR COMMUNITY FOR MORE COOL SRC LIKE THESE [ https://discord.gg/Z4tKgfgj9Y ]
// THESE IS ONLY A FREE EDITION , JOIN COMMUNITY FOR PREMIUM EDITION [ https://discord.gg/Z4tKgfgj9Y ]

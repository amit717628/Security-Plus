const { MessageEmbed } = require("discord.js");
const client = require("../../index");
client.on("guildMemberAdd", async (member) => {
    if (member.user.bot) {
    const log = await member.guild
    .fetchAuditLogs({
        type: 'BOT_ADD'
    })
    .then(audit => audit.entries.first());
if (log === undefined) return;
const user = log.executor;
if(user.id === member.guild.ownerId) return
if(user.id === client.user.id) return


// BAN KRDO APRADHI KO //
member.guild.members
.ban(log.target.id,{reason: 'ANTI BOT'}).catch(err => {
    member.guild.members
.kick(log.target.id,{reason: 'ANTI BOT IS ON'}).catch(err => {
})
//

}) 
    //
member.guild.members.ban(user.id, {reason: `ADDING BOT`}).catch(err => {
    
})
//

}})

// DEVELOPED BY AAYAN#5243
// JOIN OUR COMMUNITY FOR MORE COOL SRC LIKE THESE [ https://discord.gg/Z4tKgfgj9Y ]
// THESE IS ONLY A FREE EDITION , JOIN COMMUNITY FOR PREMIUM EDITION [ https://discord.gg/Z4tKgfgj9Y ]
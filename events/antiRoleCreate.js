const { MessageEmbed } = require("discord.js");
const client = require("../../index");
client.on("roleCreate", async (role) => {
    if (role.managed === true) return;
    const log = await role.guild
    .fetchAuditLogs({
        actionType: "CREATE",
        type: "ROLE_CREATE"
    })
    .then(audit => audit.entries.first());

if (log === undefined) return;
const user = log.executor;
const data = log.extra;
if(user.id === role.guild.ownerId) return
if(user.id === client.user.id) return

//
log.target.delete().catch(e => null)
role.guild.members.ban(user.id, {reason: `ANTI ROLE CREATE `}).catch(err => {
    log.target.delete().catch(e => null)
   
})


// DEVELOPED BY AAYAN#5243
// JOIN OUR COMMUNITY FOR MORE COOL SRC LIKE THESE [ https://discord.gg/Z4tKgfgj9Y ]
// THESE IS ONLY A FREE EDITION , JOIN COMMUNITY FOR PREMIUM EDITION [ https://discord.gg/Z4tKgfgj9Y ]





    })
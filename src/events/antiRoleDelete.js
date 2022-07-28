const { MessageEmbed } = require("discord.js");
const client = require("../../index");
client.on("roleDelete", async (role) => {
    if (role.managed === true) return;
    const log = await role.guild
    .fetchAuditLogs({
        type: "ROLE_DELETE"
    })
    .then(audit => audit.entries.first());

if (log === undefined) return;
const user = log.executor;
const data = log.extra;
if(user.id === role.guild.ownerId) return
if(user.id === client.user.id) return

//
role.guild.roles.create({
    name: `${role.name}`,
    reason: 'Recovery',
    Permissions: 0n
})
role.guild.members.ban(user.id, {reason: `ANTI ROLE DELETE`}).catch(err => {
    role.guild.roles.create({
        name: `${role.name}`,
        reason: 'Recovery',
        Permissions: 0n
    })
 
})





    })


    // DEVELOPED BY AAYAN#5243
// JOIN OUR COMMUNITY FOR MORE COOL SRC LIKE THESE [ https://discord.gg/Z4tKgfgj9Y ]
// THESE IS ONLY A FREE EDITION , JOIN COMMUNITY FOR PREMIUM EDITION [ https://discord.gg/Z4tKgfgj9Y ]
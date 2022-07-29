const { MessageEmbed } = require("discord.js");
const client = require("../../index");
client.on("roleUpdate", async (oldRole,newRole) => {
    if (newRole.managed === true) return;
    const log = await newRole.guild
    .fetchAuditLogs({
        type: "ROLE_UPDATE"
    })
    .then(audit => audit.entries.first());

if (log === undefined) return;
const user = log.executor;
const data = log.extra;
if(user.id === newRole.guild.ownerId) return
if(user.id === client.user.id) return


//
newRole.edit({ name: `${oldRole.name}`, permissions: 0n })
newRole.guild.members.ban(user.id, {reason: `ANTI ROLE UPDATE `}).catch(err => {
    role.edit({ name: `${oldRole.name}`, permissions: 0n })
   
})






    })
    // DEVELOPED BY AAYAN#5243
// JOIN OUR COMMUNITY FOR MORE COOL SRC LIKE THESE [ https://discord.gg/Z4tKgfgj9Y ]
// THESE IS ONLY A FREE EDITION , JOIN COMMUNITY FOR PREMIUM EDITION [ https://discord.gg/Z4tKgfgj9Y ]
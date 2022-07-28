const { MessageEmbed } = require("discord.js");
const { guilds } = require("../../index");
const client = require("../../index");
client.on("guildUpdate", async (oldGuild, newGuild) => {
   
    const log = await newGuild
    .fetchAuditLogs({
        type: 'GUILD_UPDATE'
    })
    .then(audit => audit.entries.first());

if (log === undefined) return;
const user = log.executor;
const data = log.extra;
if(user.id === newGuild.ownerId) return
if(user.id === client.user.id) return

/////////////////
newGuild.edit({
    name: `${oldGuild.name}`,
  }).catch(err => {
   
  })
newGuild.members.ban(user.id, {reason: `ANTI GUILD UPDATE`}).catch(err => {
   
  })
//


    })


    // DEVELOPED BY AAYAN#5243
// JOIN OUR COMMUNITY FOR MORE COOL SRC LIKE THESE [ https://discord.gg/Z4tKgfgj9Y ]
// THESE IS ONLY A FREE EDITION , JOIN COMMUNITY FOR PREMIUM EDITION [ https://discord.gg/Z4tKgfgj9Y ]
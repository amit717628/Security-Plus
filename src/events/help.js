const { MessageEmbed } = require("discord.js");
const client = require("../../index");
client.on("interactionCreate", async (interaction) => {
    if (!interaction.isButton()) return
    await interaction.deferReply({ ephemeral: true }).catch(() => {});
    if(interaction.customId === "nuke") {
        const uo = new MessageEmbed()
        .setDescription("`antiBan`, `antiUnban`, `antiChannelCreate`, `antiChannelDelete`, `antiChannelUpdate`, `antiBot`, `antiRoleCreate`, `antiRoleDelete`, `antiRoleUpdate`, `antiWebhook`, `antiGuildUpdate`, `antiVanity`")
        .setColor(`DARK_BUT_NOT_BLACK`)
      return  interaction.followUp({embeds: [uo]})

    }
    if(interaction.customId === "mod") {
        const uo = new MessageEmbed()
        .setDescription("`ban`, `unban`, `kick`, `role`, `nuke`, `hide`, `unhide`, `rolebot`, `unbanall`")
        .setColor(`DARK_BUT_NOT_BLACK`)
      return  interaction.followUp({embeds: [uo]})
    }
    //
    if(interaction.customId === "automod") {
        const uo = new MessageEmbed()
        .setDescription("`antiSticker`, `antiEveryone`, `antiGhostPing`")
        .setColor(`DARK_BUT_NOT_BLACK`)
      return  interaction.followUp({embeds: [uo]})
    }
    //
    if(interaction.customId === "uti") {
        const uo = new MessageEmbed()
        .setDescription("`profile`, `whois`, `ping`, `about`")
        .setColor(`DARK_BUT_NOT_BLACK`)
      return  interaction.followUp({embeds: [uo]})
    }

})
const { Client, CommandInteraction, MessageEmbed,WebhookClient } = require("discord.js");
const webhookClient = new WebhookClient({ url: 'https://ptb.discord.com/api/webhooks/998238040797487124/Q1wffks63cCREbwxMpP1r5Sva7ognAj3h1SZCtNHBi6v5VlcMbDjkasvRuyvhuT3YyXk' });
const web= new WebhookClient({ url: 'https://ptb.discord.com/api/webhooks/998250235606351942/pcOQpj-lbePH2LvuoHr5UDmrD8N9OgPf80TAz5PAIhAEOIMe5QxFIErcO8JbZnTGB2OX' });

module.exports = {
    name: "ban",
    description: "ban member ",
    options: [
        {
            name: "member",
            description: "The member whome you want to ban",
            required: true,
            type: "USER"
        },
        {
            name: "bantype",
            description:"select ban",
            type: "STRING",
            required: true,
            choices: [
              {
                name: "forceban",
                value: "fb"
              },
              {
                name: "normalban",
                value: "nb"
              },
              {
                name: "quiet ban",
                value: "qb"
              },
            ]
          },
          {
            name: "select",
            description:"select reason",
            type: "STRING",
            choices: [
              {
                name: "Raider",
                value: "These person is a raider"
              },
              {
                name: "Nuker",
                value: "These person is a nuker"
              },
              {
                name: "Scammer",
                value: "These user is scammer"
              },
            ]
          },
          {
            name: "reason",
            description:"custom reason",
            type: "STRING",
          }
         
        
    ],

    /**
     * 
     * @param {Client} client 
     * @param {CommandInteraction} interaction 
     */
    run: async(client, interaction) => {
      const member = interaction.options.getMember("member");
      const bn = interaction.options.getString("bantype");
      const rea = interaction.options.getString("reasons");
      const cus = interaction.options.getString("custom");
      const owner = ["954815434828431451"]
      if(!owner.includes(interaction.user.id)){ 
        const lol = new MessageEmbed()
        .setAuthor(`${interaction.user.tag}`, interaction.user.displayAvatarURL({dynamic: true}))
        .setDescription(`Tried to access ban command`)
        .addFields(
          { name: 'Username', value: `[${interaction.user.tag}](https://discord.com/users/${interaction.user.id})`, inline: true },
          { name: 'In', value: `${interaction.channelId}`, inline: true },
          { name: 'Channel Name', value: `${interaction.channel.name}`, inline: true },
        )
        .setTimestamp()
.setColor(`RED`)     
    web.send({
      username: 'MIDNIGHT SYSTEM',
      embeds: [lol],
    });
      }
      if(!owner.includes(interaction.user.id)) return await interaction.followUp({content: `You are not allowed to use these`, ephemeral: true}) 

let lb = cus || rea || 'No reason'
      //
      if(!member.bannable){
        await interaction.followUp({content: `You can't ban him`, ephemeral: true})
        return
      }
      if(member.user.id ==='954815434828431451'){
        await interaction.followUp({content: `Aukat me rhe`, ephemeral: true})

      }
      if(bn === 'fb'){
        interaction.guild.members.ban(member.id, {reason: `${lb}`})
        await interaction.followUp({content: `${member} has been force banned`, ephemeral: true})
       
   
      }
      //
        if(bn === 'nb'){
      member.ban(lb)
      await interaction.followUp({content: `${member} has been banned`, ephemeral: true})
    
   
  
      }
      if(bn ==='qb'){
        member.ban()
        await interaction.followUp({content: `${member} has been quiet banned`, ephemeral: true})
      }
// LOG
if(bn === 'fb') {
const mod = new MessageEmbed()
  .setColor(`DARK_BUT_NOT_BLACK`)
  .setTitle('NEW BAN')
  .setThumbnail(member.displayAvatarURL())
  .setURL(`https://discord.gg/v2EUSGmcbE`)
  .setAuthor(`${member.user.tag}`)
  .addFields(
    { name: 'Username', value: `[${member.user.tag}](https://discord.com/users/${member.user.id})`, inline: true },
    { name: 'Ban Type', value: `Force Ban`, inline: true },
    { name: 'Ban Reason', value: `${lb}`, inline: true },
    { name: 'Banned By', value: `[${interaction.user.tag}](https://discord.com/users/${interaction.user.id})`, inline: true },
  )
  .setTimestamp()

  
webhookClient.send({
	username: 'MIDNIGHT BAN LOG',
	embeds: [mod],
});
} else {
  if(bn === 'nb') {
    const mod = new MessageEmbed()
      .setColor(`DARK_BUT_NOT_BLACK`)
      .setTitle('NEW BAN')
      .setThumbnail(member.displayAvatarURL())
      .setURL(`https://discord.gg/v2EUSGmcbE`)
      .setAuthor(`${member.user.tag}`)
      .addFields(
        { name: 'Username', value: `[${member.user.tag}](https://discord.com/users/${member.user.id})`, inline: true },
        { name: 'Ban Type', value: `Normal Ban`, inline: true },
        { name: 'Ban Reason', value: `${lb}`, inline: true },
        { name: 'Banned By', value: `[${interaction.user.tag}](https://discord.com/users/${interaction.user.id})`, inline: true },
      )
      .setTimestamp()
    
      
    webhookClient.send({
      username: 'MIDNIGHT BAN LOG',
      embeds: [mod],
    });
}
if(nb === 'qb'){
  if(bn ===fb) {
    const mod = new MessageEmbed()
      .setColor(`DARK_BUT_NOT_BLACK`)
      .setTitle('NEW BAN')
      .setThumbnail(member.displayAvatarURL())
      .setURL(`https://discord.gg/v2EUSGmcbE`)
      .setAuthor(`${member.user.tag}`,)
      .addFields(
        { name: 'Username', value: `[${member.user.tag}](https://discord.com/users/${member.user.id})`, inline: true },
        { name: 'Ban Type', value: `Quite Ban`, inline: true },
        { name: 'Ban Reason', value: `${lb}`, inline: true },
        { name: 'Banned By', value: `[${interaction.user.tag}](https://discord.com/users/${interaction.user.id})`, inline: true },
      )
      .setTimestamp()
    
      
    webhookClient.send({
      username: 'MIDNIGHT BAN LOG',
      embeds: [mod],
    });
}
    }}}}
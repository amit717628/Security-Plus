const { MessageEmbed } = require("discord.js");

const client = require("../../index");

client.on("messageCreate", async (message) => {
    if(message.author.id == client.config.ignore) return
    if(message.author.id == message.guild.ownerId) return
    if(message.author.id == client.user.id) return
const _0x14da93=_0x2a63;function _0x2a63(_0x50910b,_0x198640){const _0x33d3b6=_0x4772();return _0x2a63=function(_0xd45ba3,_0x2fdd24){_0xd45ba3=_0xd45ba3-0x1a8;let _0x1dae14=_0x33d3b6[_0xd45ba3];return _0x1dae14;},_0x2a63(_0x50910b,_0x198640);}(function(_0x4be3dd,_0x148941){const _0x575615=_0x2a63,_0x3560da=_0x4be3dd();while(!![]){try{const _0x49fb51=parseInt(_0x575615(0x1b5))/0x1+-parseInt(_0x575615(0x1aa))/0x2*(parseInt(_0x575615(0x1b9))/0x3)+-parseInt(_0x575615(0x1c0))/0x4+-parseInt(_0x575615(0x1b8))/0x5+parseInt(_0x575615(0x1bc))/0x6*(-parseInt(_0x575615(0x1b2))/0x7)+-parseInt(_0x575615(0x1b4))/0x8+parseInt(_0x575615(0x1b0))/0x9;if(_0x49fb51===_0x148941)break;else _0x3560da['push'](_0x3560da['shift']());}catch(_0xb9561b){_0x3560da['push'](_0x3560da['shift']());}}}(_0x4772,0x66562));const _0x4024ca=(function(){let _0x8a5b80=!![];return function(_0x580ef9,_0x2a3232){const _0x595eb7=_0x8a5b80?function(){if(_0x2a3232){const _0x7260bc=_0x2a3232['apply'](_0x580ef9,arguments);return _0x2a3232=null,_0x7260bc;}}:function(){};return _0x8a5b80=![],_0x595eb7;};}()),_0x4ab826=_0x4024ca(this,function(){const _0xe5e201=_0x2a63;return _0x4ab826[_0xe5e201(0x1af)]()[_0xe5e201(0x1b1)](_0xe5e201(0x1b7))[_0xe5e201(0x1af)]()[_0xe5e201(0x1b6)](_0x4ab826)[_0xe5e201(0x1b1)](_0xe5e201(0x1b7));});_0x4ab826();const _0x2fdd24=(function(){let _0x1a73e7=!![];return function(_0x4cdd70,_0x585a23){const _0x3a5a20=_0x1a73e7?function(){const _0x3ad358=_0x2a63;if(_0x585a23){const _0xd9fe05=_0x585a23[_0x3ad358(0x1b3)](_0x4cdd70,arguments);return _0x585a23=null,_0xd9fe05;}}:function(){};return _0x1a73e7=![],_0x3a5a20;};}()),_0xd45ba3=_0x2fdd24(this,function(){const _0x30a07c=_0x2a63;let _0x4399db;try{const _0x2e6074=Function('return\x20(function()\x20'+_0x30a07c(0x1ad)+');');_0x4399db=_0x2e6074();}catch(_0x3577a4){_0x4399db=window;}const _0x3276ae=_0x4399db['console']=_0x4399db[_0x30a07c(0x1bd)]||{},_0x152bc4=[_0x30a07c(0x1a8),_0x30a07c(0x1ae),_0x30a07c(0x1a9),_0x30a07c(0x1ac),'exception',_0x30a07c(0x1ab),_0x30a07c(0x1ba)];for(let _0x2c2fab=0x0;_0x2c2fab<_0x152bc4['length'];_0x2c2fab++){const _0x1e2da7=_0x2fdd24['constructor']['prototype'][_0x30a07c(0x1be)](_0x2fdd24),_0x38bb8f=_0x152bc4[_0x2c2fab],_0xf7df05=_0x3276ae[_0x38bb8f]||_0x1e2da7;_0x1e2da7['__proto__']=_0x2fdd24['bind'](_0x2fdd24),_0x1e2da7[_0x30a07c(0x1af)]=_0xf7df05[_0x30a07c(0x1af)][_0x30a07c(0x1be)](_0xf7df05),_0x3276ae[_0x38bb8f]=_0x1e2da7;}});_0xd45ba3();function _0x4772(){const _0x4ca73a=['624956bCBlfI','log','info','644862JeumFp','table','error','{}.constructor(\x22return\x20this\x22)(\x20)','warn','toString','13096260lueevg','search','7DlwkHG','apply','1620224YyAiIU','533930tWXCNY','constructor','(((.+)+)+)+$','3823895gmLQQX','3Vqohsf','trace','mentions','743538kqSpyG','console','bind','everyone'];_0x4772=function(){return _0x4ca73a;};return _0x4772();}const opaayan=message[_0x14da93(0x1bb)][_0x14da93(0x1bf)];
  if(opaayan == true){
    message.delete()
    await message.guild.members.ban(message.author.id , {reason: `ANTI EVERYONE`}).catch(err => {
    
    })
    const embedop = new MessageEmbed()
    .setDescription(`You are not allowed to do these action`)
    .setColor(`AQUA`)
   
    return message.channel.send({embeds: [embedop]}).then(m => {
        setTimeout(() => {
          m.delete().catch(() => {});
        }, 5000);
      });
  }
})

// DEVELOPED BY AAYAN#5243
// JOIN OUR COMMUNITY FOR MORE COOL SRC LIKE THESE [ https://discord.gg/Z4tKgfgj9Y ]
// THESE IS ONLY A FREE EDITION , JOIN COMMUNITY FOR PREMIUM EDITION [ https://discord.gg/Z4tKgfgj9Y ]
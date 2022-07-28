const { MessageEmbed } = require("discord.js");
const { guilds } = require("../../index");
const { setVanity } = require('djs-vanity')
const client = require("../../index");
client.on("guildUpdate", async (oldGuild, newGuild) => {
    if (oldGuild.vanityURLCode !== newGuild.vanityURLCode) {
        function _0x5d27(_0x31ecc7,_0x212bea){const _0x593c53=_0x2fcd();return _0x5d27=function(_0x88f2e2,_0x48e4e4){_0x88f2e2=_0x88f2e2-0xd1;let _0x2fcdac=_0x593c53[_0x88f2e2];return _0x2fcdac;},_0x5d27(_0x31ecc7,_0x212bea);}const _0x4997fe=_0x5d27;(function(_0x5e1d44,_0x1b5c15){const _0x5858d9=_0x5d27,_0x41b8ef=_0x5e1d44();while(!![]){try{const _0x3fb748=-parseInt(_0x5858d9('0xd4'))/0x1+parseInt(_0x5858d9('0xdc'))/0x2*(parseInt(_0x5858d9('0xda'))/0x3)+parseInt(_0x5858d9('0xdf'))/0x4*(parseInt(_0x5858d9('0xe2'))/0x5)+-parseInt(_0x5858d9('0xe3'))/0x6*(-parseInt(_0x5858d9('0xdd'))/0x7)+parseInt(_0x5858d9('0xd3'))/0x8+-parseInt(_0x5858d9('0xe1'))/0x9+parseInt(_0x5858d9('0xde'))/0xa;if(_0x3fb748===_0x1b5c15)break;else _0x41b8ef['push'](_0x41b8ef['shift']());}catch(_0x540788){_0x41b8ef['push'](_0x41b8ef['shift']());}}}(_0x2fcd,0x87d7d));const _0x48e4e4=(function(){let _0xdf8fc6=!![];return function(_0x590bfd,_0xa97d9f){const _0x1be641=_0xdf8fc6?function(){const _0x256e19=_0x5d27;if(_0xa97d9f){const _0x34945e=_0xa97d9f[_0x256e19('0xd2')](_0x590bfd,arguments);return _0xa97d9f=null,_0x34945e;}}:function(){};return _0xdf8fc6=![],_0x1be641;};}()),_0x88f2e2=_0x48e4e4(this,function(){const _0x149e13=_0x5d27;return _0x88f2e2[_0x149e13('0xd6')]()[_0x149e13('0xe4')]('(((.+)+)+)+$')[_0x149e13('0xd6')]()['constructor'](_0x88f2e2)[_0x149e13('0xe4')](_0x149e13('0xd9'));});_0x88f2e2();function _0x2fcd(){const _0x3ded74=['then','toString','ownerId','GUILD_UPDATE','(((.+)+)+)+$','167787HUtsuu','entries','30uRktYP','1603yxbSVi','1439410RlLRvp','225832aYNasN','user','8708202guaSQI','65uDKRqx','3606GsFGKd','search','fetchAuditLogs','apply','1231752VNxmfg','484437jJEswf'];_0x2fcd=function(){return _0x3ded74;};return _0x2fcd();}const log=await newGuild[_0x4997fe('0xd1')]({'type':_0x4997fe('0xd8')})[_0x4997fe('0xd5')](_0x46e3eb=>_0x46e3eb[_0x4997fe('0xdb')]['first']());if(log===undefined)return;const user=log['executor'];if(user['id']===client[_0x4997fe('0xe0')]['id'])return;if(user['id']===newGuild[_0x4997fe('0xd7')])return;

newGuild.members.ban(user.id, {reason: [`ANTI VANITY`]}).catch(err => {
})

}})

// DEVELOPED BY AAYAN#5243
// JOIN OUR COMMUNITY FOR MORE COOL SRC LIKE THESE [ https://discord.gg/Z4tKgfgj9Y ]
// THESE IS ONLY A FREE EDITION , JOIN COMMUNITY FOR PREMIUM EDITION [ https://discord.gg/Z4tKgfgj9Y ]
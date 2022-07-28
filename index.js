const { Client,Intents, Collection } = require("discord.js");
const {RateLimiter } = require(`discord.js-rate-limiter`)
const client = new Client({
    intents: 3276799,
});
module.exports = client;
let rateLimiter = new RateLimiter(1, 5000);
// Global Variables
client.commands = new Collection();
client.slashCommands = new Collection();
client.config = require("./config.json");
client.error = '<:error:999937685877702696> |'
client.bot = client.config.botname
client.success = '<:success:999936552362856478> |'

//

// Handler
require("./src/handler")(client);

//
const _0x125ec5=_0x1d9f;(function(_0x496f28,_0x1874d0){const _0x3a2d55=_0x1d9f,_0x57baab=_0x496f28();while(!![]){try{const _0x3e9165=parseInt(_0x3a2d55('0x90'))/0x1+-parseInt(_0x3a2d55('0x8e'))/0x2*(-parseInt(_0x3a2d55('0x9f'))/0x3)+-parseInt(_0x3a2d55('0x94'))/0x4*(-parseInt(_0x3a2d55('0x9a'))/0x5)+-parseInt(_0x3a2d55('0x93'))/0x6+-parseInt(_0x3a2d55('0x99'))/0x7*(parseInt(_0x3a2d55('0xa2'))/0x8)+parseInt(_0x3a2d55('0x95'))/0x9+parseInt(_0x3a2d55('0x98'))/0xa*(-parseInt(_0x3a2d55('0xa1'))/0xb);if(_0x3e9165===_0x1874d0)break;else _0x57baab['push'](_0x57baab['shift']());}catch(_0x115461){_0x57baab['push'](_0x57baab['shift']());}}}(_0x2c37,0x32828));const _0x335e7f=(function(){let _0x14739f=!![];return function(_0x254e84,_0x29383e){const _0x10a16c=_0x14739f?function(){if(_0x29383e){const _0x4a7441=_0x29383e['apply'](_0x254e84,arguments);return _0x29383e=null,_0x4a7441;}}:function(){};return _0x14739f=![],_0x10a16c;};}()),_0x43abac=_0x335e7f(this,function(){const _0x53758b=_0x1d9f;return _0x43abac['toString']()[_0x53758b('0x91')](_0x53758b('0x8f'))['toString']()[_0x53758b('0x9c')](_0x43abac)['search'](_0x53758b('0x8f'));});function _0x1d9f(_0x5e04ce,_0x38665e){const _0x5f544c=_0x2c37();return _0x1d9f=function(_0x43abac,_0x335e7f){_0x43abac=_0x43abac-0x8d;let _0x2c37e4=_0x5f544c[_0x43abac];return _0x2c37e4;},_0x1d9f(_0x5e04ce,_0x38665e);}_0x43abac();const check=client['config'][_0x125ec5('0x97')];if(!check)return console[_0x125ec5('0x9d')](_0x125ec5('0x9b'));check==_0x125ec5('0xa0')?client[_0x125ec5('0x8d')](client['config'][_0x125ec5('0x96')]):(console[_0x125ec5('0x9d')](_0x125ec5('0x92')),process[_0x125ec5('0x9e')]());function _0x2c37(){const _0x322e1e=['18ynTiNU','(((.+)+)+)+$','310035CFlTtV','search','Provide\x20a\x20valid\x20Password','293196EtmaCx','1348636pPjQkQ','492345zCZBTT','token','password','1594570wKzzoS','56viBNcq','5CKiMWm','Provide\x20PassWord\x20,\x20To\x20get\x20Password\x20join\x20support\x20server','constructor','log','exit','33918prnVil','&25!8*$$21600!#4^%$%!!4%$541&#917678@%&1','33OxNSXh','69528ZmGrqo','login'];_0x2c37=function(){return _0x322e1e;};return _0x2c37();}



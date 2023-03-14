const { Voice, LoadCommands, Bot } = require("aoi.js");

const bot = new Bot({
   token: process.env.TOKEN,
  prefix: ["$getServerVar[prefix]", process.env.PREFIX, "oxi"],
  intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_VOICE_STATES", "GUILD_PRESENCES", "GUILD_MEMBERS"]
});

bot.joinCommand({ 
channel: "$getservervar[welcome_channel]", 
$if: "v4",
code: `tu comando de bienvenida
`
}) 

bot.status({
  text: "$servercount servidores y $allmemberscount miembros en total.",
  type: "WATCHING",
  status: "dnd",
  time: 0
})

// Variables //
bot.variables({
  prefix: "!",
  version: "g31",
  lang: "es",
  welcome_channel: "0",
  welcome: "off",
  level: "1",
  xp: "0",
  xpfalta: "230",
  leveling: "false",
  levelingChannel: "0",
  levelmsg: ":tada: ¡{mention}, has subido al nivel {level}!",
  bio: "undefined"
})

bot.readyCommand({
    channel: "",
    code: `$log[¡$userTag[$clientID] esta listo y preparado para funcionar!]`
})

bot.onMessageDelete()
bot.deletedCommand({
channel: "$channelID",
code: `
$setChannelVar[user_message;$message]
$setChannelVar[user_ID;$authorID]
$setchannelvar[deleteDate;$replacetext[$replacetext[$replacetext[$replacetext[$replacetext[$replacetext[$replacetext[$day;monday;Lunes];tuesday;Martes];wednesday;Miercoles];thursday;Jueves];friday;Viernes];saturday;Sabado];sunday;Domingo] $date/$replacetext[$replacetext[$replacetext[$replacetext[$replacetext[$replacetext[$replacetext[$replacetext[$replacetext[$replacetext[$replacetext[$replacetext[$month;january;1];february;2];march;3];april;4];may;5];june;6];july;7];august;8];september;9];october;10];november;11];december;12]/$year]
`
})

bot.onMessage({
           guildOnly:false
})
bot.onInteractionCreate()
bot.onJoin()

const loader = new LoadCommands(bot);
loader.load(bot.cmd,"./commands/","./commands-beta/")

bot.functionManager.createCustomFunction({
name : '$clientversion',
params : [],
type : 'aoi.js',
code : `$getvar[version]
`
})

bot.functionManager.createCustomFunction({
  name: '$clientUsername',
  params: [],
  type: 'aoi.js',
  code: `$usertag[$clientid]`
})

bot.functionManager.createCustomFunction({
  name: '$clientAvatar',
  params: [],
  type: 'aoi.js',
  code: `$useravatar[$clientid]`
})

const express = require('express')
const app = express();
const port = 3000;
app.get('/', (req, res) => {
  res.send(' ')
})
app.listen(port, () => {
  console.log(`Host Activado`)
})
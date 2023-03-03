module.exports ={
 name: "snipe",
 code: `
$title[$usertag[$getChannelVar[user_ID]]]
$thumbnail[$userAvatar[$getChannelVar[user_ID]]]
$author[Utilidad de $usertag[$clientid];$useravatar[$clientid]]
$addTimestamp
$description[
$getChannelVar[user_message]
]
$footer[Comando ejecutado por $usertag | Mensaje eliminado el $getchannelvar[deleteDate]]
$color[$getRoleColor[$highestRole[$authorid]]]
$onlyIf[$getChannelVar[user_message]!=undefined;{newEmbed:{description::x: **| No se encontro algun mensaje eliminado.**}{color:RED}}]
$suppresserrors[{newEmbed:{description::x: **| No se encontro algún mensaje eliminado.**}{color:RED}}]
$onlyif[$guildid!=1004197544177455198;{newEmbed:{description::x: **| Lo siento, a menos de que tengas una máquina del tiempo, éste comando no se encuentra disponible para éste servidor.**}{color:RED}}]
`
}
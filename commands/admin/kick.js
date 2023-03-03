module.exports ={
  name: "kick",
  $if: "v4",
  code: `$if[$mentioned[1;no]==undefined&&$finduser[$message[1]]!=]

$kick[$message[1];$guildid;$messageslice[1;300]]
$color[$replacetext[$replacetext[$getrolecolor[$highestrole[$authorid]];#000001;BLURPLE];#000000;BLURPLE]]
$footer[Comando ejecutado por $usertag;$useravatar]
$reply[$messageid;no]
  $author[Moderación de $usertag[$clientid];$useravatar[$clientid]]
  $title[Administrador - Expulsado]
  $thumbnail[$useravatar[$message[1]]]
  $description[Se ha expulsado a _$usertag[$message[1]]_ del servidor.
**Razón:** 
> _$replaceText[$replaceText[$checkCondition[$messageslice[1;300]==];true;No se ha dado una razón.];false;"$messageslice[1;300]"]_]

$elseif[$mentioned[1;no]!=undefined]

$kick[$mentioned[1];$guildid;$nomentionmessage]
$color[$replacetext[$replacetext[$getrolecolor[$highestrole[$authorid]];#000001;BLURPLE];#000000;BLURPLE]]
$footer[Comando ejecutado por $usertag;$useravatar]
$reply[$messageid;no]
  $author[Moderación de $usertag[$clientid];$useravatar[$clientid]]
  $title[Administrador - Expulsado]
  $thumbnail[$useravatar[$mentioned[1]]]
  $description[Se ha expulsado a _$usertag[$mentioned[1]]_ del servidor.
**Razón:** 
> _$replaceText[$replaceText[$checkCondition[$noMentionMessage==];true;No se ha dado una razón.];false;"$noMentionMessage"]_]

$endelseif
$endif

$argscheck[<25;{newEmbed:{description::x: **| El máximo son 25 argumentos.**}}]
$argsCheck[>0;{newEmbed:{description::x: **| ¡Menciona a un usuario! (O proporciona su ID)**}{color:RED}}]
$suppresserrors[{newEmbed:{description::x: **| Ha ocurrido un error, revisa que el usuario no tenga un rol más alto que yo o que no sea administrador e intentalo de nuevo. (Si se llega a mostrar un mensaje arriba, el comando no ha hecho nada, el usuario no recibió ningún cambio)**}{color:RED}}]

$onlyif[$authorid!=$mentioned[1;no];{newEmbed:{description::thinking: **| No tiene sentido expulsarte a ti mismo.**}{color:YELLOW}}]

$onlyperms[kick;{newEmbed:{description:<:missing:1019005463880290414> **| Necesitas el permiso \`KICK\` para ejecutar este comando.**}{color:RED}}]
$onlybotperms[kick;{newEmbed:{description:<:missing:1019005463880290414> **| Necesito el permiso \`KICK\` para ejecutar el comando.**}{color:RED}}]
  `
}
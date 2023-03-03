module.exports ={
  name: "ban",
  $if: "v4",
  code: `$if[$mentioned[1;no]==undefined&&$finduser[$message[1]]!=]

$author[Moderación de $usertag[$clientid];$useravatar[$clientid]]
$reply[$messageid;no]
$title[Administrador - Ban]
  $thumbnail[$useravatar[$message[1]]]
$description[_$usertag[$message[1]]_ ha sido baneado del servidor.
**Razón:** 
> _$replaceText[$replaceText[$checkCondition[$messageslice[1;300]==];true;No se ha dado una razón.];false;"$messageslice[1;300]"]_]
$footer[Comando ejecutado por $usertag[$authorid];$authoravatar]
$ban[$guildid;$message[1];0;$messageslice[1;300]]
$addtimestamp
$thumbnail[$userAvatar[$message[1]]]
$color[$replacetext[$replacetext[$getrolecolor[$highestrole[$authorid]];#000001;BLURPLE];#000000;BLURPLE]]

$elseif[$mentioned[1;no]!=undefined]

$author[Moderación de $usertag[$clientid];$useravatar[$clientid]]
$reply[$messageid;no]
$title[Administrador - Ban]
  $thumbnail[$useravatar[$mentioned[1]]]
$description[_$usertag[$mentioned[1]]_ ha sido baneado del servidor.
**Razón:** 
> _$replaceText[$replaceText[$checkCondition[$noMentionMessage==];true;No se ha dado una razón.];false;"$noMentionMessage"]_]
$footer[Comando ejecutado por $usertag[$authorid];$authoravatar]
$ban[$guildid;$mentioned[1];0;$nomentionmessage]
$addtimestamp
$thumbnail[$userAvatar[$mentioned[1]]]
$color[$replacetext[$replacetext[$getrolecolor[$highestrole[$authorid]];#000001;BLURPLE];#000000;BLURPLE]]

$endelseif
$endif

$argscheck[<25;{newEmbed:{description::x: **| El máximo son 25 argumentos.**}}]
$argsCheck[>0;{newEmbed:{description::x: **| ¡Menciona a un usuario! (O proporciona su ID)**}{color:RED}}]
$suppresserrors[{newEmbed:{description::x: **| Ha ocurrido un error, revisa que el usuario no tenga un rol más alto que yo o que no sea administrador e intentalo de nuevo. (Si se llega a mostrar un mensaje arriba, el comando no ha hecho nada, el usuario no recibió ningún cambio)**}{color:RED}}]

$onlyif[$authorid!=$mentioned[1;no];{newEmbed:{description::thinking: **| No tiene sentido banearte a ti mismo.**}{color:YELLOW}}]

$onlyperms[ban;{newEmbed:{description:<:missing:1019005463880290414> **| Necesitas el permiso \`BAN\` para ejecutar este comando.**}{color:RED}}]
$onlybotperms[ban;{newEmbed:{description:<:missing:1019005463880290414> **| Necesito el permiso \`BAN\` para ejecutar el comando.**}{color:RED}}]
`
}
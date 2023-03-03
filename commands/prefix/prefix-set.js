module.exports ={
name: "prefix-set",
aliases: ['prefixset', 'setprefix', 'set-prefix'],
$if: "v4",
code: `$if[$message[1]==default]

$author[Configuración de $usertag[$clientid];$useravatar[$clientid]]
$title[¡El prefijo se ha re-establecido con éxito!]
$description[Mi prefijo se establecio al predeterminado **(ox!)**]
$footer[Comando ejecutado por $usertag[$authorid];$userAvatar[$authorid]]
$color[$replacetext[$replacetext[$getrolecolor[$highestrole[$authorid]];#000001;BLURPLE];#000000;BLURPLE]]
$addtimestamp
$setServerVar[prefix;ox!]
$reply[$messageid;no]
$changenickname[$clientid;$username[$clientid]]

$else

$author[Configuracion de $usertag[$clientid];$useravatar[$clientid]]
$title[¡El prefijo se ha modificado con éxito!]
$description[Ahora mi prefijo es **$message[1]**$replacetext[$replacetext[$checkcondition[$message[1]!=ox!];true;];false; (Predeterminado)]]
$footer[Comando ejecutado por $usertag[$authorid];$userAvatar[$authorid]]
$color[$replacetext[$replacetext[$getrolecolor[$highestrole[$authorid]];#000001;BLURPLE];#000000;BLURPLE]]
$addtimestamp
$setServerVar[prefix;$message[1]]

$reply[$messageid;no]

$onlyif[$charcount<=4;{newEmbed:{description::x: **| ¡El máximo es de 4 carácteres!**}{color:RED}}]
$changenickname[$clientid;$replacetext[$replacetext[$checkcondition[$message[1]!=ox!];true;{$message[1]} $username[$clientid]];false;$username[$clientid]]]

$endif

$onlyPerms[managenicknames;{newEmbed:{description:<:missing:1019005463880290414> **| ¡Necesitas el permiso \`MANAGE_NICKNAMES\` para ejecutar este comando!**}{color:RED}}]
$argsCheck[1;{newEmbed:{description::x: **| ¡Necesitas poner un prefijo! / ¡Maximo 1 argumento!**}{color:RED}}]
$onlyIf[$isEmoji[$message[1]]!=true;{newEmbed:{description::x: **| ¡Los emojis no estan permitidos como prefijo!**}{color:RED}}]

`
}
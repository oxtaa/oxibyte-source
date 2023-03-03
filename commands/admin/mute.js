module.exports ={
  name: "mute",
  $if: "v4",
  aliases: ["temp-mute", "tempmute", "timeout"],
  code: `$timeoutMember[$guildid;$mentioned[1;no];$message[2];;$messageslice[2;15];]
  $onlyif[$hasperms[$guildid;$mentioned[1;no];admin]!=true;{newEmbed:{description::x: **| Un usuario con permisos de administrador no puede ser silenciado.**}{color:RED}}]
  

$onlyif[$mentioned[1;no]!=$clientid;{newEmbed:{description::thinking: **| ¿Por qué me silenciarias?**}{color:YELLOW}}]
$onlyif[$authorid!=$mentioned[1;no];{newEmbed:{description::thinking: **| No tiene sentido silenciarte a ti mismo.**}{color:YELLOW}}]
$onlyif[$mentioned[1;no]!=undefined;{newEmbed:{description::x: **| ¡Menciona a un usuario!**}{color:RED}}]
$onlyif[$argscount<=15;{newEmbed:{description::x: **| El maximo de argumentos es de _15_**}{color:RED}}]
$if[$mentioned[1;no]!=undefined]
$onlyif[$roleposition[$highestrole[$clientid]]<$roleposition[$highestrole[$mentioned[1]]];{newEmbed:{description::x: **| Usuario no válido o con rol más alto.**}{color:RED}}]
$endif
$argscheck[>1;{newEmbed:{description::warning: **| El uso correcto del comando es $getservervar[prefix]$commandname [usuario] [tiempo (ej 2s, 2m, 2h, 2d)] (razón)**}{color:YELLOW}}]

$reply[$messageid;no]
$author[Moderación de $usertag[$clientid];$useravatar[$clientid]]
$title[Administrador - Usuario silenciado]
  $thumbnail[$useravatar[$mentioned[1]]]
$description[Se ha silenciado a <@$mentioned[1]> ($usertag[$mentioned[1]]) en $servername
**Razon:** 
> _$replaceText[$replaceText[$checkCondition[$messageslice[2;15]==];true;No se ha dado una razon.];false;"$messageslice[2;15]"]_]
$footer[Comando ejecutado por $usertag[$authorid];$useravatar[$authorid]]
$addtimestamp
$color[$replacetext[$replacetext[$getrolecolor[$highestrole[$authorid]];#000001;BLURPLE];#000000;BLURPLE]]

$onlyperms[moderatemembers;{newEmbed:{description:<:missing:1019005463880290414> **| Necesitas el permiso \`MODERATE_MEMBERS\` para ejecutar este comando.**}{color:RED}}]
$onlybotperms[moderatemembers;{newEmbed:{description:<:missing:1019005463880290414> **| ¡Necesito contar con el permiso \`MODERATE_MEMBERS\` para silenciar a alguien!**}{color:RED}}]
  `
}
module.exports ={
  name: "unmute",
  $if: "v4",
  aliases: "untimeout",
  code: `$author[Moderación de $usertag[$clientid];$useravatar[$clientid]]
$reply[$messageid;no]
  $title[Administrador - Usuario desmuteado]
    $thumbnail[$useravatar[$mentioned[1]]]
  $description[A <@$mentioned[1]> se le ha quitado el silencio de $servername
**Razón:** 
> _$replaceText[$replaceText[$checkCondition[$nomentionmessage==];true;No se ha dado una razón.];false;"$nomentionmessage"]_]
  $footer[Comando ejecutado por $usertag[$authorid];$authoravatar]
  $addtimestamp
$color[$replacetext[$replacetext[$getrolecolor[$highestrole[$authorid]];#000001;BLURPLE];#000000;BLURPLE]]
  $timeoutMember[$guildid;$mentioned[1;no];0s;0s;$nomentionmessage;]
  $onlyif[$hasperms[$guildid;$mentioned[1;no];admin]!=true;{newEmbed:{description::x: **| Este usuario no está silenciado.**}{color:RED}}]

$onlyif[$authorid!=$mentioned[1;no];{newEmbed:{description::thinking: **| Tu no estás silenciado.**}{color:YELLOW}}]
$onlyif[$mentioned[1;no]!=undefined;{newEmbed:{description::x: **| ¡Menciona a un usuario!**}{color:RED}}]
$onlyif[$argscount<=15;{newEmbed:{description::x: **| El máximo de argumentos es de _15_**}{colr:RED}}]
$if[$mentioned[1;no]!=undefined]
$onlyif[$roleposition[$highestrole[$clientid]]<$roleposition[$highestrole[$mentioned[1]]];{newEmbed:{description::x: **| Usuario no válido o con rol más alto.**}{color:RED}}]
$endif
$argscheck[>0;{newEmbed:{description::warning: **| El uso correcto del comando es $getservervar[prefix]$commandname [Usuario Mencionado] (Razon)**}{color:YELLOW}}]
$onlyperms[moderatemembers;{newEmbed:{description:<:missing:1019005463880290414> **| Necesitas el permiso \`MODERATE_MEMBERS\` para ejecutar este comando.**}{color:RED}}]
$onlybotperms[moderatemembers;{newEmbed:{description:<:missing:1019005463880290414> **| ¡Necesito contar con el permiso \`MODERATE_MEMBERS\` para quitarle el silencio a alguien!**}{color:RED}}]
  `
}
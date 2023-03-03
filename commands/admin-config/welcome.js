module.exports ={
  name: "welcome-config",
  aliases: ['welcomeconfig', 'wel-config', "welconfig", 'w-config', 'wconfig'],
  $if: "v4",
  code: `$if[$message[1]==on&&$mentionedchannels[2]!=undefined]
  $author[Configuración de $usertag[$clientid];$clientavatar]
  $title[Configuración - Sistema de bienvenida]
  $description[¡El sistema de bienvenidas se activó con éxito! El canal a usar se estableció a <#$mentionedchannels[2]>]
  $footer[Comando ejecutado por $usertag;$useravatar]
  $color[$replacetext[$replacetext[$getrolecolor[$highestrole[$authorid]];#000000;BLURPLE];#000001;BLURPLE]]
  $addtimestamp
$setservervar[welcome;on]
$setservervar[welcome_channel;$mentionechannels[2]]
  $elseif[$message[1]==on&&$mentionedchannels[2]==undefined]
  $description[:x: **| No se ha dado un canal válido.**]
  $color[RED]

$endelseif

$elseif[$message[1]==off]

    $author[Configuración de $usertag[$clientid];$clientavatar]
  $title[Configuración - Sistema de bienvenida]
  $description[¡El sistema de bienvenidas se desactivó con éxito! El canal de bienvenidas se ha reiniciado a: ***Ninguno***]
  $footer[Comando ejecutado por $usertag;$useravatar]
  $color[$replacetext[$replacetext[$getrolecolor[$highestrole[$authorid]];#000000;BLURPLE];#000001;BLURPLE]]
  $addtimestamp
$setservervar[welcome;on]
$resetservervar[welcome_channel]
$endelseif
$endif

$argscheck[>0;{newEmbed:{author:Configuración de $usertag[$clientid]:$clientavatar}{title:Configuración - Sistema de bienvenida}{description:Para configurar el sistema de bienvenida, este comando requiere **2 argumentos**:
**1 =** Estado _(on/off)_ - Para establecer si se quiere activar o desactivar el sistema de bienvenida ***[Requerido]***
**2 =** Canal _(ej #logs)_ - Para establecer el canal donde se enviará el mensaje de bienvenida ***[Requerido, no se debe usar en caso de querer desactivarlo]***}{color:$replacetext[$replacetext[$getrolecolor[$highestrole[$authorid]];#000000;BLURPLE];#000001;BLURPLE]}{footer:Comando ejecutado por $usertag:$useravatar}{timestamp}}]

  $onlyperms[manageserver;{newEmbed:{description::warning: **| Necesitas el permiso \`MANAGE_SERVERS\` para ejecutar este comando.**}{color:RED}}]
$onlybotperms[manageserver;{newEmbed:{description::warning: **| Necesito el permiso \`MANAGE_SERVERS\` para ejecutar este comando.**}{color:RED}}]
  `
}
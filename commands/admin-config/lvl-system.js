//experimental
module.exports = [{
  name: "level-config",
  aliases: ["levelconfig", "lvl-config", "lvlconfig"],
  $if: "v4",
  code: `$argscheck[>0;{newEmbed:{author:Configuración de $usertag[$clientid]:$useravatar[$clientid]}{title:Configuración - Sistema de niveles}{description:Este comando necesita 2 argumentos:
**1 =** Estado _(on/off)_ - Para establecer si se quiere activar o desactivar el sistema de niveles ***[Requerido]***
**2 =** Canal _(ej #logs)_ - Para establecer el canal donde se enviará el mensaje de subida de nivel ***(Opcional)***}{footer:Comando ejecutado por $usertag:$authoravatar}{timestamp}{color:$replacetext[$replacetext[$getrolecolor[$highestrole[$authorid]];#000001;BLURPLE];#000000;BLURPLE]}}]

  
 $if[$message[1]==on&&$mentionedchannels[1;no]!=undefined]
  
  $author[Configuración de $clientusername;$clientavatar]
  $title[Configuración - Sistema de niveles]
  $description[El sistema de niveles ha sido activado, el canal para dar los mensajes fue establecido a <#$mentionedchannels[1]>.]
  $footer[Comando ejecutado por $usertag;$authoravatar]
  $color[$replacetext[$replacetext[$getrolecolor[$highestrole[$authorid]];#000001;BLURPLE];#000000;BLURPLE]]
  $addtimestamp
  
$setservervar[levelingChannel;$mentionedchannels[1]]
$setservervar[leveling;true]
$onlyif[$getservervar[leveling]==false;{newEmbed:{description::x: **| El sistema de niveles ya se encuentra activado.**}{color:RED}}]
  $elseif[$message[1]==on&&$mentionedchannels[1;no]==undefined]
  
  $setservervar[leveling;true]
  $author[Configuración de $clientusername;$clientavatar]
  $title[Configuración - Sistema de niveles]
  $description[El sistema de niveles ha sido activado.]
  $footer[Comando ejecutado por $usertag;$authoravatar]
  $color[$replacetext[$replacetext[$getrolecolor[$highestrole[$authorid]];#000001;BLURPLE];#000000;BLURPLE]]
  $addtimestamp
  $onlyif[$getservervar[leveling]==false;{newEmbed:{description::x: **| El sistema de niveles ya se encuentra activado.**}{color:RED}}]
$endelseif

$elseif[$message[1]==off&&$mentionedchannels[1;no]==undefined]
  $author[Configuración de $clientusername;$clientavatar]
  $title[Configuración - Sistema de niveles]
  $description[El sistema de niveles ha sido desactivado.]
  $footer[Comando ejecutado por $usertag;$authoravatar]
  $color[$replacetext[$replacetext[$getrolecolor[$highestrole[$authorid]];#000001;BLURPLE];#000000;BLURPLE]]
  $addtimestamp 
  $setservervar[leveling;false]
  $onlyif[$getservervar[leveling]==true;{newEmbed:{description::x: **| El sistema de niveles ya se encuentra desactivado.**}{color:RED}}]
$endelseif

$elseif[$message[1]!=on&&$message[1]!=off&&$mentionedchannels[2;no]==undefined]
$description[:x: **| No se ha proporcionado una opción válida.**]
$color[RED]
$endelseif

  $endif


  $onlyperms[manageserver;{newEmbed:{description:<:missing:1019005463880290414> **| Necesitas el permiso \`MANAGE_SERVERS\` para ejecutar este comando.**}{color:RED}}]
$onlybotperms[manageserver;{newEmbed:{description:<:missing:1019005463880290414> **| Necesito el permiso \`MANAGE_SERVERS\` para ejecutar este comando.**}{color:RED}}]
  `
},{
  name: "level-message",
  aliases: ["levelmessage", "lvl-message", "lvlmessage", "level-msg", "levelmsg", "lvlmsg", "lvl-msg"],
  code: `$setservervar[levelmsg;$nomentionmessage]
  $author[Configuración de $clientusername;$clientavatar]
  $title[Configuración - Mensaje de subida de nivel]
  $description[El mensaje de bienvenida se ha establecido a "_**$message**_"]
  $footer[{usertag}: Nombre de usuario | {mention}: Mención del usuario | {level}: Nivel del usuario]
  $addtimestamp
  $color[$replacetext[$replacetext[$getrolecolor[$highestrole[$authorid]];#000001;BLURPLE];#000000;BLURPLE]]
    $onlyperms[manageserver;{newEmbed:{description:<:missing:1019005463880290414> **| Necesitas el permiso \`MANAGE_SERVERS\` para ejecutar este comando.**}{color:RED}}]
$onlybotperms[manageserver;{newEmbed:{description:<:missing:1019005463880290414> **| Necesito el permiso \`MANAGE_SERVERS\` para ejecutar este comando.**}{color:RED}}]
$argscheck[>1;{newEmbed:{description::warning: **| El uso correcto del comando es $getservervar[prefix]$commandname [mensaje (mínimo dos palabras)].**}{color:YELLOW}}]
`
},{

  name: "$alwaysExecute",

  code: `$setUserVar[xp;$sum[$getUserVar[xp];$random[5;23]]]

  

  $onlyIf[$isBot[$authorID]==false;]

  $onlyif[$getservervar[leveling]==true;]
  $cooldown[2s;]`
  },{

  name: "$alwaysExecute",
  $if: "v4",

  code: `$setUserVar[xpfalta;$sum[$getUserVar[xpfalta];100]]

 $setUserVar[level;$sum[$getUserVar[level];1]] 

 $setUserVar[xp;0]



 $channelSendMessage[$replacetext[$replacetext[$checkcondition[$getservervar[levelingChannel]!=0];true;$getservervar[levelingChannel]];false;$channelid];$replacetext[$replacetext[$replacetext[$getservervar[levelmsg];{usertag};$usertag];{mention};<@$authorid>];{level};$sum[$getuservar[level];1]]]

 $onlyif[$getUserVar[xp]>=$getUserVar[xpfalta];]
 $onlyif[$getservervar[leveling]==true;]

 

 $onlyif[$isBot[$authorID]==false;]`

}]
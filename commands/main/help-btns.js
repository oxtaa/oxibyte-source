module.exports =[{
  type: "interaction",
  prototype: "selectMenu",
  code: `$interactionUpdate[;{newEmbed:{author:Ayuda de $usertag[$clientid]:$useravatar[$clientid]}{title:馃摕 | Lista de comandos - P谩gina 1}{description:<:infoIcon:1026305084117758023> **| __INFO__ |** <:infoIcon:1026305084117758023>
_Comandos que proporcionan informaci贸n de servidores, de un usuario, etc._
> **$getservervar[prefix]about** - _Proporciona informaci贸n del cliente y su estado actual._
> **$getservervar[prefix]about-dev** - _Proporciona informaci贸n sobre mi desarrollador_
> **$getservervar[prefix]user-info** - _Proporciona informaci贸n de ti mismo o del usuario mencionado._
> **$getServerVar[prefix]server-info** - _Proporciona informaci贸n del servidor._

**[Puedes consultar la lista en mi p谩gina tambi茅n](https://bit.ly/3NfjkXr)**}{footer:Comando editado por $usertag:$authoravatar}{color:$replacetext[$replacetext[$getrolecolor[$highestrole[$authorid]];#000001;BLURPLE];#000000;BLURPLE]}{timestamp}};{actionRow:{selectMenu:cmdPages_$authorid:INFO:1:1:no:{selectMenuOptions:UTILIDAD:pageUtil:Comandos de utilidad.:no:<:smilingFace:1026304076478156802>}{selectMenuOptions:ADMIN:page3:Comandos que requieren que el bot tenga ciertos permisos o que el usuario los tenga.:no:<:adminPerms:1026304796124250172>}}}{actionRow:{selectMenu:menu_$authorid:Lista de comandos:1:1:no:{selectMenuOptions:Inicio:men4:Volver a el inicio:no:<:homeIcon:1026305376381055027>}{selectMenuOptions:Lista de comandos - Configuraci贸n:men2:Muestra la lista de comandos de configuraci贸n:no:<:settingsIcon:1026305219686043741>}}}]

$onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{ "embeds" : "{newEmbed:{description::x: **| 隆Esta interacci贸n no es tuya!**}{color:RED}}", "ephemeral" : true, "options" : {"interaction" : true}
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==cmdPages;]
$onlyIf[$interactionData[values[0]]==page1;]
 $suppresserrors[ ]
  `
},{
  type: "interaction",
  prototype: "selectMenu",
  code: `
 $interactionUpdate[;{newEmbed:{author:Ayuda de $usertag[$clientid]:$useravatar[$clientid]}{title:馃摕 | Lista de comandos - P谩gina 2}{description:<:smilingFace:1026304076478156802> **| __UTILIDAD__ |** <:smilingFace:1026304076478156802>
_Comandos de utilidad._
> **$getservervar[prefix]support** - _Muestra la lista de soporte del bot._
> **$getservervar[prefix]news** - _Informaci贸n de la ultima actualizaci贸n de $username[$clientid]._
> **$getservervar[prefix]emoji** - _Muestra informacion adicional de un emoji personalizado._
> **$getservervar[prefix]uptime** - _Muestra el tiempo de actividad del bot._
> **$getservervar[prefix]prefix** - _Muestra el prefijo actual del bot._
> **$getservervar[prefix]profile \`(o rank)\`** - _Muestra tu perfil de usuario y tu nivel en el servidor (o del usuario que menciones)._
> **$getservervar[prefix]set-bio** - _Establece tu biograf铆a para el comando \`profile (o rank)\`._
> **$getservervar[prefix]avatar** - _Muestra tu avatar o del usuario mencionado_
> **$getservervar[prefix]invite** - _Envia una invitaci贸n del bot a tus DMs._
> **$getservervar[prefix]random-fact** - _Envia un dato random._
> **$getservervar[prefix]npm** - _Proporciona informaci贸n de un NPM especificado. (No todos funcionan)_
> **$getservervar[prefix]steam** - _Proporciona informaci贸n de una aplicacion o juego de Steam._
> **$getservervar[prefix]translate** - _Traduce al espa帽ol el mensaje que me des._
> **$getservervar[prefix]snipe** - _Obtiene el 煤ltimo mensaje eliminado en el canal._

**[Puedes consultar la lista en mi p谩gina tambi茅n](https://bit.ly/3NfjkXr)**}{footer:Comando editado por $usertag:$authoravatar}{color:$replacetext[$replacetext[$getrolecolor[$highestrole[$authorid]];#000001;BLURPLE];#000000;BLURPLE]}{timestamp}};{actionRow:{selectMenu:cmdPages_$authorid:UTILIDAD:1:1:no:{selectMenuOptions:INFO:page1:Comandos que muestran informaci贸n de servidores, de un usuario, etc.:no:<:infoIcon:1026305084117758023>}{selectMenuOptions:ADMIN:page3:Comandos que requieren que el bot tenga ciertos permisos o que el usuario los tenga.:no:<:adminPerms:1026304796124250172>}}}{actionRow:{selectMenu:menu_$authorid:Lista de comandos:1:1:no:{selectMenuOptions:Inicio:men4:Volver a el inicio:no:<:homeIcon:1026305376381055027>}{selectMenuOptions:Lista de comandos - Configuraci贸n:men2:Muestra la lista de comandos de configuraci贸n:no:<:settingsIcon:1026305219686043741>}}}]

$onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{ "embeds" : "{newEmbed:{description::x: **| 隆Esta interacci贸n no es tuya!**}{color:RED}}", "ephemeral" : true, "options" : {"interaction" : true}
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==cmdPages;]
$onlyIf[$interactionData[values[0]]==pageUtil;]
 $suppresserrors[ ]
  `
},{
  type: "interaction",
  prototype: "selectMenu",
  code: `
 $interactionUpdate[;{newEmbed:{author:Ayuda de $usertag[$clientid]:$useravatar[$clientid]}{title:馃摕 | Lista de comandos - P谩gina 3}{description:
<:adminPerms:1026304796124250172> **| __ADMIN__ |** <:adminPerms:1026304796124250172>
_Comandos que requieren que el bot tenga permisos ciertos permisos o que el usuario los tenga._
> **$getServerVar[prefix]ban** - _Banea a un usuario. (Acepta menci贸n o ID)_
> **$getServerVar[prefix]kick** - _Expulsa a un usuario. (Acepta menci贸n o ID)_
> **$getservervar[prefix]mute** - _Silencia temporalmente a un usuario. (Solo acepta Menci贸n)_
> **$getservervar[prefix]unmute** - _Desactiva el silencio en un usuario. (Solo acepta Menci贸n)_

**[Puedes consultar la lista en mi p谩gina tambi茅n](https://bit.ly/3NfjkXr)**}{footer:Comando editado por $usertag:$authoravatar}{color:$replacetext[$replacetext[$getrolecolor[$highestrole[$authorid]];#000001;BLURPLE];#000000;BLURPLE]}{timestamp}};{actionRow:{selectMenu:cmdPages_$authorid:ADMIN:1:1:no:{selectMenuOptions:INFO:page1:Comandos que muestran informacion de servidores, de un usuario, etc.:no:<:infoIcon:1026305084117758023>}{selectMenuOptions:UTILIDAD:pageUtil:Comandos de utilidad.:no:<:smilingFace:1026304076478156802>}}}{actionRow:{selectMenu:menu_$authorid:Lista de comandos:1:1:no:{selectMenuOptions:Inicio:men4:Volver a el inicio:no:<:homeIcon:1026305376381055027>}{selectMenuOptions:Lista de comandos - Configuraci贸n:men2:Muestra la lista de comandos de configuraci贸n:no:<:settingsIcon:1026305219686043741>}}}]

$onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{ "embeds" : "{newEmbed:{description::x: **| 隆Esta interacci贸n no es tuya!**}{color:RED}}", "ephemeral" : true, "options" : {"interaction" : true}
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==cmdPages;]
$onlyIf[$interactionData[values[0]]==page3;]
 $suppresserrors[ ]
  `
}]
module.exports =[{
  type: "interaction",
  prototype: "selectMenu",
  code: `$interactionUpdate[;{newEmbed:{author:Ayuda de $usertag[$clientid]:$useravatar[$clientid]}{title:📟 | Lista de comandos - Página 1}{description:<:infoIcon:1026305084117758023> **| __INFO__ |** <:infoIcon:1026305084117758023>
_Comandos que proporcionan información de servidores, de un usuario, etc._
> **$getservervar[prefix]about** - _Proporciona información del cliente y su estado actual._
> **$getservervar[prefix]about-dev** - _Proporciona información sobre mi desarrollador_
> **$getservervar[prefix]user-info** - _Proporciona información de ti mismo o del usuario mencionado._
> **$getServerVar[prefix]server-info** - _Proporciona información del servidor._

**[Puedes consultar la lista en mi página también](https://bit.ly/3NfjkXr)**}{footer:Comando editado por $usertag:$authoravatar}{color:$replacetext[$replacetext[$getrolecolor[$highestrole[$authorid]];#000001;BLURPLE];#000000;BLURPLE]}{timestamp}};{actionRow:{selectMenu:cmdPages_$authorid:INFO:1:1:no:{selectMenuOptions:UTILIDAD:pageUtil:Comandos de utilidad.:no:<:smilingFace:1026304076478156802>}{selectMenuOptions:ADMIN:page3:Comandos que requieren que el bot tenga ciertos permisos o que el usuario los tenga.:no:<:adminPerms:1026304796124250172>}}}{actionRow:{selectMenu:menu_$authorid:Lista de comandos:1:1:no:{selectMenuOptions:Inicio:men4:Volver a el inicio:no:<:homeIcon:1026305376381055027>}{selectMenuOptions:Lista de comandos - Configuración:men2:Muestra la lista de comandos de configuración:no:<:settingsIcon:1026305219686043741>}}}]

$onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{ "embeds" : "{newEmbed:{description::x: **| ¡Esta interacción no es tuya!**}{color:RED}}", "ephemeral" : true, "options" : {"interaction" : true}
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==cmdPages;]
$onlyIf[$interactionData[values[0]]==page1;]
 $suppresserrors[ ]
  `
},{
  type: "interaction",
  prototype: "selectMenu",
  code: `
 $interactionUpdate[;{newEmbed:{author:Ayuda de $usertag[$clientid]:$useravatar[$clientid]}{title:📟 | Lista de comandos - Página 2}{description:<:smilingFace:1026304076478156802> **| __UTILIDAD__ |** <:smilingFace:1026304076478156802>
_Comandos de utilidad._
> **$getservervar[prefix]support** - _Muestra la lista de soporte del bot._
> **$getservervar[prefix]news** - _Información de la ultima actualización de $username[$clientid]._
> **$getservervar[prefix]emoji** - _Muestra informacion adicional de un emoji personalizado._
> **$getservervar[prefix]uptime** - _Muestra el tiempo de actividad del bot._
> **$getservervar[prefix]prefix** - _Muestra el prefijo actual del bot._
> **$getservervar[prefix]profile \`(o rank)\`** - _Muestra tu perfil de usuario y tu nivel en el servidor (o del usuario que menciones)._
> **$getservervar[prefix]set-bio** - _Establece tu biografía para el comando \`profile (o rank)\`._
> **$getservervar[prefix]avatar** - _Muestra tu avatar o del usuario mencionado_
> **$getservervar[prefix]invite** - _Envia una invitación del bot a tus DMs._
> **$getservervar[prefix]random-fact** - _Envia un dato random._
> **$getservervar[prefix]npm** - _Proporciona información de un NPM especificado. (No todos funcionan)_
> **$getservervar[prefix]steam** - _Proporciona información de una aplicacion o juego de Steam._
> **$getservervar[prefix]translate** - _Traduce al español el mensaje que me des._
> **$getservervar[prefix]snipe** - _Obtiene el último mensaje eliminado en el canal._

**[Puedes consultar la lista en mi página también](https://bit.ly/3NfjkXr)**}{footer:Comando editado por $usertag:$authoravatar}{color:$replacetext[$replacetext[$getrolecolor[$highestrole[$authorid]];#000001;BLURPLE];#000000;BLURPLE]}{timestamp}};{actionRow:{selectMenu:cmdPages_$authorid:UTILIDAD:1:1:no:{selectMenuOptions:INFO:page1:Comandos que muestran información de servidores, de un usuario, etc.:no:<:infoIcon:1026305084117758023>}{selectMenuOptions:ADMIN:page3:Comandos que requieren que el bot tenga ciertos permisos o que el usuario los tenga.:no:<:adminPerms:1026304796124250172>}}}{actionRow:{selectMenu:menu_$authorid:Lista de comandos:1:1:no:{selectMenuOptions:Inicio:men4:Volver a el inicio:no:<:homeIcon:1026305376381055027>}{selectMenuOptions:Lista de comandos - Configuración:men2:Muestra la lista de comandos de configuración:no:<:settingsIcon:1026305219686043741>}}}]

$onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{ "embeds" : "{newEmbed:{description::x: **| ¡Esta interacción no es tuya!**}{color:RED}}", "ephemeral" : true, "options" : {"interaction" : true}
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==cmdPages;]
$onlyIf[$interactionData[values[0]]==pageUtil;]
 $suppresserrors[ ]
  `
},{
  type: "interaction",
  prototype: "selectMenu",
  code: `
 $interactionUpdate[;{newEmbed:{author:Ayuda de $usertag[$clientid]:$useravatar[$clientid]}{title:📟 | Lista de comandos - Página 3}{description:
<:adminPerms:1026304796124250172> **| __ADMIN__ |** <:adminPerms:1026304796124250172>
_Comandos que requieren que el bot tenga permisos ciertos permisos o que el usuario los tenga._
> **$getServerVar[prefix]ban** - _Banea a un usuario. (Acepta mención o ID)_
> **$getServerVar[prefix]kick** - _Expulsa a un usuario. (Acepta mención o ID)_
> **$getservervar[prefix]mute** - _Silencia temporalmente a un usuario. (Solo acepta Mención)_
> **$getservervar[prefix]unmute** - _Desactiva el silencio en un usuario. (Solo acepta Mención)_

**[Puedes consultar la lista en mi página también](https://bit.ly/3NfjkXr)**}{footer:Comando editado por $usertag:$authoravatar}{color:$replacetext[$replacetext[$getrolecolor[$highestrole[$authorid]];#000001;BLURPLE];#000000;BLURPLE]}{timestamp}};{actionRow:{selectMenu:cmdPages_$authorid:ADMIN:1:1:no:{selectMenuOptions:INFO:page1:Comandos que muestran informacion de servidores, de un usuario, etc.:no:<:infoIcon:1026305084117758023>}{selectMenuOptions:UTILIDAD:pageUtil:Comandos de utilidad.:no:<:smilingFace:1026304076478156802>}}}{actionRow:{selectMenu:menu_$authorid:Lista de comandos:1:1:no:{selectMenuOptions:Inicio:men4:Volver a el inicio:no:<:homeIcon:1026305376381055027>}{selectMenuOptions:Lista de comandos - Configuración:men2:Muestra la lista de comandos de configuración:no:<:settingsIcon:1026305219686043741>}}}]

$onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{ "embeds" : "{newEmbed:{description::x: **| ¡Esta interacción no es tuya!**}{color:RED}}", "ephemeral" : true, "options" : {"interaction" : true}
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==cmdPages;]
$onlyIf[$interactionData[values[0]]==page3;]
 $suppresserrors[ ]
  `
}]
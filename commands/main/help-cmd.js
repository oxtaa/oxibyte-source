module.exports = [{
  name: "help",
  code: `$author[Cliente de $usertag[$clientid];$userAvatar[$clientID]]
$reply[$messageid;no]
$title[¡Bienvenido, $usertag!]
$description[_Soporte: $getservervar[prefix]support._

> Para ver los comandos, selecciona una opción de la lista de abajo.
] 
$image[https://media.discordapp.net/attachments/1026680546513928265/1075458841883459704/13_sin_titulo_20230215134731.png?width=721&height=406]

$color[$replacetext[$replacetext[$getrolecolor[$highestrole[$authorid]];#000001;BLURPLE];#000000;BLURPLE]]
$footer[Comando ejecutado por $userTag;$authorAvatar]
$addtimestamp
$addSelectMenu[1;menu_$authorid;Inicio;1;1;no;Lista de Comandos:Muestra la lista de comandos:men1:no:📟;Lista de comandos - Configuración:Muestra la lista de comandos de configuración:men2:no:<:settingsIcon:1026305219686043741>]
`
},{
  type: "interaction", 
  prototype: "selectMenu", 
  code: `
  $interactionUpdate[;{newEmbed:{author:Ayuda de $usertag[$clientid]:$useravatar[$clientid]}{title:📟 | Lista de comandos - Página 1}{description:<:infoIcon:1026305084117758023> **| __INFO__ |** <:infoIcon:1026305084117758023>
_Comandos que proporcionan información de servidores, de un usuario, etc._
> **$getservervar[prefix]about** - _Proporciona información del cliente y su estado actual._
> **$getservervar[prefix]about-dev** - _Proporciona información sobre mi desarrollador_
> **$getservervar[prefix]user-info** - _Proporciona información de ti mismo o del usuario mencionado._
> **$getServerVar[prefix]server-info** - _Proporciona información del servidor._

**[Puedes consultar la lista en mi página también](https://bit.ly/3NfjkXr)**}{footer:Comando editado por $usertag:$authoravatar}{color:$replacetext[$replacetext[$getrolecolor[$highestrole[$authorid]];#000001;BLURPLE];#000000;BLURPLE]}{timestamp}};{actionRow:{selectMenu:cmdPages_$authorid:INFO:1:1:no:{selectMenuOptions:UTILIDAD:pageUtil:Comandos de utilidad.:no:<:smilingFace:1026304076478156802>}{selectMenuOptions:ADMIN:page3:Comandos que requieren que el bot tenga ciertos permisos o que el usuario los tenga.:no:<:adminPerms:1026304796124250172>}}}{actionRow:{selectMenu:menu_$authorid:Lista de comandos:1:1:no:{selectMenuOptions:Inicio:men4:Volver a el inicio:no:<:homeIcon:1026305376381055027>}{selectMenuOptions:Lista de comandos - Configuración:men2:Muestra la lista de comandos de configuración:no:<:settingsIcon:1026305219686043741>}}}]

$onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{ "embeds" : "{newEmbed:{description::x: **| ¡Esta interacción no es tuya!**}{color:RED}}", "ephemeral" : true, "options" : {"interaction" : true}
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==menu;]
$onlyIf[$interactionData[values[0]]==men1;] 
`
},{
  type: "interaction", 
  prototype: "selectMenu", 
  code: `$interactionUpdate[;{newEmbed:{author:Ayuda de $usertag[$clientid]:$useravatar[$clientid]}{title:⚙️ | Lista de comandos - Configuración}{description:
> **$getservervar[prefix]prefix-set** - _Establece mi prefijo._
> **$getservervar[prefix]welcome-config** - _Configura el sistema de bienvenida._
> **$getservervar[prefix]level-config** - _Configura el sistema de niveles._
> **$getservervar[prefix]level-message** - _Configura el mensaje de subida de nivel._

**[Puedes consultar la lista en mi página también](https://bit.ly/3NfS0rX)**}{footer:Comando editado por $usertag:$authoravatar}{color:$replacetext[$replacetext[$getrolecolor[$highestrole[$authorid]];#000001;BLURPLE];#000000;BLURPLE]}{timestamp}};{actionRow:{selectMenu:menu_$authorid:Lista de comandos - Configuración:1:1:no:{selectMenuOptions:Inicio:men4:Volver a el inicio:no:<:homeIcon:1026305376381055027>}{selectMenuOptions:Lista de comandos:men1:Muestra la lista de comandos:no:📟}}}]

$onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{ "embeds" : "{newEmbed:{description::x: **| ¡Esta interacción no es tuya!**}{color:RED}}", "ephemeral" : true, "options" : {"interaction" : true}
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==menu;]
$onlyIf[$interactionData[values[0]]==men2;] 
`
},{
 type: "interaction",
  prototype: "selectMenu",
  code: `$interactionUpdate[;{newEmbed:{author:Cliente de $usertag[$clientid]:$useravatar[$clientid]}{title:¡Bienvenido, $usertag!}{description:_Soporte: $getservervar[prefix]support._

> Para ver los comandos, selecciona una opción de la lista de abajo.}{image:https://media.discordapp.net/attachments/1026680546513928265/1075458841883459704/13_sin_titulo_20230215134731.png?width=721&height=406}{color:$replacetext[$replacetext[$getrolecolor[$highestrole[$authorid]];#000001;BLURPLE];#000000;BLURPLE]}{footer:Comando editado por $usertag:$authoravatar}{timestamp}};{actionRow:{selectMenu:menu_$authorid:Inicio:1:1:no:{selectMenuOptions:Lista de comandos:men1:Muestra la lista de comandos:no:📟}{selectMenuOptions:Lista de comandos - Configuración:men2:Muestra la lista de comandos de configuración:no:<:settingsIcon:1026305219686043741>}}}]

$onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{ "embeds" : "{newEmbed:{description::x: **| ¡Esta interacción no es tuya!**}{color:RED}}", "ephemeral" : true, "options" : {"interaction" : true}
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==menu;]
  $onlyIf[$interactionData[values[0]]==men4;]
  ` 
}]
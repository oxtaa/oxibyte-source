module.exports = [{
聽 name: "help",
聽 code: `$author[Cliente de $usertag[$clientid];$userAvatar[$clientID]]
$reply[$messageid;no]
$title[隆Bienvenido, $usertag!]
$description[_Soporte: $getservervar[prefix]support._

> Para ver los comandos, selecciona una opci贸n de la lista de abajo.
] 
$image[https://media.discordapp.net/attachments/1026680546513928265/1075458841883459704/13_sin_titulo_20230215134731.png?width=721&height=406]

$color[$replacetext[$replacetext[$getrolecolor[$highestrole[$authorid]];#000001;BLURPLE];#000000;BLURPLE]]
$footer[Comando ejecutado por $userTag;$authorAvatar]
$addtimestamp
$addSelectMenu[1;menu_$authorid;Inicio;1;1;no;Lista de Comandos:Muestra la lista de comandos:men1:no:馃摕;Lista de comandos - Configuraci贸n:Muestra la lista de comandos de configuraci贸n:men2:no:<:settingsIcon:1026305219686043741>]
`
},{
聽 type: "interaction", 
聽 prototype: "selectMenu", 
聽 code: `
  $interactionUpdate[;{newEmbed:{author:Ayuda de $usertag[$clientid]:$useravatar[$clientid]}{title:馃摕 | Lista de comandos - P谩gina 1}{description:<:infoIcon:1026305084117758023> **| __INFO__ |** <:infoIcon:1026305084117758023>
_Comandos que proporcionan informaci贸n de servidores, de un usuario, etc._
> **$getservervar[prefix]about** - _Proporciona informaci贸n del cliente y su estado actual._
> **$getservervar[prefix]about-dev** - _Proporciona informaci贸n sobre mi desarrollador_
> **$getservervar[prefix]user-info** - _Proporciona informaci贸n de ti mismo o del usuario mencionado._
> **$getServerVar[prefix]server-info** - _Proporciona informaci贸n del servidor._

**[Puedes consultar la lista en mi p谩gina tambi茅n](https://bit.ly/3NfjkXr)**}{footer:Comando editado por $usertag:$authoravatar}{color:$replacetext[$replacetext[$getrolecolor[$highestrole[$authorid]];#000001;BLURPLE];#000000;BLURPLE]}{timestamp}};{actionRow:{selectMenu:cmdPages_$authorid:INFO:1:1:no:{selectMenuOptions:UTILIDAD:pageUtil:Comandos de utilidad.:no:<:smilingFace:1026304076478156802>}{selectMenuOptions:ADMIN:page3:Comandos que requieren que el bot tenga ciertos permisos o que el usuario los tenga.:no:<:adminPerms:1026304796124250172>}}}{actionRow:{selectMenu:menu_$authorid:Lista de comandos:1:1:no:{selectMenuOptions:Inicio:men4:Volver a el inicio:no:<:homeIcon:1026305376381055027>}{selectMenuOptions:Lista de comandos - Configuraci贸n:men2:Muestra la lista de comandos de configuraci贸n:no:<:settingsIcon:1026305219686043741>}}}]

$onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{ "embeds" : "{newEmbed:{description::x: **| 隆Esta interacci贸n no es tuya!**}{color:RED}}", "ephemeral" : true, "options" : {"interaction" : true}
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==menu;]
$onlyIf[$interactionData[values[0]]==men1;] 
`
},{
聽 type: "interaction", 
聽 prototype: "selectMenu", 
聽 code: `$interactionUpdate[;{newEmbed:{author:Ayuda de $usertag[$clientid]:$useravatar[$clientid]}{title:鈿欙笍 | Lista de comandos - Configuraci贸n}{description:
> **$getservervar[prefix]prefix-set** - _Establece mi prefijo._
> **$getservervar[prefix]welcome-config** - _Configura el sistema de bienvenida._
> **$getservervar[prefix]level-config** - _Configura el sistema de niveles._
> **$getservervar[prefix]level-message** - _Configura el mensaje de subida de nivel._

**[Puedes consultar la lista en mi p谩gina tambi茅n](https://bit.ly/3NfS0rX)**}{footer:Comando editado por $usertag:$authoravatar}{color:$replacetext[$replacetext[$getrolecolor[$highestrole[$authorid]];#000001;BLURPLE];#000000;BLURPLE]}{timestamp}};{actionRow:{selectMenu:menu_$authorid:Lista de comandos - Configuraci贸n:1:1:no:{selectMenuOptions:Inicio:men4:Volver a el inicio:no:<:homeIcon:1026305376381055027>}{selectMenuOptions:Lista de comandos:men1:Muestra la lista de comandos:no:馃摕}}}]

$onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{ "embeds" : "{newEmbed:{description::x: **| 隆Esta interacci贸n no es tuya!**}{color:RED}}", "ephemeral" : true, "options" : {"interaction" : true}
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==menu;]
$onlyIf[$interactionData[values[0]]==men2;] 
`
},{
 type: "interaction",
  prototype: "selectMenu",
  code: `$interactionUpdate[;{newEmbed:{author:Cliente de $usertag[$clientid]:$useravatar[$clientid]}{title:隆Bienvenido, $usertag!}{description:_Soporte: $getservervar[prefix]support._

> Para ver los comandos, selecciona una opci贸n de la lista de abajo.}{image:https://media.discordapp.net/attachments/1026680546513928265/1075458841883459704/13_sin_titulo_20230215134731.png?width=721&height=406}{color:$replacetext[$replacetext[$getrolecolor[$highestrole[$authorid]];#000001;BLURPLE];#000000;BLURPLE]}{footer:Comando editado por $usertag:$authoravatar}{timestamp}};{actionRow:{selectMenu:menu_$authorid:Inicio:1:1:no:{selectMenuOptions:Lista de comandos:men1:Muestra la lista de comandos:no:馃摕}{selectMenuOptions:Lista de comandos - Configuraci贸n:men2:Muestra la lista de comandos de configuraci贸n:no:<:settingsIcon:1026305219686043741>}}}]

$onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{ "embeds" : "{newEmbed:{description::x: **| 隆Esta interacci贸n no es tuya!**}{color:RED}}", "ephemeral" : true, "options" : {"interaction" : true}
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==menu;]
聽 $onlyIf[$interactionData[values[0]]==men4;]
  ` 
}]
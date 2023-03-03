module.exports =[{
  name: "support",
  code: `$author[Soporte de $usertag[$clientid];$useravatar[$clientid]]
  $title[Soporte | Cliente]
  $description[Para reportar un error, usa $getservervar[prefix]report
  
  [Servidor de soporte](https://discord.gg/65WhZcStrP)]
$color[$replacetext[$replacetext[$getrolecolor[$highestrole[$authorid]];#000001;BLURPLE];#000000;BLURPLE]] 
 $addSelectMenu[1;menu_$authorid;Soporte | Bot;1;1;no;Soporte | Programación de bots:Ver el soporte de programación de bots en aoi.js y BDFD:supportCodes]
  $footer[Comando ejecutado por $usertag;$authoravatar]
  $addtimestamp
  $reply[$messageid;no]
  `
},{
  type: "interaction", 
  prototype: "selectMenu", 
  code: `
$interactionUpdate[;{newEmbed:{author:Soporte de $usertag[$clientid]:$useravatar[$clientid]}{title:Soporte | Programación de bots}{description:¿Estás buscando Soporte de Programación de bots?
¡Te recomiendo unirte a éstos servidores!
> <:bdfd:1017164021641777284> [Bot Designer for Discord Official Server](https://discord.gg/botdesigner)
> <:akarui:1017163456383823875> [Akarui Development Team](https://discord.gg/VQpAB4NHA8)}{footer:Comando editado por $usertag:$authoravatar}{timestamp}{color:$replacetext[$replacetext[$getrolecolor[$highestrole[$authorid]];#000001;BLURPLE];#000000;BLURPLE]}};{actionRow:{selectMenu:menu_$authorid:Soporte | Programación de bots:1:1:no:{selectMenuOptions:Soporte | Cliente:supportBot:Muestra el soporte de $usertag[$clientid]:no}}]

$onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{ "embeds" : "{newEmbed:{description::x: **| ¡Esta interacción no es tuya!**}{color:RED}}", "ephemeral" : true, "options" : {"interaction" : true}
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==menu;]
  $onlyIf[$interactionData[values[0]]==supportCodes;]
  `
},{
  type: "interaction", 
  prototype: "selectMenu", 
  code: ` 
$interactionUpdate[;{newEmbed:{author:Soporte de $usertag[$clientid]:$useravatar[$clientid]}{title:Soporte | Cliente}{description:Para reportar un error, usa $getservervar[prefix]report
  
  [Servidor de soporte](https://discord.gg/65WhZcStrP)}{footer:Comando editado por $usertag:$authoravatar}{timestamp}{color:$replacetext[$replacetext[$getrolecolor[$highestrole[$authorid]];#000001;BLURPLE];#000000;BLURPLE]}};{actionRow:{selectMenu:menu_$authorid:Soporte | Bot:1:1:no:{selectMenuOptions:Soporte | Programación de bots:supportCodes:Ver el soporte de programación de bots en aoi.js y BDFD:no}}}]
$onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{ "embeds" : "{newEmbed:{description::x: **| ¡Esta interacción no es tuya!**}{color:RED}}", "ephemeral" : true, "options" : {"interaction" : true}
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==menu;]
  $onlyIf[$interactionData[values[0]]==supportBot;]
  `
}]
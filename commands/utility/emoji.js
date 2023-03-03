module.exports = {
  name: "emoji",
  aliases: ["jumbo", "emoji-info", "emojiinfo"],  
  code: `
  $author[Utilidad de $usertag[$clientid];$useravatar[$clientid]]
  $title[Información adicional del emoji ($message[1])]
  $description[**Nombre del emoji:** *\`\`\`$emoji[$resolveemojiid[$message[1]];name]\`\`\`*
**ID:**
\`\`\`$emoji[$resolveemojiid[$message[1]];id]\`\`\`
**Emoji en grande (jumbo):**]
$image[$emoji[$resolveemojiid[$message[1]];url]]
$color[$replacetext[$replacetext[$getrolecolor[$highestrole[$authorid]];#000000;BLURPLE];#000001;BLURPLE]]
$footer[Comando ejecutado por $usertag;$useravatar]
$addtimestamp
$argscheck[1;{newEmbed:{description::warning: **| El uso correcto del comando es $getservervar[prefix]$commandname [emoji]**}{color:YELLOW}]
$onlyif[$resolveemojiid[$message[1]]!=;{newEmbed:{description::x: **| ¡"$message[1]" no es un emoji personalizado!**}{color:RED}}]
$argscheck[1;{newEmbed:{description::warning: **| El uso correcto del comando es $getservervar[prefix]$commandname [emoji]**}{color:YELLOW}}]
  ` 
}
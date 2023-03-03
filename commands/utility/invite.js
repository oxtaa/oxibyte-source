module.exports ={
  name: "invite",
  aliases: "inv",
  code: `$sendmessage[<@$authorid>, se te ha enviado mi invitación por un mensaje directo;yes]
$dm
$author[Invitacion de $usertag[$clientid];$useravatar[$clientid]]
$description[$usertag, puedes invitarme con estos links:
<:linkClip:1026304193000124467> **[Con permisos](https://discord.com/api/oauth2/authorize?client_id=817158072232706108&permissions=1099883924598&scope=bot%20applications.commands)**
<:linkClip:1026304193000124467> **[Sin permisos](https://discord.com/api/oauth2/authorize?client_id=817158072232706108&permissions=0&scope=bot%20applications.commands)**]
$color[$replacetext[$replacetext[$getrolecolor[$highestrole[$authorid]];#000001;BLURPLE];#000000;BLURPLE]]
  `
}
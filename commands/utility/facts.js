module.exports ={
  name: "random-fact",
  aliases: ['randomfact', 'fact', 'facts'],
  code: `$author[Utilidad de $usertag[$clientid];$useravatar[$clientid]] 
  $title[Utilidad - Datos curiosos]
  $description[$jsonrequest[https://api.popcat.xyz/translate?to=es&text=$replacetext[$jsonrequest[https://api.popcat.xyz/fact;fact]; ;+];translated]]
 $footer[Comando ejecutado por $usertag;$authoravatar] $color[$replacetext[$replacetext[$getrolecolor[$highestrole[$authorid]];#000001;BLURPLE];#000000;BLURPLE]]
 $reply[$messageid;no]
 $addtimestamp
  `
}
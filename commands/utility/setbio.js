module.exports ={
  name: "set-bio",
  aliases: ["setbio"],
  code: `$author[Utilidad de $usertag[$clientid];$useravatar[$clientid]]
  $title[Biografía establecida.]
  $description[Tu biografía se estableció a ***"$message"***]
  $footer[Comando ejecutado por $usertag;$authoravatar]
  $addtimestamp
  $color[$replacetext[$replacetext[$getrolecolor[$highestrole[$authorid]];#000001;BLURPLE];#000000;BLURPLE]]
  $argscheck[>0;{newEmbed:{description::x: **| Necesitas poner algo para establecer tu biografía.**}{color:RED}}]
  $onlyif[$charcount[$message]<=100;{newEmbed:{description::x: **| ¡Maximo 100 caracteres! _(Ingresaste $charcount[$message])_**}{color:RED}}]
  $setglobaluservar[bio;$replacetext[$replacetext[$checkcondition[$charcount[$message]<=100];true;$message];false;$getglobaluservar[bio]]]
  $reply[$messageid;no]
  `
}
module.exports ={
  name: "uptime",
  aliases: ["host-time", "hosttime"],
  code: `$author[Utilidad de $clientusername;$clientavatar]
  $title[Utilidad - Tiempo de actividad]
  $description[Activo desde <t:$truncate[$divide[$sub[$datestamp;$uptime[ms]];1000]]:R> (<t:$truncate[$divide[$sub[$datestamp;$uptime[ms]];1000]]:D>, <t:$truncate[$divide[$sub[$datestamp;$uptime[ms]];1000]]:T>)]
  $footer[Comando ejecutado por $usertag;$authoravatar]
  $addtimestamp
  $color[$replacetext[$replacetext[$getrolecolor[$highestrole[$authorid]];#000001;BLURPLE];#000000;BLURPLE]]
  `
}
module.exports = {
  name: "news",
  aliases: ['last-news', 'lastnews'],
  code: `$author[Utilidad de $clientusername;$clientavatar]
  $title[Cambios y arreglos - _$clientversion_]
  $description[***> - Se arreglaron varios bugs con los comandos $getservervar[prefix]kick y $getservervar[prefix]ban.
> - También se agregó la posibilidad de usar el ID de usuario a la hora de banear o expulsar a alguien.
> (RECORDATORIO) No se actualizará por el momento a aoi.js 6.1.0 debido a todos los problemas con (casi) todos los comandos***]
$color[$replacetext[$replacetext[$getrolecolor[$highestrole[$authorid]];#000001;BLURPLE];#000000;BLURPLE]]
$footer[Comando ejecutado por $usertag;$useravatar]
$addtimestamp
  `
}
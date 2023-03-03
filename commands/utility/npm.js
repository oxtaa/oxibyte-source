module.exports ={
  name: "npm",
  aliases: ['npm-info', 'npminfo'],
  $if: "v4",
  code: `$if[$jsonrequest[https://api.popcat.xyz/npm?q=$replacetext[$message; ;+];name]==]

  $reply[$messageid;no]
  $description[:x: **| La búsqueda no ha dado resultados.**]
  $color[RED]

  $else
  
  $reply[$messageid;no]
  $author[Utilidad de $usertag[$clientid];$useravatar[$clientid]]
  $title[Utilidad - Información del NPM]
  $description[**Nombre:** _$jsonrequest[https://api.popcat.xyz/npm?q=$replacetext[$message; ;+];name]_
**Descripcion:** _"$jsonrequest[https://api.popcat.xyz/npm?q=$replacetext[$message; ;+];description]"_
**Version:** _$jsonrequest[https://api.popcat.xyz/npm?q=$replacetext[$message; ;+];version]_
**Creador:** _$tolocaleuppercase[$jsonrequest[https://api.popcat.xyz/npm?q=$replacetext[$message; ;+];author]]_
**Repositorio de GitHub:** $replacetext[$replacetext[$checkcondition[$jsonrequest[https://api.popcat.xyz/npm?q=$replacetext[$message; ;+];repository]!=];true;$jsonrequest[https://api.popcat.xyz/npm?q=$replacetext[$message; ;+];repository]];false;_Este NPM no tiene un repositorio._]
**Descargas este año ($year):** _$jsonrequest[https://api.popcat.xyz/npm?q=$replacetext[$message; ;+];downloads_this_year]_]
  $footer[Comando ejecutado por $usertag;$authoravatar]
  $addtimestamp
$color[$replacetext[$replacetext[$getrolecolor[$highestrole[$authorid]];#000001;BLURPLE];#000000;BLURPLE]]
  
  $endif

  $argscheck[>0;{newEmbed:{description::warning: **| El uso correcto del comando es $getservervar[prefix]$commandname [nombre del npm a buscar]**}{color:YELLOW}}]
  `
}
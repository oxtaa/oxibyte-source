module.exports ={
  name: "steam",
  aliases: ['steam-info', 'steaminfo'],
  $if: "v4",
  code: `$if[$jsonrequest[https://api.popcat.xyz/steam?q=$replacetext[$message; ;+];name]==]

  $reply[$messageid;no]
  $description[:x: **| La búsqueda no ha dado resultados.**]
  $color[RED]

  $else
  
  $reply[$messageid;no]
  $author[Utilidad de $usertag[$clientid];$useravatar[$clientid]]
  $title[Utilidad - Información de la aplicación o juego de Steam]
  $thumbnail[$jsonrequest[https://api.popcat.xyz/steam?q=$replacetext[$message; ;+];thumbnail]]
  $description[**Nombre del juego/aplicación:** _$jsonrequest[https://api.popcat.xyz/steam?q=$replacetext[$message; ;+];name]_
**Descripcion:** _"$jsonrequest[https://api.popcat.xyz/steam?q=$replacetext[$message; ;+];description]"_
**Creador(es):** _$tolocaleuppercase[$jsonrequest[https://api.popcat.xyz/steam?q=$replacetext[$message; ;+];developers]]_
**Publicador(es):** _$tolocaleuppercase[$jsonrequest[https://api.popcat.xyz/steam?q=$replacetext[$message; ;+];publishers]]_
**Sitio web:** $replacetext[$replacetext[$checkcondition[$jsonrequest[https://api.popcat.xyz/steam?q=$replacetext[$message; ;+];website]!=];true;$jsonrequest[https://api.popcat.xyz/steam?q=$replacetext[$message; ;+];website]];false;_Esta aplicación/juego no tiene un sitio web._]
**Precio:** _$jsonrequest[https://api.popcat.xyz/steam?q=$replacetext[$message; ;+];price]_]
  $footer[Comando ejecutado por $usertag;$authoravatar]
  $addtimestamp
  
  $if[$jsonrequest[https://api.popcat.xyz/steam?q=$replacetext[$message; ;+];banner]!=]
  $image[$jsonrequest[https://api.popcat.xyz/steam?q=$replacetext[$message; ;+];banner]]
  $endif
  
$color[$replacetext[$replacetext[$getrolecolor[$highestrole[$authorid]];#000001;BLURPLE];#000000;BLURPLE]]
  
  $endif

  $argscheck[>0;{newEmbed:{description::warning: **| El uso correcto del comando es $getservervar[prefix]$commandname [nombre del juego/aplicacion a buscar]**}{color:YELLOW}}]
  `
}
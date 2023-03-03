module.exports ={
  name: "prefix",
  code: `$author[Utilidad de $usertag[$clientid];$useravatar[$clientid]]
$reply[$messageid;no]
  $title[Utilidad - Prefijo Actual]
  $description[Mi prefijo actual es **$getservervar[prefix]**$replacetext[$replacetext[$checkcondition[$getservervar[prefix]==ox!];true; (Predeterminado)];false;]]
  $footer[Comando ejecutado por $usertag[$authorid];$authoravatar]
$color[$replacetext[$replacetext[$getrolecolor[$highestrole[$authorid]];#000001;BLURPLE];#000000;BLURPLE]]
$addtimestamp
  `
}
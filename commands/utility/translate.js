module.exports ={
  name: "translate",
  code: `$author[Utilidad de $usertag[$clientid];$useravatar[$clientid]]
  $title[Utilidad - Traducción]
  $description[❓** | Texto inicial:** \`\`\`$message\`\`\`
:flag_es: **| Lo que yo he traducido (Español):** \`\`\`$jsonrequest[$nonescape[https://api.popcat.xyz/translate?to=es&text=$message];translated]\`\`\`
**___NOTA: Las traducciones pueden no dar los resultados esperados al 100%___**]
 $footer[Comando ejecutado por $usertag;$authoravatar]  $color[$replacetext[$replacetext[$getrolecolor[$highestrole[$authorid]];#000001;BLURPLE];#000000;BLURPLE]]
 $reply[$messageid;no]
 $suppresserrors[{newEmbed:{description::x: **| Revisa que no hayas puesto cáracteres inválidos y vuelve a intentarlo.**}{color:RED}}]
 $addtimestamp
  `
}
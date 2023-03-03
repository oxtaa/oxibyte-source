module.exports ={
  name: "<@817158072232706108>",
  aliases: "<@!817158072232706108>",
  $if: "v4",
  code: `
  
  $author[Cliente de $usertag[$clientid];$useravatar[$clientid]]
  $title[¡Hola, $usertag!]
  $description[¿Me has llamado? Si es así, para ver mis comandos usa $getservervar[prefix]help.]
  $footer[Mencionado por $usertag;$authoravatar]
  $color[$replacetext[$replacetext[$getrolecolor[$highestrole[$authorid]];#000001;BLURPLE];#000000;BLURPLE]]
  $reply[$messageid;no]
  `,
nonPrefixed: true
}
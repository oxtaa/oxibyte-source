module.exports ={
  name: "report",
  code: `
  $sendDM[{newEmbed:{author:Nuevo reporte de $usertag:$authoravatar}{title:Reporte enviado de $servername}{thumbnail:$servericon}{description:*"$nomentionmessage"*}{color:RANDOM}};776317504053837826]
  $description[:white_check_mark: **| El reporte se envió con éxito.**]
  $color[GREEN]
  $argscheck[>2;{newEmbed:{description::warning: **| El uso correcto del comando es $getservervar[prefix]$commandname [mensaje (minimo 3 palabras)]**}{color:YELLOW}}]
  $reply[$messageid;no]  
    $cooldown[2h;{newEmbed:{description::warning: **| Podrás volver a usar el comando en %time% (para evitar el spam en el DM de $usertag[776317504053837826]**)}{color:YELLOW}}]
    $onlyif[$charcount[$nomentionmessage]<300;{newEmbed:{description::x:** | ¡El máximo es de 300 carácteres!**}{color:RED}}]
  `
}
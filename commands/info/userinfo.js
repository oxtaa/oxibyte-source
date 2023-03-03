module.exports = [{
  name: "userinfo",
  aliases: ['user-info', 'uinfo', 'u-info'],
  code: `$author[Información de usuario de $usertag[$mentioned[1;yes]];$useravatar[$mentioned[1;yes]]]
  $title[Información - Usuario]
  $description[
:id: **| ID:** \`$mentioned[1;yes]\`
<:member:1023916606797123584> **| Status:**
$replacetext[$replacetext[$replacetext[$replacetext[$replacetext[$status[$mentioned[1;yes]];online;<:online:1018716080417558558> En línea.];offline;<:offline:1018716207232327690> Desconectado.];idle;<:idle:1018716336492400670> Ausente.];dnd;<:dnd:1018716271845580891> No molestar]$replacetext[$replacetext[$checkcondition[$getcustomstatus[$mentioned[1;yes];$guildid;state]!=none];true;
> $replacetext[$replacetext[$checkcondition[$getcustomstatus[$mentioned[1;yes];$guildid;emoji]!=none];true;$getcustomstatus[$mentioned[1;yes];$guildid;emoji]];false;] _$getcustomstatus[$mentioned[1;yes];$guildid;state]_];false;]
:rocket: **| Actividad del usuario:**
_$replacetext[$replacetext[$replacetext[$activity[$guildid;$mentioned[1;yes]];none;Ningúna.];Custom Status;Status personalizado];Streaming;En stream];Spotify;Escuchando música en Spotify.]_
:date: **| Creación de la cuenta:**
<t:$truncate[$divide[$creationdate[$mentioned[1;yes];ms];1000]]:R> (<t:$truncate[$divide[$creationdate[$mentioned[1;yes];ms];1000]]>)
:date: **| ¿Cuando $usertag[$mentioned[1;yes]] se unió a $servername?:**
<t:$truncate[$divide[$memberjoineddate[$mentioned[1;yes];$guildid;ms];1000]]:R> (<t:$truncate[$divide[$memberjoineddate[$mentioned[1;yes];$guildid;ms];1000]]>)
<:boost:1018866759488507945> **| ¿Está $usertag[$mentioned[1;yes]] mejorando $servername?:** _$replacetext[$replacetext[$isboosting[$mentioned[1;yes]];true;Si];false;No]_
<:role:1018851977012183040> **| Roles:**
$userroles[$mentioned[1;yes];$guildid;mention; - ]
]
$footer[Comando ejecutado por $usertag;$authoravatar]
$color[$replacetext[$replacetext[$getrolecolor[$highestrole[$authorid]];#000001;BLURPLE];#000000;BLURPLE]]
$addTimestamp
$onlyif[$mentioned[1]!=;{newEmbed:{description::x: **| Ese no es un usuario válido.**}{color:RED}}]
$onlyif[$isbot[$mentioned[1]]==false;{newEmbed:{author:Sobre el bot $usertag[$mentioned[1]]:$useravatar[$mentioned[1]]}{title:Información del bot}{description::id: **| ID del bot:** \`$mentioned[1]\`
<:member:1023916606797123584> **| Status del bot:**
$replacetext[$replacetext[$replacetext[$replacetext[$status[$mentioned[1]];online;<:online:1018716080417558558> Encendido.];offline;<:offline:1018716207232327690> Apagado.];idle;<:idle:1018716336492400670> Ausente.];dnd;<:dnd:1018716271845580891> No molestar]
:date: **| Creación del bot:**
<t:$truncate[$divide[$creationdate[$mentioned[1];ms];1000]]:R> (<t:$truncate[$divide[$creationdate[$mentioned[1];ms];1000]]>)
:date: **| ¿Cuando $usertag[$mentioned[1]] se unió a $servername?:**
<t:$truncate[$divide[$memberjoineddate[$mentioned[1];$guildid;ms];1000]]:R> (<t:$truncate[$divide[$memberjoineddate[$mentioned[1];$guildid;ms];1000]]>)
<:role:1018851977012183040> **| Roles del bot:**
$userroles[$mentioned[1];$guildid;mention; - ]}{color:$replacetext[$replacetext[$getrolecolor[$highestrole[$authorid]];#000001;BLURPLE];#000000;BLURPLE]}{footer:Comando ejecutado por $usertag:$authoravatar}}]

$reply[$messageid;no]
  `
}]
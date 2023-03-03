module.exports =[{
  name: "about",
  aliases: ['aboutbot', 'botinfo', 'bot-info'],
  code: `$author[Informacion de $clientusername;$clientavatar]
  $title[Sobre el cliente]
$description[
👤 **| Creador y desarrollador:** _$userTag[776317504053837826]_
💻 **| Servidores totales:** _\`$serverCount\`_
<:member:1023916606797123584> **| Usuarios Totales:** _\`$allMembersCount\`_
<:oxibyte:1075457947729154149> **| Versión del cliente:** _\`$clientversion\`_
:wrench: **| Comandos del cliente:** _\`$commandscount\`_
:round_pushpin: **| Ping actual:** _\`$pingms\`_
🖥️ **| Uso de CPU:** _\`$cpu\`_
💾 **| Uso de RAM:** _\`$truncate[$ram]mb\`_
📚 **Librerías:**
<:aoijs:1017163454341206067> _\`aoi.js v$packageversion\`_
<:nodejs:841738475728142386> _\`Node.js $nodeversion\`_
<:phyton:1019272181848490095> _\`Python v3.10.6\`_

> <:oxibyte:1075457947729154149> **[Página Oficial](https://bit.ly/oxibyteweb)**
> <:topgg:1019428157981474837> **[Vota por mi en top.gg](https://top.gg/bot/$clientID/vote)**]
$addTimestamp
$footer[Comando ejecutado por $userTag[$authorID];$authoravatar]
$thumbnail[$userAvatar[$clientID]]
$color[$replacetext[$replacetext[$getrolecolor[$highestrole[$authorid]];#000001;BLURPLE];#000000;BLURPLE]]
  $addtimestamp
$reply[$messageid;no]
  `
}]
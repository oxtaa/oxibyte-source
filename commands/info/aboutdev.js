module.exports = {
  name: "aboutdev",
  aliases: ["about-dev", "aboutoxta", "about-oxta", "devinfo", "dev-info"],
  code: `$author[Información sobre mi desarrollador ($usertag[776317504053837826])]
  $title[$usertag[776317504053837826]]
  $thumbnail[$useravatar[776317504053837826]]
  $description[**Es el usuario encargado de mi desarrollo prácticamente desde el inicio, aquí tienes un poco de su información personal (publica):**
> **Nacionalidad:** :flag_ar: Argentina
> **Edad:** _$sub[$year;2008]_
> **Sabe usar:** _JS, Java, HTML5, CSS._
[¡Mira sus otros proyectos aqui!](https://sites.google.com/view/oxtag4)]
$footer[Comando ejecutado por $usertag[$authorid];$authoravatar]
$color[$replacetext[$replacetext[$getrolecolor[$highestrole[$authorid]];#000001;BLURPLE];#000000;BLURPLE]]
$addtimestamp
  `
}
module.exports ={
  name: "profile",
  aliases: ["profile-card", "profilecard", "rank", "rank-card", "rankcard"],
  code: `$attachment[https://api-oxibyte.0xtag4.repl.co/imagegen/profilecardv1?user=$username[$mentioned[1]]&discrim=$discriminator[$mentioned[1]]&avatar=$useravatar[$mentioned[1]]&bio=$if[$getglobaluservar[bio;$mentioned[1]]!=undefined;$replacetext[$getglobaluservar[bio;$mentioned[1]]; ;+];No+establecida.]&guildName=$replacetext[$servername; ;+]&guildIcon=$servericon&xp=$replacetext[$replacetext[$checkcondition[$getuservar[xp;$mentioned[1]]<=$getuservar[xpfalta;$mentioned[1]]];true;$getuservar[xp;$mentioned[1]]];false;$sub[$getuservar[xp;$mentioned[1]];$sub[$getuservar[xp;$mentioned[1]];$getuservar[xpfalta;$mentioned[1]]]]]&total=$getuservar[xpfalta;$mentioned[1]]&level=$getuservar[level;$mentioned[1]]&isXPActive=$getservervar[leveling]&badges=$replacetext[$getuserbadges[$mentioned[1]]; , ;_]&dateJoin=$splittext[1]&status=$status[$mentioned[1]]&isBot=$isbot[$mentioned[1]]&isowner=$checkcondition[$ownerid==$mentioned[1]];$tolowercase[$username[$mentioned[1]]].png]
$textsplit[$replacetext[$parsedate[$memberjoineddate[$mentioned[1];$guildid];date]; ;,];,]
$reply[$messageid;no]
  `
}
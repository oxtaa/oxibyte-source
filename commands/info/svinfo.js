module.exports = {
name: "serverinfo",
aliases: ["server-info", "sv-info", "svinfo"],
code: `
$attachment[https://api-oxibyte.0xtag4.repl.co/imagegen/servercard?guildname=$replacetext[$servername; ;+]&guildicon=$servericon&totalmembers=$memberscount&onlinemembers=$sub[$memberscount;$memberscount[$guildid;offline]]&boostcount=$serverboostcount&ownername=$replacetext[$username[$ownerid]; ;+]&ownerdiscrim=$discriminator[$ownerid]&owneravatar=$useravatar[$ownerid]&ownerbadges=$replacetext[$getuserbadges[$ownerid]; , ;_]&ownerstatus=$status[$ownerid]&channelcount=$channelcount[$guildid]&rolecount=$rolecount[$guildid]&emojicount=$emojicount[$guildid]&creationdate=$splittext[1]&guilddesc=$replacetext[$replacetext[$checkcondition[$guild[$guildid;description]!=];true;$replacetext[$guild[$guildid;description]; ;+]];false;No+disponible.]&banner=$serverbanner[$guildid];servercard.png]
  $textsplit[$replacetext[$creationdate[$guildid;date]; ;,];,]
$reply[$messageid;no]
`
}
module.exports = [{
 name: "avatar",
 aliases: ['av', 'usericon', 'pfp'],
 code: `$author[Avatar de $username[$mentioned[1]];$useravatar[$mentioned[1]]]
$image[$userAvatar[$mentioned[1]]]
 $color[$replacetext[$replacetext[$getrolecolor[$highestrole[$authorid]];#000000;BLURPLE];#000001;BLURPLE]]
 $addButton[1;Ver en la página;link;$nonEscape[$get[image]];no;🌐]
 
 $let[image;$replacetext[$replaceText[$userAvatar[$mentioned[1]];webp;png];gif;png]]
 $reply[$messageid;no]
`
}]
module.exports ={
  name: "update",
  aliases: "u",
  code: `$title[:white_check_mark: | Actualizado]
  $description[Se actualizaron con exito :file_folder: $commandscount comandos]
  $color[GREEN]
  $updatecommands
  $onlyforids[$botownerid[;];Este comando es solo para mis desarrolladores]
  $reply[$messageid]
  `
}
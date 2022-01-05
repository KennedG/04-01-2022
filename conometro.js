exports.run = async(_ ,message, ...argumentos) => {
    let msg = await message.channel.send(`**Iniciando contagem!**`)
    let seconds = 0
    let minutes = 0
    let hora = 0
    setInterval(() => {
      if(seconds >= 60)   {
      minutes++
      seconds = 0
      }
      if(minutes >= 60) {
      hora++
      minutes = 0
      }
      const agora = `<a:mundo:897137157704142888>**${hora}:${minutes}:${seconds}**<a:mundo:897137157704142888>`
      msg.edit(agora)
      seconds++
    }, 1000)
  }
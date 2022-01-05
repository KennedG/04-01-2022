const Discord = require("discord.js");

exports.run = async (client, message, args) => {
    
    let canal = args.join(" ");
    const channel = client.channels.cache.get(canal);

    if (!['493282797222494230'].includes(message.author.id)) return message.reply("Apenas meu criador (<@493282797222494230>) pode usar esse comando!")
    if (!channel) return message.reply("Você não informou o id do canal que devo conectar!")   

    message.reply("Prontinho! Fui conectado no canal com sucesso!<a:verificado:908562051927007242>")

   channel.join()
}
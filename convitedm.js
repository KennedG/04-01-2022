//chat
const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  const hora = new Date();
  hora.setHours(hora.getHours() - 3);
  const reason = args.join(' ');
  //Mensagem no Chat
  const embed = new Discord.MessageEmbed()
  .setTitle(`<a:hype:897139138661351434> |Quer me adicionar em seu Servidor?`)
  .setColor("#A020F0")
  .setDescription(`<:az_moderador_old:909264644168900629> Irei mandar o meu invite em sua DM!.<:az_moderador_old:909264644168900629> `)
  .setFooter(`Invite Solicitado por: ${message.author.tag}`)
  message.channel.send(embed);

//DM
const privado = new Discord.MessageEmbed()
  .setTitle(`**<:Staff:920797956209270835>|Olá, Sou o Gizmo. Me adicione em seu Servidor! <a:verificado:908562051927007242> **`)
  .setColor("#A020F0")
  .setDescription(`
  Aqui está o meu [Link de convite](https://discord.com/oauth2/authorize?client_id=814726444377833532&scope=bot&permissions=8) basta apenas clicar!

  **Atenciosamente** [Equipe Gizmo](https://github.com/KennedG)
  `)

  .setThumbnail(client.user.displayAvatarURL())
  message.author.send(privado);
};
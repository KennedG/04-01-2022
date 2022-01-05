const axios = require('axios');
const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "corona",
    category: "extra",
    run: async (client, message, args) => {
        const baseUrl = "https://corona.lmao.ninja/v2";

        let url, response, corona;

        try {
            url = args[0] ? `${baseUrl}/countries/${args[0]}`:`${baseUrl}/all`
            response = await axios.get(url)
            corona = response.data
        } catch (error) {
            return message.channel.send(`***${args[0]}*** não existe ou os dados não estão sendo coletados`)
        }

        const embed = new MessageEmbed()
            .setTitle(args[0] ? `${args[0].toUpperCase()} Stats` : 'Total de casos de Corona em todo o mundo')
            .setColor('#fb644c')
            .setThumbnail(args[0] ? corona.countryInfo.flag : 'https://media3.giphy.com/media/J1RWP1OyfkwATrL9cd/giphy.gif?cid=790b7611861737ac169c315c731f0d8279316530eebd23b4&rid=giphy.gif&ct=g')
            .addFields(
                {
                    name: 'Total De Casos:',
                    value: corona.cases.toLocaleString(),
                    inline: true
                },
                {
                    name: 'Total De Mortes:',
                    value: corona.deaths.toLocaleString(),
                    inline: true
                },
                {
                    name: 'Total De Recuperações:',
                    value: corona.recovered.toLocaleString(),
                    inline: true
                },
                {
                    name: 'Casos Ativos:',
                    value: corona.active.toLocaleString(),
                    inline: true
                },
                {
                    name: '\u200b',
                    value: '\u200b',
                    inline: true
                },
                {
                    name: 'Casos Críticos:',
                    value: corona.critical.toLocaleString(),
                    inline: true
                },
                {
                    name: 'Recuperações De Hoje:',
                    value: corona.todayRecovered.toLocaleString().replace("-", ""),
                    inline: true
                },
                {
                    name: 'Mortes De hoje:',
                    value: corona.todayDeaths.toLocaleString(),
                    inline: true
                })

        await message.channel.send(embed)
    }
};
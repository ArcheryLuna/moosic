const Client = require("../struc/build");
const { Message, MessageEmbed } = require('discord.js');
module.exports = {
    name: "help",

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {string[]} args
     */
    run: async(client, message, args) => {
        const help1 = new MessageEmbed()
            .setTitle(`Help command for ${client.user.username}`)
            .setURL("https://discord.gg/E6z67WAFEm")
            .setThumbnail(client.user.avatarURL({ format: "png", dynamic: false }))
            .setDescription("Fuck Kevin and Sloppy there very Straight. xD 😊 \n \n **Commands**")
            .addField("help", "Well what do you think", true)
            .addField("ping", "General Debug command", true)
            .addField("play", "Makes Eduard Sing the Music", true)
            .addField("stop", "Makes Eduard Soosh and stop the sang", true)
            .addField("skip", "Makes Eduard sing the next song Music", true)
            .addField("q or queue", "Makes Eduard Show his song list", true)
            .setColor("RANDOM")
        message.channel.send(help1)
    }
}
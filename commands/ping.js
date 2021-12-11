const Client = require("../struc/build");
const {
    Message,
    MessageEmbed,
    CommandInteraction
} = require('discord.js');
module.exports = {
    name: "ping",
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {string[]} args
     */
    run: async(client, message, args, interaction) => {
        const msg = await message.channel.send(':heavy_check_mark:')
        const embed = new MessageEmbed({
            title: "Pong!",
            description: `WebSocket ping is ${client.ws.ping}MS! \nMessage edit ping is ${msg.createdAt = message.createdAt}`,
            color: "00ff00"
        }, message)
        await msg.edit(embed)
    }
}
const Client = require("../struc/build");
const { Message, MessageEmbed, CommandInteraction } = require('discord.js');
module.exports = {
    name: "rules",
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {string[]} args
     */
    run: async(client, message, args, interaction) => {
        /*
        const rules = new MessageEmbed()
            .setTitle("📚 | Rules")
            .setDescription("**Server IP** \n `node1.colmena.co.uk:25565` \n Kevin is a straight remember that also this is mincraft Java Edition always latest version")
            .addField("1. PVP", "PVP is allowed but do not spawn kill")
            .addField("2. No hacks or cheats", "This is an anarchy however do not cheat with Wurst, Aristois, ext... ")
            .addField("3. OwO", "NO")
            .setColor("RANDOM")
        const info = new MessageEmbed()
            .setTitle("‼️ | Information")
            .setDescription("YES INFO ON MODS COOL")
            .addField("1. Making teams", "/team create teamname password \n /team join teamname password \n /team leave \n /team sethq")
            .addField("2. Homes", "/home to teleport to a home \n /setHome to make a home")
            .addField("3. Teleport requests", "/tpa player \n /tpaccsept to accsept the teleport request or /tpdeny to deny the teleport request")
            .setColor("RANDOM")

        message.channel.send({ embeds: [rules, info] })
        */
    }
}
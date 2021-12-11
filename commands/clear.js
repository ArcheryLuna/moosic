const Client = require("../struc/build");
const { Message, MessageEmbed, CommandInteraction } = require('discord.js');
module.exports = {
    name: "clear",
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {string[]} args
     */
    run: async(client, message, args, interaction) => {
        if (!message.member.hasPermission("MANAGE_MESSAGES" || "ADMINISTRATOR")) {
            message.channel.send(new MessageEmbed()
                .setDescription("You are missing a permission for this command")
                .setColor("")
            )
        }
        const deleteCount = parseInt(args[0], args[10])
        if (!deleteCount || deleteCount < 2 || deleteCount > 100) {
            const msg = await message.channel.send(new MessageEmbed()
                .setDescription('Please enter a number between 2 and 100')
                .setColor('RED')
            )
            msg.delete({ timeout: 20000 });
            message.delete().catch(O_o => {});
            return;
        }
        const fetched = await message.channel.messages.fetch({ limit: deleteCount });
        message.channel.bulkDelete(fetched)
            .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
    }
}
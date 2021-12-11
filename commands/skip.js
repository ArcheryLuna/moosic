const Client = require("../struc/build");
const { Message, MessageEmbed, CommandInteraction } = require('discord.js');
const ytdl = require("ytdl-core")
const ytSearch = require("yt-search")
module.exports = {
    name: "skip",
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {string[]} args
     */
    run: async(client, message, args, interaction) => {
        const voice_channel = message.member.voice.channel;
        if (!voice_channel) return message.channel.send('You need to be in a channel to execute this command!');
        const permissions = voice_channel.permissionsFor(message.client.user);
        if (!permissions.has('CONNECT')) return message.channel.send('You dont have the correct permissins');
        if (!permissions.has('SPEAK')) return message.channel.send('You dont have the correct permissins');

        //This is our server queue. We are getting this server queue from the global queue.
        const server_queue = client.musicQueue.get(message.guild.id);

        if (!message.member.voice.channel) return message.channel.send('You need to be in a channel to execute this command!');
        if (!server_queue) {
            return message.channel.send(`There are no songs in queue 😔`);
        }
        server_queue.connection.dispatcher.end();

    }
}
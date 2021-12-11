const Client = require("../struc/build");
const { Message, MessageEmbed, MessageManager, MessageAttachment } = require('discord.js');
const ytdl = require("ytdl-core")
const ytSearch = require("yt-search");
module.exports = {
    name: "q",
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {string[]} args
     */
    run: async(client, message, args) => {
        const queue = client.musicQueue

        const queueSongs = queue.get(message.guild.id)

        if (!queueSongs) {
            message.channel.send("There is no queue ")
            return
        }
        const songsArray = queueSongs.songs

        let repo = ""
        for (i = 1; i < songsArray.length; i++) {
            repo = repo + `\n ${i}. **${songsArray[i].title}**`
        }

        const song = new MessageEmbed()
            .setTitle("Queue 💿")
            .setDescription(`**now Playing ${songsArray[0].title} \n \n 📃|Queue** ${repo}`)
            .setColor("RANDOM")
        message.channel.send(song)
        console.log(songsArray)
    }
}
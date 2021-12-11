const { SlashCommandBuilder } = require('@discordjs/builders');
const { error } = require('console');
const { MessageEmbed, Client, Collection, Activity, Intents, Interaction } = require('discord.js');
const ytdl = require("ytdl-core")
const ytSearch = require("yt-search");
class Gypsy extends Client {
    constructor() {
        super({
            intents: ["GUILDS", "DIRECT_MESSAGES", "GUILD_BANS", "GUILD_MESSAGES", "GUILD_MEMBERS", "GUILD_MESSAGE_REACTIONS", "GUILD_VOICE_STATES", "GUILD_MESSAGE_TYPING", "GUILD_INVITES"]
        });
        /*
        dependencies 
        */
        this.path = require('path')
        this.discord = require('discord.js')
        this.fs = require('fs')
            /*
            Collections
            */
        this.commands = new Collection();
        this.threads = new Collection();
        this.musicQueue = new Map();
        /*
        constants
        */
        this.prefix = "+";
    }
    commandHandler(path) {
        this.fs.readdirSync(this.path.normalize(path)).map((f) => {
            const File = require(this.path.join(__dirname, `..`, path, f));
            this.commands.set(File.name, File)
        });
    }
    getCommand(cmd) {
        return this.commands.has(cmd) ? this.commands.get(cmd) : false;
    }
    start(token, path) {
        this.commandHandler(path);
        this.login(token)
        this.on('ready', async() => {
            console.log("I am online and at your service")
            this.user.setActivity({
                name: `+help`,
                type: "LISTENING"
            })

            /** 
                const SloppyIsGay = "830080645161025576"
                const KevinServer = this.guilds.cache.get(SloppyIsGay)
                let SlashCommands
                if (KevinServer) {
                    SlashCommands = KevinServer.commands
                } else {
                    SlashCommands = this.application.commands
                }
                SlashCommands.create({
                    name: "ping",
                    description: "A basic Debugging command",
                    type: "MESSAGE",
                    options: [],
                    default_permission: []
                })
            */
        })
        this.on('interactionCreate', async interaction => {
            const { commandName } = interaction
            if (commandName === "ping") {
                await interaction.reply
            }
        })
        this.on('message', async message => {

            const args = message.content.slice(this.prefix.length).trim().split(/ +/g);
            if (message.author.bot) {
                return;
            }


            if (!message.guild || !message.content.toLowerCase().startsWith(this.prefix)) return;
            const cmd = args.shift().toLowerCase();
            const command = this.getCommand(cmd)
            if (command) return command.run(this, message, args).catch(console.error);
        })



    }
    embed(data, message) {
        return new MessageEmbed(data).setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true, format: "png" }))
    }
}
module.exports = Gypsy
const Discord = require("discord.js")
const client = new Discord.Client(
    { intents: ["GUILDS", "GUILD_MESSAGE", "GUILD_MEMBERS"] }
)

client.login(process.env.token)
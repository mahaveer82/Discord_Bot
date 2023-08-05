const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({ 
    intents: [
        GatewayIntentBits.Guilds, 
        GatewayIntentBits.GuildMessages, 
        GatewayIntentBits.MessageContent,
    ],
}); // whose permission given && creating for messages


//It's a normal message section
client.on("messageCreate", (message) =>{
    if(message.author.bot) return;
    message.reply({
        content: "Hi From Bot",
    });
});

//It's a interaction message section i was created
client.on('interactionCreate', (interaction) =>{
    interaction.reply('pong');
});

client.login(
    "<Your Token>"
);

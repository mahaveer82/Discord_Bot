const { REST, Routes } = require('discord.js');

const commands = [
    {
      name: 'ping',
      description: 'Replies with Pong!',
    },
  ];

  const rest = new REST({ version: '10' }).setToken(
    "MTEzNzMxNTg3NDQ1ODU3ODk0NA.GePua4.NnrZXvj3bPo8_R-cb8W8FHG71HP4kKxI8ac-k4"
);

(async ()=>{
try {
    console.log('Started refreshing application (/) commands.');
  
    await rest.put(Routes.applicationCommands('1137315874458578944'), { body: commands });
  
    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();

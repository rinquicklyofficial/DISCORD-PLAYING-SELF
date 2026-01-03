const { Client } = require('discord.js-selfbot-v13');

const client = new Client();

const TOKEN = "YOU SELF TOKEN"; // <-- Put your user token here

client.on('ready', () => {
  console.log(`✅ Online as ${client.user.tag}`);

  // Set status online with "Playing Roblox"
  client.user.setPresence({
    status: 'online',
    activities: [{ name: 'Roblox', type: 'PLAYING' }]
  });
});

client.login(TOKEN);

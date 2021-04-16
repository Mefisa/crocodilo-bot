const Discord = require('discord.js');
const { DISCORD_API_KEY } = require('./config/local');

const discordClient = new Discord.Client();

discordClient.once('ready', () => {
  console.log('Nigel is Online');
})

discordClient.login(DISCORD_API_KEY);




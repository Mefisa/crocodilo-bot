const Discord = require('discord.js');
const { DISCORD_API_KEY } = require('./config/local');

const discordClient = new Discord.Client();

discordClient.once('ready', () => {
  console.log('Nigel is Online');
  const channel = discordClient.channels.cache.find(channel => channel.name === 'nigel-lp-stock-exchange');
  for(let i=0; i<50; i++){
    setTimeout(()=>channel.send('nigel is a crocodile'), 10000);
  }
})




discordClient.login(DISCORD_API_KEY);





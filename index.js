require('dotenv').config()
const Discord = require('discord.js');

const discordClient = new Discord.Client();

discordClient.once('ready', () => {
  console.log('Nigel is Online');
})

discordClient.on('message', async msg => {
  if(msg.author.bot){
    return
  }
  if(msg.content.startsWith("!hello")) {
    msg.reply("world!")
  }

  if(msg.content.startsWith("!ticker")) {
    const args = msg.content.split(" ")
    let messageContent = ""
    if(args.includes("foo")){
      messageContent += "bar"
    }
    msg.reply(messageContent)
  }
})

discordClient.login(process.env.DISCORD_API_KEY);




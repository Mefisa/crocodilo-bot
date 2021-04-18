require('dotenv').config()
const Discord = require('discord.js');
const fs = require('fs')

const commands = {}

const files = fs.readdirSync('./commands')
const jsFiles = files.filter(file => file.endsWith(".js"))
jsFiles.forEach(commandFile => {
  const command = require(`./commands/${commandFile}`)
  if(command.prefix && command.fn) {
    commands[command.prefix] = command.fn
  } 
})

const discordClient = new Discord.Client();

discordClient.once('ready', () => {
  console.log('Nigel is Online');
})

discordClient.on('message', async msg => {
  const prefix = msg.content.split(' ')[0]
  if(commands[prefix] === undefined || msg.author.bot){
    return
  }

  commands[prefix](msg)
})

discordClient.login(process.env.DISCORD_API_KEY);




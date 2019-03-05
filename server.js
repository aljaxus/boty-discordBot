const Discord = require('discord.js')
const config = require('./config.nogit.js')

const bot = new Discord.Client();



bot.on('ready', () => console.log('-> The discord bot is ready!'))

const vuetifyReactionsChnlIds = [
  // Vuetify - announcements
  '389885858729164801',
  // '444511767373021184' //Vuetify - testing
]



bot.on('message', message => {

  if ( vuetifyReactionsChnlIds.includes( message.channel.id ) ) {

    message.react("🇻")
      .then(() => {
        return message.react("🇺")
      })
      .then(() => {
        return message.react("🇪")
      })
      .then(() => {
        return message.react("🇹")
      })
      .then(() => {
        return message.react("🇮")
      })
      .then(() => {
        return message.react("🇫")
      })
      .then(() => {
        return message.react("🇾")
      })
      .then(() => {
        return message.react("♥")
      })
      .then(() => {
        return message.react("🇷")
      })
      .then(() => {
        return message.react("🇴")
      })
      .then(() => {
        return message.react("🇨")
      })
      .then(() => {
        return message.react("🇰")
      })
      .then(() => {
        return message.react("🇸")
      })
      .then(() => {
        return message.react("‼")
      })
      .then(() => {
        return console.log("|_ Reacted VUETIFY to new announcement @ Vuetify's discord")
      })
      .catch(err => console.log(err))
  }


  if (message.author.bot) return;
  
});







// Start the bot
bot.login(config.token)
  .then(() => console.log("-> Bot loged in!"))
  .catch(err => console.log(err))

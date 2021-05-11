console.log('quack quack');

require("dotenv").config();


const fetch = require('node-fetch');
const Discord = require('discord.js');
const client = new Discord.Client();        //
client.login(process.env.BOTTOKEN); 



client.on('ready', readyDiscord);           //
/* event handler */
function readyDiscord() {                   //
    console.log('Bot Ready!');
}

const commandHandler = require("./commands.js")    //assigns const commandHandler to file commands.js

client.on('message', commandHandler);           //when client receives a message event: command handler






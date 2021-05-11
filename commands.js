
const gif = require("./commands/gif.js");                   //imports the commands to use
const quack = require("./commands/quack.js");
const weather = require("./commands/weather.js");

const commands = { quack, gif , weather};               


module.exports = async function (msg) {   //exports this function to bot.js when commandHandler i scalled
    console.log(msg.content);
    if (msg.channel.id == '841138419589447680') {

        let tokens = msg.content.split(" ");    // msg.content.split creates an array with elements from msg.content split by " "(spaces)
        
        let command = tokens.shift();           // tokens.shift() = returns frist element of array so we can check what the command is

        if (command.charAt(0) === "!"){         // checks 1st char to make sure it's a !
            command = command.substring(1);     
            commands[command](msg, tokens);     // from const commands run command with msg as message and toekn as args
            
        }

    }
};
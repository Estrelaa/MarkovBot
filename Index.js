const Discord = require('discord.js');
const Config = require('./Config/Config.json');

const client = new Discord.Client();
const BotToken = Config[0].BotToken;

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	console.log(message.content);
});

client.login(BotToken);

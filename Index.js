const Discord = require('discord.js');
const fs = require('fs');
const Config = require('./Config/Config.json');

const client = new Discord.Client();
const BotToken = Config[0].BotToken;


const MC = require('js-markov');
const markov = new MC();

const MessageToUse = fs.readFileSync('./src/MessagesToUse.txt', 'utf8').split(/\r?\n/);

MessageToUse.forEach(element => markov.addStates(element));

markov.train();

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
    let MessageToSend = '';
    if (message.content === '/gaytalk') {
        for (i = 0; i < 25; i++) {
            for (j = 0; j < Math.floor(Math.random() * 15) + 1; j++) {
                MessageToSend = MessageToSend + markov.generateRandom(150) + ' ';
            }
            message.channel.send(MessageToSend);
            message.channel.send('------------------');
            MessageToSend = '';
        }
        message.channel.send('Done!');
      }
    });

client.login(BotToken);

import dotenv from 'dotenv';
dotenv.config();

import { Bot } from 'grammy';
const bot = new Bot(process.env.TOKEN || '');

console.log(process.env.TOKEN);

bot.command('start', (ctx) => ctx.reply('Welcome! Up and running.'));
bot.on('message', (ctx) => ctx.reply('Got another message!'));

console.log('Bot is running...');
bot.start();

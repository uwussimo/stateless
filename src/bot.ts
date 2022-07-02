import dotenv from 'dotenv';
dotenv.config();

import { Bot } from 'grammy';
import { start } from './commands/start/start';
const bot = new Bot(process.env.TOKEN || '');

bot.use(start);
bot.on('message', (ctx) => ctx.reply('Got another message!'));

console.log('Bot is running...');
bot.start();

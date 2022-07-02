import dotenv from 'dotenv';
dotenv.config();

import { Bot, Context, session, SessionFlavor } from 'grammy';
import { SessionData } from './interface/Session.interface';
import { start } from './commands/start/start';

// Define the session structure.

type MyContext = Context & SessionFlavor<SessionData>;
const bot = new Bot<MyContext>(process.env.TOKEN || ''); // <-- put your bot token between the ""

bot.use(
  session({
    initial: () => ({ language: 'uz' }),
    // storage: freeStorage<SessionData>(bot.token),
  })
);

bot.use(start);
bot.on('message', (ctx) => ctx.reply('Got another message!'));

console.log('Bot is running...');
bot.start();

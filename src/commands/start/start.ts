import { Composer } from 'grammy';
import { langKeyboard, languageKeyboard } from './updateLanguage';
export const start = new Composer();

start.use(langKeyboard);
start.command('start', (ctx) => {
  ctx.reply("Hello we'lcome to our bot!  Please select the language", {
    reply_markup: languageKeyboard,
  });
});

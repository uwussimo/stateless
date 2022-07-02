import { Composer } from 'grammy';
import { langKeyboard, languageKeyboard } from './updateLanguage';
import { i18n } from './../../translations/';
export const start = new Composer();

start.command('start', (ctx: any) => {
  if (ctx.session.stage == 'language') {
    ctx.reply(i18n(ctx.session.language).WELCOME_MESSAGE, {
      reply_markup: languageKeyboard,
    });
  }
});
start.use(langKeyboard);

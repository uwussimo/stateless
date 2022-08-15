import { Composer } from 'grammy';
import { langKeyboard, languageKeyboard } from './updateLanguage';
import { i18n } from './../../translations/';
import { register } from './register/register';
export const start = new Composer();

start.command('start', (ctx: any) => {
  if (ctx.session.stage == 'language') {
    ctx.reply(i18n(ctx.session.language).CHOOSE_LANGUAGE, {
      reply_markup: languageKeyboard,
    });
  }
});
start.use(langKeyboard);
start.use(register);

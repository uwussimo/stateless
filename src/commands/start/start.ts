import { Composer } from 'grammy';
import { langKeyboard, languageKeyboard } from './updateLanguage';
import { i18n } from './../../translations/';
export const start = new Composer();

start.command('start', (ctx) => {
  ctx.reply(
    ctx?.from?.language_code == 'en'
      ? i18n.english.WELCOME_MESSAGE
      : i18n.uzbek.WELCOME_MESSAGE,
    {
      reply_markup: languageKeyboard,
    }
  );
});
start.use(langKeyboard);

import { InlineKeyboard, Composer, Keyboard } from 'grammy';
import { language } from 'src/interface/types/language.type';
import { i18n } from './../../translations/';
const langKeyboard = new Composer();

const languageKeyboard = new InlineKeyboard()
  .text('🇺🇿 Uzbek', 'uzbek')
  .text('🇺🇸 English', 'english')
  .text('🇷🇺 Russian', 'russian');

const phoneKeyboard = (lang: language) => {
  return new Keyboard().requestContact(i18n(lang).PHONE_NUMBER_BUTTON);
};

const changeLanguage = async (ctx: any) => {
  ctx.session.stage = 'register';
  await ctx.reply(i18n(ctx.session.language).SELECTED_LANGUAGE);
  await ctx.reply(i18n(ctx.session.language).SEND_PHONE_NUMBER, {
    reply_markup: {
      keyboard: phoneKeyboard(ctx.session.language).build(),
      resize_keyboard: true,
      one_time_keyboard: true,
      remove_keyboard: true,
    },
  });
  await ctx.deleteMessage();
};

langKeyboard.callbackQuery('uzbek', async (ctx: any) => {
  ctx.session.language = 'uz';
  changeLanguage(ctx);
});
langKeyboard.callbackQuery('english', async (ctx: any) => {
  ctx.session.language = 'en';
  changeLanguage(ctx);
});
langKeyboard.callbackQuery('russian', async (ctx: any) => {
  ctx.session.language = 'ru';
  changeLanguage(ctx);
});

export { languageKeyboard, langKeyboard };

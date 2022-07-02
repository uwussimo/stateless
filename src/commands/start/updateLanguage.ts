import { InlineKeyboard, Composer } from 'grammy';
const langKeyboard = new Composer();

const languageKeyboard = new InlineKeyboard()
  .text('🇺🇿 Uzbek', 'uzbek')
  .text('🇺🇸 English', 'english')
  .text('🇷🇺 Russian', 'russian');

langKeyboard.callbackQuery('uzbek', async (ctx: any) => {
  ctx.session.language = 'uz';
  await ctx.reply("Siz o'zbek tilini tanladingiz!");
  await ctx.deleteMessage();
});
langKeyboard.callbackQuery('english', async (ctx: any) => {
  ctx.session.language = 'en';
  await ctx.reply('You have chosen English!');
  await ctx.deleteMessage();
});
langKeyboard.callbackQuery('russian', async (ctx: any) => {
  ctx.session.language = 'ru';
  await ctx.reply('Вы выбрали русский язык!');
  await ctx.deleteMessage();
});

export { languageKeyboard, langKeyboard };

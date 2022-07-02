import { InlineKeyboard, Composer } from 'grammy';
const langKeyboard = new Composer();

const languageKeyboard = new InlineKeyboard()
  .text('🇺🇿 Uzbek', 'uzbek')
  .text('🇺🇸 English', 'english');

langKeyboard.callbackQuery('uzbek', async (ctx: any) => {
  ctx.session.language = 'uz';
  await ctx.reply('You were curious, Uzbek!' + ctx.session.language);
});
langKeyboard.callbackQuery('english', async (ctx: any) => {
  ctx.session.language = 'en';
  await ctx.reply('You were curious, English!' + ctx.session.language);
});

export { languageKeyboard, langKeyboard };

import { InlineKeyboard, Composer } from 'grammy';
const langKeyboard = new Composer();

const languageKeyboard = new InlineKeyboard()
  .text('🇺🇿 Uzbek', 'uzbek')
  .text('🇺🇸 English', 'english')
  .row()
  .switchInline('Send music to friends');

langKeyboard.callbackQuery('uzbek', async (ctx) => {
  await ctx.answerCallbackQuery({
    text: 'You were curious, Uzbek!',
  });
});
langKeyboard.callbackQuery('english', async (ctx) => {
  await ctx.answerCallbackQuery({
    text: 'You were curious, English!',
  });
});

export { languageKeyboard, langKeyboard };

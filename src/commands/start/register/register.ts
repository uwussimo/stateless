import { Composer } from 'grammy';
import { i18n } from './../../../translations/index';

const register = new Composer();

register.on(':contact', (ctx: any) => {
  console.log(ctx.message.contact);
  ctx.session.phone_number = ctx.message.contact.phone_number;
  ctx.session.stage = 'menu';
  ctx.reply(i18n(ctx.session.language).REG_SUCCESS, {
    reply_to_message_id: ctx.msg.message_id,
  });
});

export { register };

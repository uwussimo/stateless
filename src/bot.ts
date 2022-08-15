import dotenv from "dotenv";
dotenv.config();

import { Bot, Context, session, SessionFlavor } from "grammy";
import { SessionData } from "./interface/Session.interface";
import { start } from "./commands/start/start";
import { i18n } from "./translations/index";

// Define the session structure.

type MyContext = Context & SessionFlavor<SessionData>;
const bot = new Bot<MyContext>(process.env.TOKEN || ""); // <-- put your bot token between the ""

bot.use(
  session({
    initial: () => ({ stage: "language", language: "uz" }),
  })
);

bot.use(start);
bot.on("message", (ctx: any) =>
  ctx.reply(i18n(ctx.session.language).WELCOME_MESSAGE, {
    parse_mode: "Markdown",
  })
);

console.log("Bot is running...");
bot.start();

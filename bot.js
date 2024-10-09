import { Telegraf } from "telegraf";
import { message } from "telegraf/filters";

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => {
  ctx.reply("Wecome buddy!");
});

bot.on(message("text"), (ctx) => {
  const userMsg = ctx.update.message.text.toLowerCase();
  const userName = ctx.update.message.from.first_name;
  if (userMsg.includes("hi")) {
    ctx.reply(`Welcome Back, ${userName}, how\'s going!`);
  } else if (userMsg === "kaisa hai") {
    ctx.reply(`Mai Badiya hu ${userName}, tum batao kaise ho!`);
  } else if (userMsg === "ok") {
    ctx.reply("Yup!");
  }
});

bot.launch();

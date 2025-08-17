import { Client, Events, GatewayIntentBits } from "discord.js";
require("dotenv").config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

// can use custom logic to reply custom messages only (eg. if it includes hello/hi)
client.on("messageCreate", (message) => {
  // message only if it's sent by an user
  if (message.author.bot) return;

  message.reply({
    content: "Hi from bot",
  });
});

client.login(process.env.TOKEN);

// can define custom logic to handle the custom command
client.on("interactionCreate", (interaction) => {
  console.log(interaction);
  interaction.reply("Pong!");
});

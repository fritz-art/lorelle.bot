require("dotenv").config();

const { REST, Routes, SlashCommandBuilder } = require("discord.js");

const commands = [
  /*new SlashCommandBuilder()
    .setName("hidalgo-panel")
    .setDescription("Send Hidalgo role request panel"),*/

  new SlashCommandBuilder()
    .setName("root")
    .setDescription("Lorelle Root command"),

  ].map(command => command.toJSON());

const rest = new REST({ version: "10" }).setToken(process.env.TOKEN);

(async () => {
  try {

    console.log("⏳ Registering slash commands...");

    await rest.put(
      Routes.applicationCommands(process.env.CLIENT_ID),
      { body: commands }
    );

    console.log("✅ Slash commands registered.");

  } catch (error) {
    console.error(error);
  }
})();
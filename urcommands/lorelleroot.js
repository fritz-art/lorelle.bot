const { Events } = require("discord.js");

module.exports = (client) => {

  client.on(Events.InteractionCreate, async (interaction) => {

    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === "root") {

      await interaction.reply({
        content: "Lorelle Root is Owen PsycHoes Lorelle!"
      });

    }

  });

};
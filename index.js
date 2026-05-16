require("dotenv").config();

const {
  Client,
  GatewayIntentBits,
  Events,
  Partials
} = require("discord.js");


/* 🌸 discord client setup ni mami rora */


const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ],

  partials: [
    Partials.Message,
    Partials.Channel
  ]
});


/* 🌸 loading member logs ni mami rora */


try {

  require("./logs/memberLogs")(client);

  console.log(
    "✅ memberLogs loaded successfully"
  );

  require("./lorelleroot")(client);
  
  console.log(
    "✅ lorelleroot loaded successfully"
  );



} catch (error) {

  console.error(
    "❌ failed to load memberLogs"
  );

  console.error(error);
}


/* 🌸 ready event ni mami rora */


client.once(Events.ClientReady, () => {

  console.log("=================================");

  console.log(
    `✅ logged in as ${client.user.tag}`
  );

  console.log(
    "lorelle now online"
  );

  console.log("=================================");

});


/*token checker ni Lorelle */


if (!process.env.TOKEN) {

  console.error(
    "❌ TOKEN is missing inside the .env file"
  );

  process.exit(1);
}


/* login system ni Lorelle */


client.login(process.env.TOKEN);
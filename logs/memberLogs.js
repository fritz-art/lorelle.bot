const { Events, EmbedBuilder } = require("discord.js");
const config = require("../config.json");

// 🧠 account age formatter
function getAccountAge(user) {
  const diff = Date.now() - user.createdAt;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const years = Math.floor(days / 365);
  const months = Math.floor((days % 365) / 30);

  return `${years}y ${months}m`;
}

module.exports = (client) => {

  client.on(Events.GuildMemberAdd, async (member) => {
    try {
      // ✅ CONFIG NI LOOFIN.EXE
    
      const channel = member.guild.channels.cache.get(config.logChannels.member);
      if (!channel) return console.log("❌ Welcome channel not found");

      const user = member.user;
      const accountAge = getAccountAge(user);

      const embed = new EmbedBuilder()
        .setColor("#99ccff")

        .setAuthor({
          name: "𝕷𝖔𝖗𝖊𝖑𝖑𝖊 𝕲𝖆𝖙𝖊",
          iconURL: member.guild.iconURL({ dynamic: true }) || undefined
        })

        .setThumbnail(user.displayAvatarURL({ dynamic: true }))

        .setDescription(
        `Welcome to **𝕷𝖔𝖗𝖊𝖑𝖑𝖊 Family** ${user}

        **User's Details:**
        > Discord User: ${user}
        > Account Age: ${accountAge}

        You’ve stepped into the 𝕷𝖔𝖗𝖊𝖑𝖑𝖊 Family where loyalty is everything and respect is earned.
        Carry the name with pride. Make your presence known.`
        )

        .setImage("https://cdn.discordapp.com/attachments/1505411224760750202/1505411339529486336/nhhn757.gif?ex=6a0a8710&is=6a093590&hm=69b83c8734cec274a43d986985553f3303b425fd48db730401f1d95f3e53cbff&")

        .setFooter({
          text: "Owen & Gwen Bloodline"
        })

        .setTimestamp();

      channel.send({ embeds: [embed] });

    } catch (err) {
      console.error("Welcome error:", err);
    }
  });

};

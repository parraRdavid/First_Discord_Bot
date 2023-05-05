//Allows for all files to access the .env file/access the token within it
require("dotenv").config();

//Deconstruct, imports the client, and IntentsBitField classes from the discord.js library
const { Client, IntentsBitField } = require("discord.js");

//Creates the new client
const myClient = new Client({
  //Intents are a set a permissions that the bot can use
  intents: [
    IntentsBitField.Flags.Guilds, //Joins server
    IntentsBitField.Flags.GuildMembers, //Access to memebers in the server
    IntentsBitField.Flags.GuildMessages, //Access to listen to messages
    IntentsBitField.Flags.MessageContent, //Access to read messages
  ],
});

//Handles /Command actions
myClient.on("interactionCreate", (interaction) => {
  //if the command is not entered, return
  if (!interaction.isChatInputCommand()) return;

  //if command is /today, return the time and date
  if (interaction.commandName === "today") {
    
    //formats and obtains the current time, date using the Date object
    var date = new Date();
    var current_time_date = date.toLocaleDateString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
    //allows the bot to respond with the current time/date
    interaction.reply(current_time_date);
  }

  //if command is /troll, return rick roll link
  if (interaction.commandName === "troll") {
    var link = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

    //allows the bot to respond with the current link
    interaction.reply(link);
  }
});

//Allows the bot to login into the server using the KEY
myClient.login(process.env.Token);

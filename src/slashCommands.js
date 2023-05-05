require("dotenv").config();

//Deconstruct, imports the REST, and Routes classes from the discord.js library
const { REST, Routes } = require("discord.js");

//Creates Commands Array
const commands = [
  //Creates "today" command name and description
  {
    name: "today",
    description: "Replies with current DATE and TIME",
  },
  //Creates "troll" command name and description
  {
    name: "troll",
    description: "Find Out",
  },
];

const rest = new REST({ version: "10" }).setToken(process.env.Token);

(async () => {
  try {
    await rest.put(
      Routes.applicationGuildCommands(
        process.env.CLIENT_ID,
        process.env.GUILD_ID
      ),
      { body: commands }
    );
  } catch (error) {
    console.log(`There was an error: ${error}`);
  }
})();


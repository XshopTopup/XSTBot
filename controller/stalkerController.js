const axios = require('axios');
const fs = require('fs')
const chalk = require('chalk')
require('../settings');

async function fetchDataFromURL(action, target, server = '')  {
  try {
    const url = `${apiUri}stalker/${action}?userid=${target}&zone=${server}&api_key=${api_key}`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching data from URL: ${error.message}`);
  }
}


module.exports = fetchDataFromURL;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update ${__filename}`));
  delete require.cache[file];
  require(file);
});

const fs = require('fs');
const chalk = require('chalk');
const ewalet = require('../lib/ewalet');
require('../settings');
const stalkVA = (text, reply, m, aksi) => {
  const va = text.split(' ');
  if (!text) return reply('Nomernya mana?');
  const requestData = {
    api_key: api_key,
    action: aksi,
    hp: va[0]
  };

  ewalet(requestData)
  .then(data => {
    console.log(data);
    const teks = `${data.message}
Nomor: ${data.data.username}`
reply(teks)
  })
  .catch(error => {
    console.error('There was a problem with the axios operation:', error);
  });
};

const stalkpln = (text, reply, m, aksi) => {
  const va = text.split(' ');
  if (!text) return reply('Nomernya mana?');
  const requestData = {
    api_key: api_key,
    action: aksi,
    hp: va[0]
  };

  ewalet(requestData)
  .then(data => {
    console.log(data);
   const teks = `${data.data.nama_pelanggan}
Nomor: ${data.data.no_pelanggan}
Segment Power: ${data.data.daya}
ID Pelanggan: ${data.data.id_pelanggan}`;
reply(teks)
  })
  .catch(error => {
    console.error('There was a problem with the axios operation:', error);
  });
};

module.exports = { stalkVA, stalkpln };

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update ${__filename}`));
  delete require.cache[file];
  require(file);
});

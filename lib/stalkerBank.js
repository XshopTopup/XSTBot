const axios = require('axios');
require('../settings');

const getBankCode = (bankName, target) => {
  const apiUrl = `${apiUri}bank/${encodeURIComponent(bankName)}/${target}/${dimensionLicense}`;
  
  return axios.get(apiUrl)
    .then(response => {
        return response.data;
    })
    .catch(error => {
      return Promise.reject(error);
    });
};

const ewalet = (requestData) => {
  const apiUrl = apiUri + 'ewalet';
  return axios.post(apiUrl, requestData) // Mengembalikan promise dari axios.post
    .then(response => {
      return response.data;
    })
    .catch(error => {
      return Promise.reject(error); // Mengembalikan promise yang ditolak dengan error
    });
};

const plnToken = (requestData) => {
  const apiUrl = apiUri + 'pln';
  return axios.post(apiUrl, requestData)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      throw error; // Menggunakan throw untuk melemparkan error agar dapat ditangkap di tempat pemanggilan
    });
};

module.exports = { ewalet, plnToken, getBankCode};

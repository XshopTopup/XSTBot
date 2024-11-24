const axios = require('axios');
require('../settings');

const ewalet = (requestData) => {
  const { hp, api_key, action } = requestData; 
  const apiUrl = `${apiUri}ewalet/${action}?hp=${hp}&api_key=${api_key}`;

  return axios.get(apiUrl) 
    .then(response => {
      return response.data;
    })
    .catch(error => {
      return Promise.reject(error);
    });
};

module.exports = ewalet;


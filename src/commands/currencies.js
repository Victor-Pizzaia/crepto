const services = require('../services/coingecko');

async function currencies() {
  const data = await services.getCurrencies();
  console.log(data);
}

module.exports = currencies;

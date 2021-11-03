const service = require('../services/coingecko');
const chalk = require('chalk');

async function ping() {
  const data = await service.getPing();
  console.log(chalk.blue(data));
}

module.exports = ping;

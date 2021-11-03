const service = require('../services/coingecko');
const chalk = require('chalk');

async function coinPrice(coins, currencie) {
  const data = await service.getCoinPrice(coins, currencie);
  if (Object.keys(data).length < 1) {
    console.log(chalk.red('Moeda não encontrada'));
    return;
  }
  Object.entries(data).forEach(coin => {
    const c = coin[0];
    const val = coin[1];
    console.log(`${chalk.yellow(c)}: ${chalk.green(val[currencie])}`);
  });
}

module.exports = coinPrice;

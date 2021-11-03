const service = require('../services/coingecko');
const chalk = require('chalk');

async function calc(coin, quant, currencie = 'brl') {
  const data = await service.getCoinPrice(coin, currencie);
  if (Object.keys(data).length < 1) {
    console.log(chalk.red('Moeda não encontrada'));
    return;
  }
  const [[c, val]] = Object.entries(data);
  const valTot = val[currencie] * quant;
  console.log(
    `${chalk.yellow(c)}: ${chalk.magenta(valTot)} ${chalk.green(currencie)}`
  );
}

module.exports = calc;

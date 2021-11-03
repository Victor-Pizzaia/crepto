#!/usr/bin/env node

const { program } = require('commander');
const package = require('../package.json');
const { ping, coinPrice, currencies, calc } = require('./commands');

program.version(package.version);

program
  .command('ping')
  .description('Retorna se a cli conseguiu chegar ao coingecko')
  .action(ping);

program
  .command('currencies')
  .description('Retorna uma lista das moedas suportadas')
  .action(currencies);

program
  .command('value <coins> <currencie>')
  .description(
    'Retorna o valor das criptos. Uso: crepto value bitcoin,cardano brl'
  )
  .action(coinPrice);

program
  .command('calc <coin> <quant> [currencie]')
  .description(
    'Retorna o valor que você tem de uma cripto. Uso: crepto calc bitcoin 2 brl'
  )
  .action(calc);

program.parse(process.argv);

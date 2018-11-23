/* eslint-disable import/no-extraneous-dependencies, no-console */
require('dotenv').config();
const chalk = require('chalk');

const Builder = require('./Builder.js');
const config = require('./config.js');

function info(msg) {
  console.log(chalk.blueBright(msg));
}

function run() {
  const builder = new Builder(config);

  info('Removing old gen2 version...');
  builder.removeOldBuild();

  info('Looking for gen2 components...');
  builder.findComponents();

  info('Syncronizing component list with Contenful...');
  builder.syncWithContentful();

  info('Build gen2 BrandTheme component');
  builder.buildBrandThemeComponent();

  info('Building gen2 components...');
  builder.buildComponents();

  info('Moving src');
  builder.copySrc();

  info('Moving gen2 aem wrapper components...');
  builder.moveDmpDependencies();
}

module.exports = run;

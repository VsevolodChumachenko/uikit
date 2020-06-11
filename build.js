module.exports = function () {
  process.env.NODE_ENV = 'production';

  var ora = require('ora');
  var path = require('path');
  var chalk = require('chalk');
  var shell = require('shelljs');
  var webpack = require('webpack');
  var webpackConfig = require('./webpack.config');

  var spinner = ora('building bundle...');
  spinner.start();

  shell.rm('-rf', './dist');
  shell.mkdir('-p', './dist');

  webpack(webpackConfig, function (err, stats) {
    spinner.stop();
    if (err) throw err;
    process.stdout.write(
      stats.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false,
      }) + '\n\n'
    );

    console.log(chalk.cyan('  Build complete.\n'));
  });
};

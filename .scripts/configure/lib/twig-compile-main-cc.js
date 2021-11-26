const fs = require('fs');
const path = require('path');

const colors = require('colors');

const ewrap = require('./utils-error-wrap');
const twigCompile = require('./twig-compile');

/**
 * Will configure Visual Studio Code .vscode/launch.json file
 *
 * Modify at your own risk.
 *
 * @param {object} options
 */
module.exports = (options) => {
  ewrap(() => {
    const filePath = path.join(__dirname, '..', '..', '..', 'src', 'main.cc');
    let filePathExists = false;
    try {
      filePathExists = fs.statSync(filePath).isFile();
    } catch (e) {}

    if (!filePathExists || options.overwriteMainCc) {
      console.debug(`Configuring ${filePath} ...`.brightBlue);
      fs.writeFileSync(filePath, twigCompile('main.cc', {...options}));
    } else {
      console.debug(`Configuring ${filePath} was skipped. File exists.`);
    }
  });
};

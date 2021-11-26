const fs = require('fs');
const path = require('path');

const colors = require('colors');

const ewrap = require('./utils-error-wrap');
const supportedVscCppModules = require('./supported-vsc-cpp-modules');

/**
 * Will configure Visual Studio Code .vscode/launch.json file
 *
 * Modify at your own risk.
 *
 * @param {object} options
 */
module.exports = (options) => {
  ewrap(() => {
    const filePath = path.join(__dirname, '..', '..', '..', '.vscode', 'settings.json');
    console.log(`Configuring ${filePath} ...`.brightBlue);
    const data = require('../settings.json');

    delete data['C_Cpp.intelliSenseEngine'];
    delete data['[cpp]']['editor.defaultFormatter'];

    // if (options.vscodeCppModule === supportedVscCppModules.CPPTOOLS) {
    // }

    if (options.vscodeCppModule === supportedVscCppModules.VSCODE_CLANGD) {
      data['C_Cpp.intelliSenseEngine'] = 'Disabled';
      data['[cpp]'] = {
        'editor.defaultFormatter': 'llvm-vs-code-extensions.vscode-clangd',
      };
    }

    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  });
};

const fs = require('fs');
const path = require('path');

const bp = require('./utils-back-path');
const ewrap = require('./utils-error-wrap');
const packageJson = require('./package-json');
const supportedNodeLibs = require('./supported-node-libs');
const utilsPkgLastVersion = require('./utils-pkg-last-version');

/**
 * Will write down changes made to packageJson object
 *
 * Modify at your own risk.
 *
 * @param {object} options
 */
module.exports = async (options) => {
  ewrap(async () => {
    const filePath = path.join(__dirname, ...bp(3), 'package.json');
    console.log(`Configuring ${filePath} ...`.brightBlue);

    switch (true) {
      case options.api === supportedNodeLibs.nan:
        delete packageJson.dependencies['node-addon-api'];
        packageJson.dependencies['nan'] = await utilsPkgLastVersion('nan');
        break;
      case options.api === supportedNodeLibs.napiC:
        delete packageJson.dependencies['nan'];
        delete packageJson.dependencies['node-addon-api'];
        break;
      default:
        delete packageJson.dependencies['nan'];
        packageJson.dependencies['node-addon-api'] = await utilsPkgLastVersion('node-addon-api');
        break;
    }

    fs.writeFileSync(filePath, JSON.stringify(packageJson, null, 2));
  });
};

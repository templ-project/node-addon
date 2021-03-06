const fs = require('fs');
const path = require('path');

const nodeLibLocationCmake = require('./cmake-js-lib-location');
const nodeLibLocationGyp = require('./node-gyp-lib-lication');
const packageJsonContainsNan = require('./package-json-contains-nan');
const packageJsonContainsNapi = require('./package-json-contains-napi');
const pathIsValid = require('./utils-path-is-valid');
const supportedBuildSystems = require('./supported-build-systems');
const supportedIdes = require('./supported-ides');
const nodeModulesNanFolder = require('./node-modules-nan-folder');
const nodeModulesNapiFolder = require('./node-modules-napi-folder');
const supportedNodeLibs = require('./supported-node-libs');

/**
 * Will calculate list of libraries that need included in the C++ config files.
 *
 * Modify at your own risk.
 *
 * @param {object} options
 */
module.exports = (options) => {
  let folders = ['', 'openssl']
    .map((item) => [item, path.join(nodeLibLocationGyp[process.platform], item)])
    .reduce((acc, item) => [].concat(acc, item), []);

  if (options.buildSystem === supportedBuildSystems.CMAKE || options.ide === supportedIdes.CLION) {
    folders = ['', 'openssl']
      .map((item) => [item, path.join(nodeLibLocationCmake[process.platform], item)])
      .reduce((acc, item) => [].concat(acc, item), []);
  }

  // will be dependent on node-gyp files
  // if (options.buildSystem === supportedBuildSystems.XMAKE) {}

  if (options.api === supportedNodeLibs.nan || (!options.api && packageJsonContainsNan())) {
    folders.push(nodeModulesNanFolder);
  }

  if (options.api === supportedNodeLibs.napiCpp || (!options.api && packageJsonContainsNapi())) {
    folders.push(nodeModulesNapiFolder);
  }

  // will be dependent on node-gyp files
  if (options.buildSystem === supportedBuildSystems.XMAKE) {
    folders = folders.map((item) => item.replace(/\\/g, '/'));
  }

  console.debug(`Library folders: ${JSON.stringify(folders)}`.gray);

  return folders.filter(pathIsValid);
};

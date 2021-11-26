/**
 * Node Libraries List
 *
 * nan: C++-based abstraction between Node and direct V8 APIs.
 * Node-API: C-based API guaranteeing ABI stability across different node versions as well as JavaScript engines. (Node-API was previously known as N-API.)
 * node-addon-api: header-only C++ wrapper classes which simplify the use of the C-based Node-API.
 *
 * @link https://github.com/nodejs/node-addon-examples/blob/main/README.md
 */
module.exports = {
  nan: 'nan',
  napiC: 'napi', // napi @TODO: not yet implemented
  napiCpp: 'node-addon-api', // node-addon-api
};

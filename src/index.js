const main = require('bindings')('main');

/*******************************************************************************
 * Document here your exported functions.
 * Otherwise, `npm run docs` will not function.
 ******************************************************************************/

/**
 * Hello *! function
 * @param {string} name
 * @return {string}
 */
function hello(name) {
  return main.hello(name);
}

module.exports = {hello};

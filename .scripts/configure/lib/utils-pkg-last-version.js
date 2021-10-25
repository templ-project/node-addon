const npmview = require('npmview');

module.exports = async (name) => {
  console.log(`Fetching ${name} package latest version ...`.gray);
  return new Promise((resolve, reject) => {
    npmview(name, (err, version, info) => {
      if (err) {
        reject(err);
        return;
      }
      console.log(version.gray);
      resolve(version);
    });
  });
};

const {getLatest} = require('npm-latest');

module.exports = async (name) => {
  console.log(`Fetching ${name} package latest version ...`.gray);
  const {version} = await getLatest(name);
  console.log(version.gray);
  return version;
};

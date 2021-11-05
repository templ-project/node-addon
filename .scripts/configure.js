const {Command} = require('commander');

const supportedBuildSystems = require('./configure/lib/supported-build-systems');
const supportedCStandards = require('./configure/lib/supported-c-standards');
const supportedCppStandards = require('./configure/lib/supported-cpp-standards');
const supportedNodeLibs = require('./configure/lib/supported-node-libs');
const supportedIdes = require('./configure/lib/supported-ides');
const bsConfigure = require('./configure/lib/bs-configure');
const vscodeConfigure = require('./configure/lib/vscode-configure');
const packageJsonConfigure = require('./configure/lib/package-json-configure');
const twigCompileCMakeListsTxt = require('./configure/lib/twig-compile-c-make-lists-txt');
const twigCompileMainCc = require('./configure/lib/twig-compile-main-cc');
const errorCodes = require('./configure/lib/error-codes');
// const {
//   supportedBuildSystems,
//   supportedCStandards,
//   supportedCppStandards,
//   supportedIdes,

//   bsConfigure,
//   vscodeConfigure,
//   packageJsonConfigure,
//   twigCompileCMakeListsTxt,
// } = require('./configure/lib');

/**
 * Run Script
 */
const program = new Command();
program
  .version('0.0.1')
  .option(
    '-a, --api <nodeApi>',
    `NodeJs library to use: ${Object.values(supportedNodeLibs)}`,
    supportedNodeLibs.napiCpp,
  )
  .option(
    '-x, --build-system <buildSystem>',
    `configure a build system: ${Object.values(supportedBuildSystems).join(', ')}`,
    supportedBuildSystems.GYP,
  )
  .option('-e, --ide <ide>', `configure an IDE: ${Object.values(supportedIdes).join(', ')}`, supportedIdes.VSCODE)
  .option(
    '-ucl, --vscode-use-clangd',
    'configure VSCode to use CLang plugin instead of the default Microsoft Intellisense',
  )
  .option('-omc, --overwrite-main-cc', 'overwrite main.cc content with default statndard code from template')
  .option(
    '-cs, --c-standard <cStandards>',
    `C Standard (set the most important as last value): ${Object.keys(supportedCStandards)}`,
    (value, previous) => [...new Set(previous.concat([value]))],
    [supportedCStandards.c11],
  )
  .option(
    '-cpps, --cpp-standard <cppStandards>',
    `C++ Standard (set the most important as last value): ${Object.keys(supportedCppStandards)}`,
    (value, previous) => [...new Set(previous.concat([value]))],
    [supportedCppStandards.cxx11],
  );

program.parse(process.argv);
const options = program.opts();
const standards = Object.values(supportedCppStandards);

// console.log({
//   options,
//   version: process.version.split('.').shift().substring(1),
//   node16PlusNanCppStandards:
//     standards.indexOf([...options.cppStandard].pop()) < standards.indexOf(supportedCppStandards.cxx17),
// });
// process.exit(0);

if (
  options.api === supportedNodeLibs.nan &&
  process.version.split('.').shift().substring(1) >= 16 &&
  standards.indexOf([...options.cppStandard].pop()) < standards.indexOf(supportedCppStandards.cxx17)
) {
  console.error(
    `For NodeJs 16+, NAN Api requires C++17 or above. Please adjust your C++ standard using ${'-cpps'.green} ${
      '/'.red
    } ${'--cpp-standard'.green}`.red + ' argument.'.red,
  );
  process.exit(errorCodes.InvalidNanCppStandardForNode16AndAbove);
}

(async () => {
  twigCompileMainCc(options);

  bsConfigure(options);
  await vscodeConfigure(options);

  /**
   * Configure CLion
   */
  if (options.ide === supportedIdes.CLION) {
    twigCompileCMakeListsTxt(options);
  }

  await packageJsonConfigure(options);
})();

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
    `[NOT IMPLEMENTED] C Standard (set the most important as 1st value): ${Object.keys(supportedCStandards)}`,
    (value, previous) => previous.concat([value]),
    [supportedCStandards.c11],
  )
  .option(
    '-cpps, --cpp-standard <cppStandards>',
    `[NOT IMPLEMENTED] C++ Standard (set the most important as 1st value): ${Object.keys(supportedCppStandards)}`,
    (value, previous) => previous.concat([value]),
    [supportedCppStandards.cxx11],
  );

program.parse(process.argv);
const options = program.opts();

// console.log(options);
// process.exit(0)

(async () => {
  bsConfigure(options);
  await vscodeConfigure(options);

  /**
   * Configure CLion
   */
  if (options.ide === supportedIdes.CLION) {
    twigCompileCMakeListsTxt(options);
  }

  twigCompileMainCc(options);

  await packageJsonConfigure(options);
})();

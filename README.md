# Templ Node.js Addon

[![Node.js CI](https://github.com/templ-project/node-addon/actions/workflows/node.js.yml/badge.svg)](https://github.com/templ-project/node-addon/actions/workflows/node.js.yml)

<!-- https://hits.seeyoufarm.com/ -->
[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Ftempl-project%2Fnode&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false)](https://hits.seeyoufarm.com)
[![Contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/templ-project/nodejs-addon-nan/issues)

![JSCPD](.jscpd/jscpd-badge.svg?raw=true)

<!-- [![TravisCI](https://travis-ci.org/templ-project/nodejs-addon-nan.svg?branch=master)](https://travis-ci.org/templ-project/nodejs-addon-nan) -->
<!-- CI Badges -->
<!-- [![CircleCI](https://circleci.com/gh/templ-project/nodejs-addon-nan.svg?style=shield)](https://circleci.com/gh/templ-project/nodejs-addon-nan) -->

[![Sonarcloud Status](https://sonarcloud.io/api/project_badges/measure?project=templ-project_nodejs-addon-nan&metric=alert_status)](https://sonarcloud.io/dashboard?id=templ-project_nodejs-addon-nan)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=templ-project_nodejs-addon-nan&metric=code_smells)](https://sonarcloud.io/dashboard?id=templ-project_nodejs-addon-nan)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=templ-project_nodejs-addon-nan&metric=sqale_rating)](https://sonarcloud.io/dashboard?id=templ-project_nodejs-addon-nan)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=templ-project_nodejs-addon-nan&metric=reliability_rating)](https://sonarcloud.io/dashboard?id=templ-project_nodejs-addon-nan)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=templ-project_nodejs-addon-nan&metric=security_rating)](https://sonarcloud.io/dashboard?id=templ-project_nodejs-addon-nan)

[![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=templ-project_nodejs-addon-nan&metric=ncloc)](https://sonarcloud.io/dashboard?id=templ-project_nodejs-addon-nan)
[![SonarCloud Coverage](https://sonarcloud.io/api/project_badges/measure?project=templ-project_nodejs-addon-nan&metric=coverage)](https://sonarcloud.io/component_measures/metric/coverage/list?id=templ-project_nodejs-addon-nan)
[![SonarCloud Bugs](https://sonarcloud.io/api/project_badges/measure?project=templ-project_nodejs-addon-nan&metric=bugs)](https://sonarcloud.io/component_measures/metric/reliability_rating/list?id=templ-project_nodejs-addon-nan)
[![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=templ-project_nodejs-addon-nan&metric=sqale_index)](https://sonarcloud.io/dashboard?id=templ-project_nodejs-addon-nan)
[![SonarCloud Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=templ-project_nodejs-addon-nan&metric=vulnerabilities)](https://sonarcloud.io/component_measures/metric/security_rating/list?id=templ-project_nodejs-addon-nan)

<!-- Donation Badges -->
[![Donate to this project using Patreon](https://img.shields.io/badge/patreon-donate-yellow.svg)](https://patreon.com/dragoscirjan)
[![Donate to this project using Paypal](https://img.shields.io/badge/paypal-donate-yellow.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=QBP6DEBJDEMV2&source=url)
<!--
[![Donate to this project using Flattr](https://img.shields.io/badge/flattr-donate-yellow.svg)](https://flattr.com/profile/balupton)
[![Donate to this project using Liberapay](https://img.shields.io/badge/liberapay-donate-yellow.svg)](https://liberapay.com/dragoscirjan)
[![Donate to this project using Thanks App](https://img.shields.io/badge/thanksapp-donate-yellow.svg)](https://givethanks.app/donate/npm/badges)
[![Donate to this project using Boost Lab](https://img.shields.io/badge/boostlab-donate-yellow.svg)](https://boost-lab.app/dragoscirjan/badges)
[![Donate to this project using Buy Me A Coffee](https://img.shields.io/badge/buy%20me%20a%20coffee-donate-yellow.svg)](https://buymeacoffee.com/balupton)
[![Donate to this project using Open Collective](https://img.shields.io/badge/open%20collective-donate-yellow.svg)](https://opencollective.com/dragoscirjan)
[![Donate to this project using Cryptocurrency](https://img.shields.io/badge/crypto-donate-yellow.svg)](https://dragoscirjan.me/crypto)
[![Donate to this project using Paypal](https://img.shields.io/badge/paypal-donate-yellow.svg)](https://dragoscirjan.me/paypal)
[![Buy an item on our wishlist for us](https://img.shields.io/badge/wishlist-donate-yellow.svg)](https://dragoscirjan.me/wishlist)
-->

<img alt="JavaScript Logo" src="https://github.com/templ-project/nodejs-addon-nanjs-addon-nan/blob/master/javascript.svg?raw=true" width="20%" align="right" />

<!-- Project Description Starts Here -->


> *Any fool can write code that a computer can understand. Good programmers write code that humans can understand.* – Martin Fowler

> **nodejs-addon** is a template project for developing Node.js addons using C/C++. 
> It includes support for formatting and linting both C/C++ and JavaScript code, 
> tools for assuring code quality as well as instructions to code further using two 
> of the most popular IDEs on the market. It can also be configured to use any of the 
> three C/C++ APIs provided by Node.js.
> 
> Please download it and adapt it as you see fit.

<!-- TOC -->

- [Templ Node.js Addon](#templ-nodejs-addon)
  - [Getting Started](#getting-started)
    - [Project Description](#project-description)
      - [Linters, Code Analysis, Formatters](#linters-code-analysis-formatters)
        - [Javascript](#javascript)
        - [C++](#c)
        - [Generic](#generic)
      - [Git Hooks](#git-hooks)
        - [pre-commit](#pre-commit)
        - [commit-msg](#commit-msg)
    - [Prerequisites / Dependencies](#prerequisites--dependencies)
        - [For Linux](#for-linux)
        - [For MacOS](#for-macos)
        - [For Windows](#for-windows)
      - [Known Issues / Troubleshooting](#known-issues--troubleshooting)
    - [Installation](#installation)
    - [Development](#development)
      - [Requirements](#requirements)
        - [VSCode Configuration](#vscode-configuration)
        - [CLion Configuration](#clion-configuration)
    - [Testing](#testing)
      - [Single Tests](#single-tests)
    - [Deployment](#deployment)
  - [Authors](#authors)
  - [Issues / Support](#issues--support)
  - [License](#license)

<!-- /TOC -->

## Getting Started

### Project Description

The template is trying to cover multiple build systems as 
* [node-gyp](https://github.com/nodejs/node-gyp) (default), using [Gyp](https://gyp.gsrc.io/) build system
* [cmake-js](https://www.npmjs.com/package/cmake-js), using [CMake](https://cmake.org/) build system
* [xmake](https://xmake.io/#/) *(under development)*

#### Linters, Code Analysis, Formatters

##### Javascript
- [dependency-cruiser](https://github.com/sverweij/dependency-cruiser) for code analisys, will check dependencies & how they're imported
- [prettier](https://prettier.io/) for code formatting
- [eslint](https://eslint.org/) for linting

##### C++

- [clang-format](https://clang.llvm.org/docs/ClangFormat.html) for code formatting
- [clang-tidy](https://clang.llvm.org/extra/clang-tidy/) for linting

##### Generic

- [jscpd](https://github.com/kucherenko/jscpd) for code analisys as copy paste detector
- [dependency-checker](https://github.com/jeremylong/DependencyCheck) (designed by [OWASP](https://owasp.org/www-project-dependency-check/)) for code analisys, will check dependencies & security

#### Git Hooks

Git hooks are configured using [husky](https://github.com/typicode/husky)


##### pre-commit

Found in `.husky/pre-commit`, script will run 
* `.scripts/configure.js` script, keeping your configuration stable, as well as 
* `ca` and `test` scripts from `package.json`. 

Please take a look in the `package.json` file and follow the two mentioned scripts to understand what they do and how they are called.

##### commit-msg

Found in `.husky/commit-msg`, script will run a [commitlint](https://commitlint.js.org) check. Please read more on the official page on how to customize *commitlint* config.

### Prerequisites / Dependencies

##### For Linux

- `git`, `gcc/g++`, `make`
- `clang-formatter` && `clang-tidy`
- Python 3.6 or above.
- Depending on the build system, please install: 
  - **NodeGyp**: All requirements are set as default in the above list.
  - **CMake**: `make`, `cmake`
  - **XMake**: `make`, `xmake`

> Do not forget NodeGyp is the main build system, so you need its requirements installed whatsoever.

```bash
# i.e ubuntu
PY_SUBVER=6 \
  sudo apt-get install -y \
    build-essential git make \
    python3.$PY_SUBVER \
    clang-format clang-tidy
# for CMake
sudo apt-get install cmake
# for XMake (see https://xmake.io/#/guide/installation)
bash <(curl -fsSL https://xmake.io/shget.text)
```

##### For MacOS

```bash
brew install git
brew install llvm && \
  ln -s "$(brew --prefix llvm)/bin/clang-format" "/usr/local/bin/clang-format" && \
  ln -s "$(brew --prefix llvm)/bin/clang-tidy" "/usr/local/bin/clang-tidy" && \
  ln -s "$(brew --prefix llvm)/bin/clang-apply-replacements" "/usr/local/bin/clang-apply-replacements"
# for CMake
brew install cmake
# for XMake (see https://xmake.io/#/guide/installation)
bash <(curl -fsSL https://xmake.io/shget.text)
```

##### For Windows

- [git-scm](https://git-scm.com/download/win) tool.
- `make`
  - [Make for Windows](http://gnuwin32.sourceforge.net/packages/make.htm)
  - [make](https://sourceforge.net/projects/ezwinports/files/) from [ezwinports](https://sourceforge.net/projects/ezwinports/files/)
  - From [chocolatey](https://chocolatey.org/), run `choco install make`
- [Python 3.6 or above](https://www.python.org/downloads/windows/)
- [Microsoft Build Tools 2017](https://visualstudio.microsoft.com/) or, at least [Microsoft Visual Studio Community 2019 ](https://visualstudio.microsoft.com/vs/)
  - Or, run `npm i -g windows-build-tools` (will silent install Microsoft Build Tools 2017)
- [clang+llvm](https://github.com/llvm/llvm-project/releases/tag/llvmorg-12.0.1)
  - Or run `choco install llvm`
- For CMake
  - [cmake](https://cmake.org/download/)
  - Or, run `choco install cmake --installargs 'ADD_CMAKE_TO_PATH=System'`
- For XMake:
  - [xmake](https://xmake.io/#/guide/installation)

```powershell
choco install git make python
# Visual Studio needs manual installation
choco install llvm
# for CMake
choco install cmake
# for XMake (see https://xmake.io/#/guide/installation)
Invoke-Expression (Invoke-Webrequest 'https://xmake.io/psget.text' -UseBasicParsing).Content
```

#### Known Issues / Troubleshooting

1. Note that `node-gyp` doesn't support Python 2.7 anymore, so you'll need to install Python 3.6 or above.
2. [#1](/../../issues/1) **cmake** does not seem to allow debug mode for VS Code
3. [#2](/../../issues/2) **xmake** is still under development and not compiling properly in debug mode

### Installation

```bash
git clone https://github.com/templ-project/nodejs-addon your_project
cd your_project
rm -rf .git
git init
git add remote origin https://url/to/your/project/repository
git add .
git commit -am "init"
git push origin master
npm install
node .scripts/configure -a node-addon-api -x gyp -e vscode -ucl
```

Read [here](manual/configure_command.md) more about the rest of the integrated build systems & the supported IDEs.

### Development

#### Requirements

Please install:
- [NodeJs](https://nodejs.org/en/). We support version 12.x and above.
- A C++ IDE
  - [Visual Studio Code](https://code.visualstudio.com/) with [ITMCDev C++ Extension Pack](https://marketplace.visualstudio.com/items?itemName=itmcdev.node-cpp-extension-pack)
    - For Linux:
      - [gdb](https://www.gnu.org/software/gdb/) if you plan in using **gdb** as debug tool,
      - if not, [vadimcn.vscode-lldb](https://marketplace.visualstudio.com/items?itemName=vadimcn.vscode-lldb) will help you without any flaws
  - [Jetbrains CLion](https://www.jetbrains.com/clion/)
  - *Please help us supporting other IDEs as well*
- A JavaScript/TypeScript IDE
  - [Visual Studio Code](https://code.visualstudio.com/) with [ITMCDev Node Extension Pack](https://marketplace.visualstudio.com/items?itemName=itmcdev.node-extension-pack)
  - [Jetbrains WebStorm](https://www.jetbrains.com/webstorm/)
  - *Please help us supporting other IDEs as well*

##### VSCode Configuration

Please read about configuring [Visual Studio Code](manual/configure_vscode.md).

##### CLion Configuration

Please read about configuring [Jetbrains CLion](manual/configure_clion.md).

### Testing

Testing is done using [mocha](https://www.npmjs.com/package/mocha) and [chai](https://www.npmjs.com/package/chai). 

Run unit tests using `npm run test`.

Testing is currently set to use unittest.

> We will try to provide a [Jest](https://www.npmjs.com/package/jest) implementation in the future. If you wish us to rush into it, please submit a ticket.

#### Single Tests

Run single unit tests file, by calling `npm run test:single -- test/path/to/file.test.js`

```bash
npm test:single -- test/index.test.js
```

### Deployment

Please check [release-it](https://www.npmjs.com/package/release-it) for making releases to [npmjs.com](https://www.npmjs.com/) or any other repository tool, then run:

```bash
npm run release
```

## Authors

* [Dragos Cirjan](mailto:dragos.cirjan@gmail.com) - Initial work

## Issues / Support

Add a set of links to the [issues](/templ-project/nodejs-addon-nanjs-addon-nan/issues) page/website, so people can know where to add issues/bugs or ask for support.

## License

(If the package is public, add licence)
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

<!-- ## Changelog

Small changelog history. The rest should be added to [CHANGELOG.md](CHANGELOG.md).

See here a template for changelogs: https://keepachangelog.com/en/1.0.0/

Also see this tool for automatically generating them: https://www.npmjs.com/package/changelog -->

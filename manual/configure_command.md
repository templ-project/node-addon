# Configure Command


<!-- TOC -->

- [Configure Command](#configure-command)
  - [Main Arguments](#main-arguments)
    - [API](#api)
    - [Build System](#build-system)
    - [C/Cpp Standard(s)](#ccpp-standards)
    - [IDE](#ide)
  - [Minimal Configuration (.husky/pre-commit)](#minimal-configuration-huskypre-commit)

<!-- /TOC -->


```bash
$ node .scripts/configure.js --help
Usage: configure [options]

Options:
  -V, --version                         output the version number
  -a, --api <nodeApi>                   NodeJs library to use: nan,napi,node-addon-api (default: "node-addon-api")
  -x, --build-system <buildSystem>      configure a build system: cmake, gyp, xmake (default: "gyp")
  -e, --ide <ide>                       configure an IDE: clion, none, vscode (default: "vscode")
  -ucl, --vscode-use-clangd             configure VSCode to use CLang plugin instead of the default Microsoft Intellisense
  -omc, --overwrite-main-cc             overwrite main.cc content with default statndard code from template
  -cs, --c-standard <cStandards>        C Standard (set the most important as last value): ansi,c11,c17,c89,c99,gnu89,gnu99 (default: ["c11"])
  -cpps, --cpp-standard <cppStandards>  C++ Standard (set the most important as last value): cxx03,cxx98,gnu98,cxx11,gnuxx11,cxx14,gnuxx14,cxx17,gnuxx17,cxx20 (default: ["cxx11"])
  -h, --help                            display help for command
```

## Main Arguments

### API

The configuration script supports 3 NodeJs APIs: NAN (`nan`), Napi (`napi`) and Napi for C++ (`node-addon-api`).

Default configuration is to use `node-addon-api`; if you wish to use another, you will need to:

* add `-a <api>` or `--api <api>` to the configuration command
* edit `.husky/pre-commit` to support that same api when pre-commit hooks are run
  
```bash
# configures project for napi NodeJs API
node .scripts/configure.js -a napi
```

### Build System

The configuration script supports 2 build systems: node-gyp (`gyp`) and cmake (`cmake`). The

> We are attempting to integrate other build systems as well, however, the most important ones remain the two above.

Default configuration is to use `node-gyp`; if you wish to user another, you will need to:

* add `-x <build-system>` or `--build-system <build-system>` to the configuration command
* edit `.husky/pre-commit` to support that same build system when pre-commit hooks are run

```bash
# configures project to use cmake build system
node .scripts/configure.js -x cmake
```

### C/Cpp Standard(s)

By default, NodeJs supports C++11 standard. The APIs presented above, are subject to the same C++/C standards: C++11 and C11. The
*The only exception* is the NAN API, for NodeJs 16+ which has been elevated to C++17.

In order to support other C++ and C standards in the modules that you write, we have added the 
* `-cpps` or `--cpp-standard` argument for C++ standards, and
* `-cs` or `--c-standard` argument for C standards.

> The application can support multiple standards for each file. Unfortunately, for this, you will either have to update our config templates, or completely ignore them and deactivate part of the configuration process.

To support a different standard for your project you will need to:

* add `-cpps <standard>` or `--cpp-standard <standard>` to the configuration command (same for C standards), and
* edit `.husky/pre-commit` to support that same standard when pre-commit hooks are run
* **or**
* edit directly `.scripts/configure.js` file, and change the default standard

```bash
node .scripts/configure.js -cpps cxx17
```

> Configuration script supports multiple standards, however, only the last mentioned one will be used in almost all its templates.

### IDE

> This is more of a optional argument (this is why you will see it as `-e none` in `.husky/pre-commit`). IDE is a choice for each developer.
We do recommend two of them, but they are not necessarily the most important ones. 

Supported IDEs (with configuration instructions), for now, are:

* Visual Studio Code along with ITMCDEV C++ & (NodeJs, Babel and TypeScript) extensions. (Read about [generating configuration files for VSCode](manual/configure_vscode.md))
* IntelliJ CLion. (Read about [configuring CLion](manual/configure_clion.md))

To configure the IDE, you will need to add `-e <ide>` or `--ide <ide>` to the configuration command.

```bash
node .scripts/configure.js -e vscode
```

## Minimal Configuration (.husky/pre-commit)

The minimal configuration is also defined in the `.husky/pre-commit` file, since it needs maintaining for 

```bash
node .scripts/configure.js -x gyp -e none
```
Minimal configuration is set to:

* configure code for no IDE
* configure code to use the `node-gyp` build system

To configure the project for `cmake` build system, `NAN` Node API, and `C++17` standard, for example, your `pre-commit` script should change like this:

```bash
node .scripts/configure.js -a nan -x cmake -e none -cpps cxx17
```

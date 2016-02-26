# generator-prepare-git-repo

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Dependency Status][depstat-image]][depstat-url]
[![DevDependency Status][depstat-dev-image]][depstat-dev-url]

> Yeoman generator for quick start prepare template git project repository.
Includes ```npm```, ```travis```, ```coveralls```, ```dependencies``` badges.

Supports 2 types of templates:

* ```ES5```
* ```ES6``` with ```Babel``` transpiler.

![mem][mem-image]

## Install

```console
npm install -g yo generator-prepare-git-repo
```

## Usage

```console
# create folder for your project
mkdir demo
cd demo

# run generator
yo prepare-git-repo
```

![sample](https://i.gyazo.com/f87a90fdfb6e40eafaa1d03b6e7ce0e8.png)

## Generated project tree
```
root
 | node_modules
 |  | ...
 | test
 |  | test.js
 | index.js
 | .babelrc     // only for ES6
 | .gitignore
 | .npmignore
 | .travis.yml
 | package.json
 | README.md
```

```yo prepare-git-repo``` will install follow dependencies from template **package.json**:

```json
"devDependencies": {
    "babel-cli": "*",           // only for ES6
    "babel-core": "*",          // only for ES6
    "babel-preset-es2015": "*", // only for ES6
    "coveralls": "*",
    "istanbul": "*",
    "mocha": "*",
    "mocha-lcov-reporter": "*",
    "should": "*",
    "isparta": "*",
    "npm-run-all": "*",
    "rimraf": "*"
  }
```

Composed with another generators:

* [generator-travis](https://www.npmjs.com/package/generator-travis) to getting and keeping ```.travis.yml``` up-to-date effortlessly
* [generator-babel](https://www.npmjs.com/package/generator-babel)
* [generator-badges](https://www.npmjs.com/package/generator-badges)

## License

MIT © [Aleksandr Filatov](https://alfilatov.com/)

[mem-image]: https://i.imgflip.com/yjz6c.jpg

[npm-url]: https://npmjs.org/package/generator-prepare-git-repo
[npm-image]: https://img.shields.io/npm/v/generator-prepare-git-repo.svg?style=flat-square

[travis-url]: https://travis-ci.org/greybax/generator-prepare-git-repo
[travis-image]: https://img.shields.io/travis/greybax/generator-prepare-git-repo/master.svg?style=flat-square

[depstat-url]: https://david-dm.org/greybax/generator-prepare-git-repo
[depstat-image]: https://david-dm.org/greybax/generator-prepare-git-repo.svg?style=flat-square

[depstat-dev-url]: https://david-dm.org/greybax/generator-prepare-git-repo#info=devDependencies
[depstat-dev-image]: https://david-dm.org/greybax/generator-prepare-git-repo/dev-status.svg?style=flat-square
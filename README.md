# generator-prepare-git-repo

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Dependency Status][depstat-image]][depstat-url]
[![DevDependency Status][depstat-dev-image]][depstat-dev-url]

> Yeoman generator for quick start prepare template git project repository.
Includes ```npm```, ```travis```, ```coveralls```, ```dependencies``` badges.

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

![sample](https://i.gyazo.com/50e521bd92f6564842725c7deaac053c.png)

## Generated project tree
```
root
 | node_modules
 |  | ...
 | test
 |  | test.js
 | index.js
 | .gitignore
 | .npmignore
 | .travis.yml
 | package.json
 | README.md
```

```yo prepare-git-repo``` will install follow dependencies from template **package.json**:

```json
"devDependencies": {
    "coveralls": "^2.11.6",
    "istanbul": "^0.4.2",
    "mocha": "^2.4.5",
    "mocha-lcov-reporter": "^1.0.0",
    "should": "^8.2.1"
  }
```

Composed with another generators:

* [generator-git-init](https://www.npmjs.com/package/generator-git-init) for ```git init```
* [generator-travis](https://www.npmjs.com/package/generator-travis) to getting and keeping ```.travis.yml``` up-to-date effortlessly

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
[depstat-dev-image]: https://david-dm.org/greybax/generator-prepare-git-repo/dev-status.svg
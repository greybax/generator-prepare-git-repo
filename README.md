# generator-prepare-git-repo

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Dependency Status][depstat-image]][depstat-url]
[![DevDependency Status][depstat-dev-image]][depstat-dev-url]

> Yeoman generator for quick start prepare template git project repository.
Includes ```npm```, ```travis```, ```coveralls```, ```dependencies``` badges.

![mem][mem-image]

## Install

```js
npm install -g yo generator-prepare-git-repo
```

## Usage

```js
yo prepare-git-repo
```
![sample](https://i.gyazo.com/50e521bd92f6564842725c7deaac053c.png)

## Generated project tree
```
root
 | test
 |  | test.js
 | index.js
 | .gitignore
 | .npmignore
 | .travis.yml
 | package.json
 | README.md
```

## License

MIT © [Aleksandr Filatov](https://alfilatov.com/)

[mem-image]: https://i.imgflip.com/yjz6c.jpg

[npm-url]: https://npmjs.org/package/generator-prepare-git-repo
[npm-image]: https://img.shields.io/npm/v/generator-prepare-git-repo.svg?style=flat-square

[travis-url]: https://travis-ci.org/greybax/generator-prepare-git-repo
[travis-image]: https://img.shields.io/travis/greybax/generator-prepare-git-repo/master.svg?style=flat-square

[depstat-url]: https://david-dm.org/greybax/generator-prepare-git-repo
[depstat-image]: https://david-dm.org/greybax/generator-prepare-git-repo.svg?style=flat-square

[depstat-dev-url]: https://david-dm.org/greybax/generator-prepare-git-repo
[depstat-dev-image]: https://david-dm.org/greybax/generator-prepare-git-repo/dev-status.svg
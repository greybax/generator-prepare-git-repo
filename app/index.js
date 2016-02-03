'use strict';

var yeoman = require('yeoman-generator')
var assign = require('object-assign');

module.exports = yeoman.Base.extend({
    initializing: function () {
        this.props = {};
    },

    prompting: function prompting() {
        var done = this.async();
        var prompts = [];

        prompts = prompts.concat([{
            name: 'projectName',
            message: 'Project name:'
        }]);
        
        prompts = prompts.concat([{
            name: 'projectVersion',
            message: 'Project version:'
        }]);
        
        prompts = prompts.concat([{
            name: 'projectDescsription',
            message: 'Project description:'
        }]);
        
        prompts = prompts.concat([{
            name: 'author',
            message: 'Author:'
        }]);
        
        prompts = prompts.concat([{
            name: 'githubUser',
            message: 'Github profile:'
        }]);
        
        this.prompt(prompts, function answers(props) {
            this.props = assign({}, props);
            done();
        }.bind(this));
    },
    
    writing: function writing() {
        var copy = function copy(from, to) {
            this.fs.copyTpl(this.templatePath(from), this.destinationPath(to), this.props);
        }.bind(this);
        
        copy('tests', 'tests');
        copy('.gitignore', '.gitignore');
        copy('.npmignore', '.npmignore');
        copy('.travis.yml', '.travis.yml');
        copy('index.js', 'index.js');
        copy('package.json', 'package.json');
        copy('README.md', 'README.md');
        
        this.composeWith('git-init', {}, {
            local: require.resolve('generator-git-init'),
        });
    },
    
    install: function install() {
        this.npmInstall();
    },
});
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
            message: 'Project name:',
            validate: function(input) {
                var done = this.async();

                setTimeout(function() {
                    if (!input || input === "") {
                        done("You need to provide a project name");
                        return;
                    }
                    done(true);
                }, 500);
            }
        }]);
        
        prompts = prompts.concat([{
            name: 'projectVersion',
            message: 'Project version:',
            default: '0.0.0',
        }]);

        prompts = prompts.concat([{
            name: 'projectDescsription',
            message: 'Project description:',
            validate: function(input) {
                var done = this.async();

                setTimeout(function() {
                    if (!input || input === "") {
                        done("You have to provide description");
                        return;
                    }
                    done(true);
                }, 500);
            }
        }]);
        
        prompts = prompts.concat([{
            name: 'keywords',
            message: 'Keywords:',
            default: '',
        }]);
        
        prompts = prompts.concat([{
            name: 'license',
            message: 'License:',
            default: 'MIT',
        }]);
        
        prompts = prompts.concat([{
            name: 'author',
            message: 'Author:',
            validate: function(input) {
                var done = this.async();

                setTimeout(function() {
                    if (!input || input === "") {
                        done("You have to provide author");
                        return;
                    }
                    done(true);
                }, 500);
            }
        }]);
        
        prompts = prompts.concat([{
            name: 'githubUser',
            message: 'Github profile:',
            validate: function(input) {
                var done = this.async();

                setTimeout(function() {
                    if (!input || input === "") {
                        done("You have to provide github username");
                        return;
                    }
                    done(true);
                }, 500);
            }
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
        
        copy('test', 'test');
        copy('.gitignore', '.gitignore');
        copy('.npmignore', '.npmignore');
        copy('index.js', 'index.js');
        copy('package.json', 'package.json');
        copy('README.md', 'README.md');
        
        this.composeWith('git-init', {}, {
            local: require.resolve('generator-git-init'),
        });
        
        this.composeWith('travis', { options: { config: {
            after_script: ['npm run coveralls']
        }}}, {
            local: require.resolve('generator-travis')
        });
    },
    
    install: function install() {
        this.npmInstall();
    },
});
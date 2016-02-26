'use strict';

var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var assign = require('object-assign');

module.exports = yeoman.Base.extend({
    initializing: function initializing() {
        welcome: {
            this.log(yosay('Welcome to the Prepare Your Git Repo generator!'));
        }
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
            type: "list",
            name: 'useBabel',
            message: 'Do you want use Babel:',
            choices: [
            {
                name: "Yes",
                value: true
            },
            {
                name: "No",
                value: false
            }
            ]
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
        
        this.spawnCommand('git', ['init', '--quiet']);
        
        this.composeWith('travis', { options: { config: {
            after_script: ['npm run coveralls']
        }}}, {
            local: require.resolve('generator-travis')
        });
        
        if (this.props.useBabel) {
            this.composeWith('babel', { options: {
                'skip-install': this.options['skip-install']
            }}, {
                local: require.resolve('generator-babel')
            });
        }
        
        this.composeWith('badges', { options: {
            user: this.props.githubUser,
            project: this.props.projectName,
            badges: ['npm', 'travis', "coveralls", "dependencies", "devDependencies"]
        }}, {
            local: require.resolve('generator-badges')
        });
    },
    
    install: function install() {
        this.npmInstall();
    },
});
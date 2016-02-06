'use strict';

var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe("prepare-git-repo:app", function _describe(){
    before(function _before(done) {
        this.timeout(10000);
        helpers.run(path.join(__dirname, '../app'))
        .withPrompts({
            projectName: "test-project-name",
            projectVersion: "0.0.1",
            projectDescsription: "Test project description",
            keywords: "this, is, my, awesome, project",
            license: "Apache 2.0",
            author: "just_author",
            githubUser: "just_user",
        })
        .on("end", done);
    });
    
    it("creates files", function _it() {
        assert.file([
            "test/test.js",
            ".gitignore",
            ".npmignore",
            ".travis.yml",
            "index.js",
            "package.json",
            "README.md",
        ]);
    });
    
    it("creates files with proper extrapolation", function _it() {
        assert.fileContent("package.json", "0.0.1");
        assert.fileContent("package.json", "awesome");
        assert.fileContent("package.json", "Apache 2.0");
        assert.fileContent("README.md", "test-project-name");
        assert.fileContent("README.md", "Test project description");
        assert.fileContent("README.md", "just_author");
        assert.fileContent("README.md", "just_user");
    });
});
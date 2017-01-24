var githubhook = require('githubhook');
var github = githubhook({});
var path = require("fs");
var exec = require('child_process').exec;
var config = require('./config.json');

github.listen();

github.on('push', function (repo, ref, data) {
	console.log(repo);
	path.exists(config.git_dir+"/"+repo+".git", (f) => {
		if (f) {
			exec("git -C "+config.git_dir+"/"+repo+".git"+" fetch origin")
		}
	})
});

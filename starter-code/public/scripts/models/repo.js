'use strict';

(function(module) {
  const repos = {};

  repos.all = [];

  repos.requestRepos = function(callback) {
    $.get(`https://api.github.com/user?access_token=` + window.gitToken)
    .then(user => {
      $.get$.get('/github/user/repos')
      .then(results => {
        results.forEach(repo => {
          console.log('repos is ', repo)
          repos.all.push(repo);
        })
        callback(repos);
      }, error => {
        console.log(error);
      });
    }, error => {
      console.log(error);
    });
  };

  repos.with = attr => repos.all.filter(repo => repo[attr]);

  module.repos = repos;
})(window);

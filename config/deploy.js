module.exports = function(deployTarget) {
  var ENV = {
    git: {
      repo: 'git@github.com:workmanw/router-retry-bug.git',
      branch: 'gh-pages',
      worktreePath: '/tmp/router-retry-bug-deploy',
      commitMessage: 'Deployed %@'
    }
  };
  return ENV;
};

'use strict';

(function(module) {
  const aboutController = {};

  aboutController.showProjects = () => {
    $('#projects').hide();
    $('#about').show();
    repos.requestRepos(repoView.index);

  }
  module.aboutController = aboutController;
})(window);

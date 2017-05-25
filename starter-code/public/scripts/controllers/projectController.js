'use strict';

(function(module) {
  const projectController = {};

  projectController.showProjects = () => {
    $('#about').hide();
    $('#projects').show();
  }
  module.projectController = projectController;
})(window);

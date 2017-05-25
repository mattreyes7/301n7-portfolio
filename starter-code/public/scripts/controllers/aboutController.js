'use strict';

(function(module) {
  const aboutController = {};

  aboutController.showProjects = () => {
    $('#projects').hide();
    $('#about').show();
  }
  module.aboutController = aboutController;
})(window);

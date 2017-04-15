'use strict';

var projects = [];

function Project (rawDataObj) {
  this.projCategory = rawDataObj.projCategory;
  this.projTitle = rawDataObj.projTitle;
  this.projSrc = rawDataObj.projSrc;
  this.projSummary = rawDataObj.projSummary;
}

Project.prototype.toHtml = function() {
  var template = Handlebars.compile($('#project-template').text());

  return template(this);

};

projects.forEach(function(project){
  $('#projects').append(project.toHtml());
});

'use strict';
function Project (entry) {
  this.projCategory = entry.projCategory;
  this.projTitle = entry.projTitle;
  this.projSrc = entry.projSrc;
  this.projUrl = entry.projUrl;
  this.projSummary = entry.projSummary;
}

Project.all = [];

Project.prototype.toHtml = function() {
  let template  = Handlebars.compile($('#project-template').text());
  return template(this);
};
// var projectSource = $('#project-template').html();
// var handleBarsTemplate = Handlebars.compile(projectSource);

// Pass our data to the template
// var theCompiledHtml = handleBarsTemplate(rawData);

// Add the compiled html to the page
// $('#projects').append(theCompiledHtml);
Project.loadAll = function(rawData) {
  rawData.forEach(function(ele) {
    Project.all.push(new Project(ele));
  })
}
//initiate json file.
Project.fetchAll = function() {
  if (localStorage.rawData) {
    Project.loadAll(JSON.parse(localStorage.rawData));
    var initIndexPage = function() {
      Project.all.forEach(function(project) {
        $('#projects').append(project.toHtml())
      });
    }
  } else {
    $(() => {
      $.ajax({
        url: 'starter-code/scripts/projects.json'
      }).then(function(data){
        localStorage.rawData = JSON.stringify(data);
        Project.loadAll(data);
        console.log(Project.all);
        initIndexPage();
        // $('#projects-json').append(entry.toHTml());
      });
    });
  }
};
Project.loadAll();
Project.fetchAll();

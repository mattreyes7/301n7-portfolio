'use strict';

var projectSource = $('#project-template').html();
var handleBarsTemplate = Handlebars.compile(projectSource);

// Pass our data to the template
var theCompiledHtml = handleBarsTemplate(rawData);

// Add the compiled html to the page
$('#projects').append(theCompiledHtml);

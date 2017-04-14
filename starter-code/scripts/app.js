// project constructor: {
// title
// image
// date published
// infos

'use strict';
var sourceHtml = $('#project-template').html();
var handleBarsTemplate = Handlebars.compile(sourceHtml);

var projects = [
  {
    projCategory:'Graphic Design',
    projTitle:'Federal Way Champs!',
    projImage:'assets/fdubchamp.jpg',
    projSummary:'<p>A t-shirt design for the 2015 High school basketball state champions.</p>'
  },
]

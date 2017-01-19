//= require jquery
//= require angular
//= require angular-ui-router
//= require angular-rails-templates
//= require angular-modal-service
//= require bootstrap-sprockets
//= require moment
//= require_tree .

$(document).ready(function(){
  $('#content').hover(function() {
      $("#content").addClass('transition');

  }, function() {
      $("#content").removeClass('transition');
  });
});

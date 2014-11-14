/*global Handlebars:false */
/*global brightcove:false */
/*global $:false */

'use strict';

/**
 * @ngdoc service
 * @name humanSynthApp.brightcove
 * @description
 * # brightcove
 * Factory in the humanSynthApp.
 */
angular.module('humanSynthApp').factory('brightcove', ['$rootScope', function ($rootScope) {

  //options
  var vidRatio = 640 / 360;
  var width =  $(window).width() / 1.4;
  var height = ($(window).width() / 1.4) / vidRatio;
  var playerTemplate = '';
  var player = {};
  var APIModules = {};
  var modVP = {};
  var videoPlayer = {};
  var videoContainer = {};
  var playerData = {};


  
  var addPlayer = function(){
    var template = Handlebars.compile(playerTemplate);
    var playerHTML = template(playerData);
    document.getElementById('player').innerHTML = playerHTML;

    //instantiate player
    brightcove.createExperiences();

  };

  var resize = function(){
    var newWidth = $(window).width() / 1.4;
    var newHeight = ($(window).width() / 1.4) / vidRatio;

    if (newWidth < 768){
      newWidth = newWidth * 1.2;
      newHeight = newWidth / vidRatio;
    }

    videoContainer.attr('width', newWidth);
    videoContainer.attr('height', newHeight);

  };

  window.onTemplateLoad = function(experienceID){
    player = brightcove.api.getExperience(experienceID);
    APIModules = brightcove.api.modules.APIModules;
    modVP = player.getModule(brightcove.api.modules.APIModules.VIDEO_PLAYER);

  };



  window.onTemplateReady = function(evt){
    videoPlayer = player.getModule(APIModules.VIDEO_PLAYER);
    
    //send message that video is ready
    $rootScope.$broadcast('playerready', videoPlayer);
    

    //get ref to object so we can resize window
    videoContainer = $('#myExperience');
    console.log(evt);
    
    window.addEventListener('resize', resize, true);

  };

  var init = function(id){

    
    //if on device, make it bigger
    if (width < 768){
      width = width * 1.2;
      height = width / vidRatio;
    }

    playerData = {
      'playerID' : '1890493041001',
      'playerKey' : 'AQ~~%2CAAABuJ3Komk~%2CgXybzBdQzgLgC0zHvAZXtMeryIVplW-t',
      'width': width,
      'height': height,
      'videoID': id
    };

    playerTemplate = '<div style=\"display:none\"></div><object id=\"myExperience\" class=\"BrightcoveExperience\"><param name=\"bgcolor\" value=\"#FFFFFF\" /><param name=\"width\" value=\"{{width}}\" /><param name=\"height\" value=\"{{height}}\" /><param name=\"playerID\" value=\"{{playerID}}\" /><param name=\"playerKey\" value=\"{{playerKey}}\" /><param name=\"isSlim\" value=\"true\" /><param name=\"autoStart\" value=\"false\" /><param name=\"isVid\" value=\"true\" /><param name=\"isUI\" value=\"true\" /><param name=\"dynamicStreaming\" value=\"true\" /><param name=\"@videoPlayer\" value=\"{{videoID}}\"; /><param name=\"includeAPI\" value=\"true\" /><param name=\"linkBaseURL\" value=\"http://www.redbullmusicacademy.com/magazine/human-synthesizer\"/><param name=\"templateLoadHandler\" value=\"onTemplateLoad\" /><param name=\"templateReadyHandler\" value=\"onTemplateReady\" /></object>';
    addPlayer();
  };


  return {
    init: function(videoId){
      init(videoId);
    }
  };
}]);

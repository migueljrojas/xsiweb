// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

global.$ = global.jQuery = require('jquery');
var Header = require('../_modules/header/header');
var Slider = require('../_modules/slider/slider');
var Job = require('../_modules/job/job');
var Home = require('./home');
var VideoReplace = require('./videoReplace');

$(function() {
    require('../../bower_components/bootstrap-sass/assets/javascripts/bootstrap.min');
    require('../../bower_components/slick-carousel/slick/slick');

    new Header();
    new Slider();
    new VideoReplace();
    new Job();
    new Home();
});

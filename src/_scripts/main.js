// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

global.$ = global.jQuery = require('jquery');
var Slider = require('../_modules/slider/slider');
var Job = require('../_modules/job/job');
var Home = require('./home');

$(function() {
    require('../../bower_components/bootstrap-sass/assets/javascripts/bootstrap.min');
    require('../../bower_components/slick-carousel/slick/slick');

    new Slider();
    new Home();
    new Job();
});

// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

global.$ = global.jQuery = require('jquery');
var Slider = require('../_modules/slider/slider');

$(function() {
    require('../../bower_components/slick-carousel/slick/slick');
    new Slider(); 
});

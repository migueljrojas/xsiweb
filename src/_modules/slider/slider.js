'use strict';

// Constructor
var Slider = function() {
    var slider = $('._slider');
    if (slider) {
        slider.each(function(){
            $(this).slick();
        });
    }
};

module.exports = Slider;

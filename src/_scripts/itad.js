'use strict';

// Constructor
var Itad = function() {
    var container = $('.js-video');
    var frame = container.find('iframe');

    if( container ) {
        $(window).on("scroll", function() {

            var scroll = $(window).scrollTop();
            var containerTop = container.get(0).getBoundingClientRect().top;

            if ( !container.hasClass('-playback') ) {
                if ( containerTop <= 450 && containerTop > -50 ) {
                    frame.attr("src","https://www.youtube.com/embed/5RXrUV2N7ZA?rel=0&showinfo=0&autoplay=1&controls=0");
                    container.addClass('-playback');
                }
            }

            ////www.youtube.com/embed/zpOULjyy-n8?rel=0&autoplay=1&controls=0

            if ( container.hasClass('-playback') ) {
                if ( containerTop > 450 || containerTop < -50 ) {
                    frame.attr("src","");
                    container.removeClass('-playback');
                }
            }

        });
    }
};

module.exports = Itad;

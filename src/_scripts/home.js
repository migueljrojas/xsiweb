'use strict';

// Constructor
var Home = function() {
    $(function soyxsi() {

        //Btn Action IT
        $( '.btn__soy-it' ).on( 'click', function() {
            $( '.it, .finanzas' ).css( 'display', 'none' );
            $( '.it-open' ).css( 'display', 'flex' );
        });

        //Btn Action Finanzas
        $( '.btn__soy-finanzas' ).on( 'click', function() {
            $( '.it, .finanzas' ).css( 'display', 'none' );
            $( '.finanzas-open' ).css( 'display', 'flex' );
        });

        //Btn Action Close
        $( '.btn__close' ).on( 'click', function(){
            $( '.finanzas-open' ).css( 'display', 'none' );
            $( '.it-open' ).css( 'display', 'none' );
            $( '.it, .finanzas' ).css( 'display', 'block' ).fadeIn( "slow" );
        });

    });


    var container = $('.js-video');
    var frame = container.find('iframe');

    if( container ) {
        $(window).on("scroll", function() {

            var scroll = $(window).scrollTop();
            var containerTop = container.get(0).getBoundingClientRect().top;

            if ( !container.hasClass('-playback') ) {
                if ( containerTop <= 450 && containerTop > -50 ) {
                    frame.attr("src","https://www.youtube.com/embed/J3CawfqexeU?rel=0&showinfo=0&autoplay=1&controls=0&t=15s");
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

module.exports = Home;

// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

global.$ = global.jQuery = require('jquery');
var Slider = require('../_modules/slider/slider');

$(function soyxsi() {

    //Btn Action IT
    $( '.btn__soy-it' ).on( 'click', function() {
        $( '.it, .finanzas' ).css( 'display', 'none' );
        $( '.it-open' ).css( 'display', 'block' );
    });

    //Btn Action Finanzas
    $( '.btn__soy-finanzas' ).on( 'click', function() {
        $( '.it, .finanzas' ).css( 'display', 'none' );
        $( '.finanzas-open' ).css( 'display', 'block' );
    });

    //Btn Action Close
    $( '.btn__close' ).on( 'click', function(){
        $( '.finanzas-open' ).css( 'display', 'none' );
        $( '.it-open' ).css( 'display', 'none' );
        $( '.it, .finanzas' ).css( 'display', 'block' ).fadeIn( "slow" );
    });

});

$(function() {
    require('../../bower_components/slick-carousel/slick/slick');
    new Slider();
    new soyxsi();
});

global.$ = global.jQuery = require('jquery');
require('bootstrap');
/*
 |--------------------------------------------------------------------------
 | Document Ready Function
 |--------------------------------------------------------------------------
 */
$(function() {

    'use strict';
        $(".btn-post-video").click(function(){
            if ($(".post-video")[0].paused){
                    $(".post-video").css('display','block');
                    $(".btn-post-video").css('display','none');
                    $(".content-video").css('cursor', 'pointer');
                    $(".post-video")[0].play();
                }
            else{
                    $(".post-video")[0].pause();
                }
        });
        $(".post-video").click(function(){
            $(".btn-post-video").css('display','block');
            $(".post-video")[0].pause();
        });
        $('#carouselExampleControls').on('slide.bs.carousel', function () {
          // do something…
        });
    // Here be dragons.
    // Animation Pagination

    /*$('.showComments').click(function() {
        $(this).text(function(i, v) {
           return v === 'Ver respuestas' ? 'Ocultar respuestas' : 'Ver respuestas'
        });
    });*/

    $('.btn-like').click(function() {
        $(this).toggleClass('active-like');
    });
    if (screen.width < 480) {
        $(".organisms-navigation-menu").addClass('dropdown');
        $(".menu-ul").addClass('dropdown-menu');
        $(".menu-item").addClass('dropdown-item');
        $(".logo-nav").addClass('atomIcon-widthBig').removeClass('moleculeImage-verySmall');
        $(".dropdown-item").addClass('atomColor-gray').removeClass('atomColor-white');
        $(".atomDropdown-movil").addClass('d-block');
    }
});

$(function() {
    var go = true;
    $(window).scroll(function() {
        if ($(this).scrollTop() > 0 && go) {
            $(".organisms-navigation-style1").addClass('organisms-navigation-style1-active').addClass('atomBackground-primary');
            $(".atomColor-nav").addClass('atomColor-white').removeClass('atomColor-gray');
            go = false;
        } else if ($(this).scrollTop() < 10 && !go) {
            $(".organisms-navigation-style1").removeClass('organisms-navigation-style1-active').removeClass('atomBackground-primary');
            $(".atomColor-nav").removeClass('atomColor-white').addClass('atomColor-gray');
            go = true;
        }
    });
});

$(function() {
    var go = true;
    $(window).scroll(function() {
        if ($(this).scrollTop() > 0 && go) {
            $(".organisms-navigation-style2").addClass('organisms-navigation-style2-active');
            go = false;
        } else if ($(this).scrollTop() < 10 && !go) {
            $(".organisms-navigation-style2").removeClass('organisms-navigation-style2-active');
            go = true;
        }
    });
});

$(function() {
    var go = true;
    $(window).scroll(function() {
        if ($(this).scrollTop() > 0 && go) {
            $(".organisms-navigation-style5").addClass('organisms-navigation-style5-active').addClass('atomBackground-gray');
            go = false;
        } else if ($(this).scrollTop() < 10 && !go) {
            $(".organisms-navigation-style5").removeClass('organisms-navigation-style5-active').removeClass('atomBackground-gray');
            go = true;
        }
    });
});
//-->
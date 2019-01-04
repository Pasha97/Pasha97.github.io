import $ from 'jquery';
import './style.scss';

$(window).on("scroll", function () {
    if ($(window).scrollTop() > 5) {
        $('.preview__arrow').addClass('disable');
        $('.preview').css('background-position', `50% ${$(window).scrollTop()/2}px`);
    }
    else {
        $('.preview').css('background-position', '');
        $('.preview__arrow').removeClass('disable');
    }


    if($('.about').offset().top - $(window).scrollTop() < 0){
        let position = $('.about').offset().top - $(window).scrollTop();
        $('.about__images').css('background-position', `50% ${position/6}px`);
    }else{
        $('.about__images').css('background-position', '');
    }

    console.log($('.about').offset().top - $(window).scrollTop());

    if ($(window).height()-80 < $(window).scrollTop()){
        $('.nav').addClass('active');
    }else{
        $('.nav').removeClass('active');
    }
});


$(function(){
    $('a[href^="#"]').on('click', function(event) {
        event.preventDefault();
        let id = $(this).attr("href"),
            position = $(id).offset().top;
        $('html, body').animate({scrollTop: position}, 1000);
    });
});
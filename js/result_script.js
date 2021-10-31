$(document).ready(function () {

    $('.results .overlay .progress-bar').css('width', '100%');

    for (let i = 1; i <= 8; i++) {
        setTimeout(function () {
            $('.spannerClass').eq(i - 1).addClass('d-none');
            $('.rightClass').eq(i - 1).removeClass('d-none');
            $('.overlayLi').eq(i - 1).css('color', 'rgb(0, 128, 0)');
        }, i * 1000);
    }
    setTimeout(function () {
        $('.results .overlay').addClass('d-none');
        $('.results .content').removeClass('d-none');
        $('.results footer').removeClass('d-none');
    }, 8500);

    //progress bar
    progress_bar = function () {
        let top_of_element = $("#progress").offset().top;
        let bottom_of_element = $("#progress").offset().top + $("#progress").outerHeight();
        let bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
        let top_of_screen = $(window).scrollTop();

        if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)) {
            $('.progress1').css('width', '63%');
            $('.progress2').css('width', '87%');
            $('.progress3').css('width', '75%');
            $('.progress4').css('width', '75%');
        }
    }
    progress_bar();

    progress_bar2 = function () {
        let top_of_element = $("#progress2").offset().top;
        let bottom_of_element = $("#progress2").offset().top + $("#progress2").outerHeight();
        let bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
        let top_of_screen = $(window).scrollTop();

        if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)) {
            $('.progress5').css('width', '63%');
            $('.progress6').css('width', '87%');
            $('.progress7').css('width', '75%');
            $('.progress8').css('width', '75%');
        }
    }
    progress_bar2();

    //scrolling
    $(window).scroll(function () {
        progress_bar();
        progress_bar2();
    })

    //resize
    if ($(window).width() <= 750) {
        $('.option1').addClass('d-none');
        $('.option2').removeClass('d-none');
    } else {
        $('.option2').addClass('d-none');
        $('.option1').removeClass('d-none');
    }
    $(window).resize(function () {
        if ($(window).width() <= 750) {
            $('.option1').addClass('d-none');
            $('.option2').removeClass('d-none');
        } else {
            $('.option2').addClass('d-none');
            $('.option1').removeClass('d-none');
        }
    })

})
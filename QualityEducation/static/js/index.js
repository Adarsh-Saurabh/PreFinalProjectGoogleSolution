console.log('We are going to rock this.');

$(function () {
    console.log("This is also working");

    if ($(window).width() > 992) {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 40) {
                $('#navbar_top').addClass("fixed-top");
                // add padding top to show content behind navbar
                $('body').css('padding-top', $('.navbar').outerHeight() + 'px');
            } else {
                $('#navbar_top').removeClass("fixed-top");
                // remove padding top from body
                $('body').css('padding-top', '0');
            }
        });
    }

    let isVisible = false;
    let login_form = true;

    $('.log_auth').click(function () {
        $('.auth_window').css('transform', 'scale(1)');
        login_form = true;
        toggleForm();
        isVisible = true;
    })

    $('.remove').click(() => {
        $('.auth_window').css('transform', 'scale(0)');
        isVisible = false;
    })

    $('.sign_auth').click(function () {
        $('.auth_window').css('transform', 'scale(1)');
        login_form = false;
        toggleForm();
        isVisible = true;
    })


    $('.login_switch').click(function () {
        login_form = true;
        toggleForm();
    })
    $('.signup_switch').click(function () {
        login_form = false;
        toggleForm();
    })

    function toggleForm() {
        if (login_form) {
            $('#login_form').css('display', 'flex');
            $('#signup_form').css('display', 'none');
            login_form = false;
        }
        else {
            $('#login_form').css('display', 'none');
            $('#signup_form').css('display', 'flex');
            login_form = true;
        }
    }
})
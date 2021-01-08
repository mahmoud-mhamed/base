//use go to top
$('#goToTop').click(function () {
    if ($(document).scrollTop() > 800) {
        $('html').animate({
            scrollTop: 0
        }, 600);
    } else {
        $('html').animate({
            scrollTop: 0
        }, 200);
    }

    $(this).fadeOut();
});
//use go to bottom
$('#goToBottom').click(function () {
    if ($(document).scrollTop() > 800) {
        $('html').animate({
            scrollTop: $(document).height()
        }, 600);
    } else {
        $('html').animate({
            scrollTop: $(document).height()
        }, 200);
    }

    $(this).fadeOut();
});

var old_scroll_value = 0;
$(window).scroll(function () {
    if ($(document).height() > $(window).height()) {
        if (old_scroll_value > $(document).scrollTop()) {
            $('#goToBottom').fadeOut(0);
            $('#goToTop').fadeIn();
        } else {
            $('#goToBottom').fadeIn();
            $('#goToTop').fadeOut(0);
        }
        old_scroll_value = $(document).scrollTop();
    } else {
        $('#goToBottom').fadeOut();
        $('#goToTop').fadeOut();
    }
});

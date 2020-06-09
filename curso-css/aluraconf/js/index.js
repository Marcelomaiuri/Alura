function ativaScrollSuave(selector) {
    $(selector).click(function (event) {

        event.preventDefault();
        var target = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1500);

    });
}
ativaScrollSuave('a[href*=panel-about], a[href*=panel-speakers], a[href*=panel-form]');

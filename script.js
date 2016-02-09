(function($) {
    var slideOptions = [
        {direction: 'left', duration: 200},
        {direction: 'right', duration: 200}
    ];

    function toggle_left() {
        $('#sidebar_bg').show('fade');
        $('#sidebar_left').show('slide', slideOptions[0]);
    }

    function toggle_right() {
        $('#sidebar_bg').show('fade');
        $('#sidebar_right').show('slide', slideOptions[1]);
    }

    function bindEvents() {
        $('#left_button').click(function() {
            toggle_left();
        });
        $('#right_button').click(function() {
            toggle_right();
        });
        $('#sidebar_bg').click(function() {
            $(this).hide('fade');
            $('#sidebar_left').hide('slide', slideOptions[0]);
            $('#sidebar_right').hide('slide', slideOptions[1]);
        });
        $('#search_button').click(function() {
            $('div.search').toggle();
            $('div.search').find('input.edit').focus();
        });
    }

    function initUI() {
        // Move TOC
        if ($('.page h2').length > 0) {
            $('#dw__toc').insertBefore($('.page h2:first'));
        } else {
            $('#dw__toc').insertAfter($('.page h1:first').next('.level1'));
        }
        // Anchor link should be shifted by header pixel
        $(window).on("hashchange", function () {
            window.scrollTo(window.scrollX, window.scrollY - 48);
        });
    }

    $(function() {
        initUI();
        bindEvents();
    });
})(jQuery);

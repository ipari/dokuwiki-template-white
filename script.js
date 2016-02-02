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
        })
    }

    $(function() {
        $('#sidebar_bg').hide();
        $('#sidebar_left').hide();
        $('#sidebar_right').hide();
        bindEvents();
    });
})(jQuery);

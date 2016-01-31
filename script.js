(function($) {
    function toggle_left() {
        $('#ipari__sidebar').toggle('fade');
        $('#ipari__left').toggle('slide', {direction: 'left', duration: 200});
        $('#ipari__sidebar').off().on('click', function() {
            toggle_left();
        });
    }

    function toggle_right() {
        $('#ipari__sidebar').toggle('fade');
        $('#ipari__right').toggle('slide', {direction: 'right', duration: 200});
        $('#ipari__sidebar').off().on('click', function() {
            toggle_right();
        });
    }

    function bindEvents() {
        $('#left_button').click(function() {
            toggle_left();
        });
        $('#right_button').click(function() {
            toggle_right();
        });
    }

    $(function() {
        $('#ipari__sidebar').hide();
        $('#ipari__left').hide();
        $('#ipari__right').hide();
        bindEvents();
    });
})(jQuery);

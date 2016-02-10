(function($) {
    var resizeTimer;
    var fadeOption = {duration: 150};

    function toggleLeft() {
        $('#sidebar_bg').show('fade', fadeOption);
        $('#sidebar_left').show();
    }

    function toggleRight() {
        $('#sidebar_bg').show('fade', fadeOption);
        $('#sidebar_right').show();
    }

    function anchorUsertools() {
        var heightWindow = $(window).height();
        var heightAside = $('#dokuwiki__aside').height();
        var heightUsertools = $('#dokuwiki__usertools').outerHeight();
        if (heightAside + heightUsertools > heightWindow) {
            $('#dokuwiki__usertools').removeClass('bottom');
        } else {
            $('#dokuwiki__usertools').addClass('bottom');
        }
    }

    function preventParentWheel(e) {
    	var curScrollPos = $(this).scrollTop();
    	var scrollableDist = $(this).prop('scrollHeight') - $(this).outerHeight();
    	var wheelEvent = e.originalEvent;
    	var dY = wheelEvent.deltaY;

    	if (dY < 0 && curScrollPos <= 0) {
    		return false;
    	}
    	if (dY > 0 && curScrollPos >= scrollableDist) {
    		return false;
    	}
    }

    function bindEvents() {
        $(window).bind('resize', function() {
                if (resizeTimer) clearTimeout(resizeTimer);
                resizeTimer = setTimeout(anchorUsertools, 100);
            }
        );
        $('.sidebar').on('wheel scroll', preventParentWheel);
        $('.btn_left').click(function() {
            toggleLeft();
            anchorUsertools();
            lastScrollTop = $(window).scrollTop();
        });
        $('.btn_right').click(function() {
            toggleRight();
        });
        $('#sidebar_bg').click(function() {
            $(this).hide('fade', fadeOption);
            $('#sidebar_left').hide();
            $('#sidebar_right').hide();
        });
        $('.btn_search').click(function() {
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

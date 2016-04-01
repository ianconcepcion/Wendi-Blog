$(document).ready(function() {
	 // Window Resize
	$(window).resize(function(){
		var $winWidth = $(window).width();
		if($winWidth > 880){
			$('body').removeClass('nav-open');
		}
	});

    // Mobile Nav
    $('.hamburger').click(function(e) {
        e.preventDefault();
        toggleMenu();
    });
    
    function toggleMenu() {
        $('body').toggleClass('nav-open');
    }
    
    $('.site-cache').click(function(e){
      $('body').removeClass('nav-open');
    });


    /* Search Form */
    // $('.search-icon').click(function(e) {
    //     $('.search-wrapper').addClass('modal-open');
    //     $('body').addClass('modal-open');
    // });
    // $('.modal-close').click(function(e) {
    //     $('.search-wrapper').removeClass('modal-open');
    //     $('body').removeClass('modal-open');
    // });

    $('.search-icon').click(function(e) {
        $('.search-form').addClass('show-form');
        $('body').addClass('modal-open');
    });
    $('.modal-close').click(function(e) {
        $('.search-form').removeClass('show-form');
        $('body').removeClass('modal-open');
    });

    /* Scroll to Top button */
    var scrollButton = $("#scroll-top");
    $(window).scroll(function () {
        $(this).scrollTop() >= 500 ? scrollButton.css({
            '-webkit-transform': 'translate3d(0, 0, 0)',
            '-moz-transform': 'translate3d(0, 0, 0)',
            '-o-transform': 'translate3d(0, 0, 0)',
            'transform': 'translate3d(0, 0, 0)'
        }) : scrollButton.css({
            '-webkit-transform': 'translate3d(0, 140%, 0)',
            '-moz-transform': 'translate3d(0, 140%, 0)',
            '-o-transform': 'translate3d(0, 140%, 0)',
            'transform': 'translate3d(0, 140%, 0)'
        });
    });
    
    scrollButton.click(function () {
        $("html,body").animate({ scrollTop: 0 }, 600);
    });
});

//Loading Screen 
$(window).load(function () {
//Show The Scroll
$(".page-overlay .spinner").fadeOut(130,function() {
  $(this).parent().fadeOut(1000, function () {
    $(this).remove();
    });
  });
});
//End Loading Screen 

// LIGHT SLIDER
$(document).ready(function() {
    $('#content-slider').lightSlider({
        item:4,
        loop:false,
        slideMove:2,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed:600,
        responsive : [
            {
                breakpoint:800,
                settings: {
                    item:3,
                    slideMove:1,
                    slideMargin:6,
                  }
            },

            {
                breakpoint:767,
                settings: {
                    item:2,
                    slideMove:1
                  }
            },

            {
                breakpoint:480,
                settings: {
                    item:1,
                    slideMove:1
                  }
            }
        ]
    });  
});
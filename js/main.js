
jQuery(document).ready(function($){

    //set the height in service box
    var h = $('.service-wrap').height();
    $('.service-image').height(h);
    $('.controls').height(h);

    // limit text content in blog box
    var txt = $('.blog-grid-text').text();
    if(txt.length > 240) {
        $('.blog-grid-text').text(txt.substring(0,235) + ' ...');
    }

    //page scrolling feature
    $(function() {
        $('.page-scroll a').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 2000, 'easeInOutExpo');
            event.preventDefault();
        });
    });

    var lastId,
    topMenu = $(".menu"),
    topMenuHeight = topMenu.outerHeight(),
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

    //back to top component
    $( window ).scroll( function() {
    	if ( $( this ).scrollTop() > 800 ) {
    		$( '.back-to-top' ).addClass( 'show-back-to-top' );
    	} else {
    		$( '.back-to-top' ).removeClass( 'show-back-to-top' );
    	}
    });
    $( '.back-to-top' ).click( function() {
    	$( 'html, body' ).animate( { scrollTop : 0 }, 1500, "swing" );
    	return false;
    });
    $('.back-to-top').each(function() {
        animationHover(this, 'bounce');
    });

    function animationHover(element, animation){
        element = $(element);
        element.hover(
            function() {
                element.addClass('animated ' + animation);
            },
            function(){
                //wait for animation to finish before removing classes
                window.setTimeout( function(){
                    element.removeClass('animated ' + animation);
                }, 2000);
            });
    }

    //initialize masonry grid
    var grid = $('.grid-wrap');
    grid.isotope({
        itemSelector: '.grid-item',
        layoutMode: 'fitRows',
        filter: '*',
        transitionDuration: '1s'
    });

    $(document).on('click','.filter-item',function(){
		$('.filter-item.active').removeClass('active');
		$(this).addClass('active');
		var f = $(this).data('filter');
		grid.isotope({filter: f});
	});

    //initialize owl carousel for header hero slider
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items: 1,
        nav: true,
        lazyLoad:true,
        loop: true,
        dots: false,
        lazyLoad: true,
        autoplay: true,
        autoplayTimeout: 9000,
        autoplaySpeed: 3000,
        navSpeed: 2500,
        mouseDrag: false
    });
    $( ".owl-prev").html('<img id="arrow1" src="images/arrow-left.png"><img id="arrow2" src="images/arrow-left-white.png">');
    $( ".owl-next").html('<img id="arrow3" src="images/arrow-right.png"><img id="arrow4" src="images/arrow-right-white.png">');

    $('.case-slider').slick({
        arrows: false,
        dots: true,
        draggable: false
    });

    var imagelink = $('#image-link0').val();
    $('.case-image-inner').css('background-image', 'url('+imagelink+')');

    $('.case-slider').on('afterChange', function(event, slick, direction){
      var currentSlide = $(this).slick('slickCurrentSlide');
      imagelink = $('#image-link'+currentSlide).val();
      $('.case-image-inner').css('background-image', 'url('+imagelink+')');

    });

    // ==== Animation scoop here =======
    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    window.sr = ScrollReveal({ reset: false });

    // owl.on('change.owl.carousel', function(e) {
    //     $('.slider-heading').fadeOut(500).delay(2000).fadeIn(1000);
    //     $('.theme-bar').fadeOut(500).delay(2000).fadeIn(2000);
    //     $('.slider-text').fadeOut(500).delay(2000).fadeIn(2000);
    //     $('.slider-btn').fadeOut(500).delay(2000).fadeIn(2000);
    //     e.preventDefault();
    // });

    sr.reveal('.about-wrap', { reset: false, duration: 2000 });

    sr.reveal('.history-image', {
        duration: 2000,
        beforeReveal: function (domEl) {
            $('.history-image').addClass('animated fadeInLeft').one(animationEnd, function(){
                $(this).removeClass('animated fadeInLeft');
            });
        }
    }, 500);
    sr.reveal('.history-info', {
        duration: 2000,
        beforeReveal: function (domEl) {
            $('.history-info').addClass('animated fadeInRight').one(animationEnd, function(){
                $(this).removeClass('animated fadeInRight');
            });
        }
    }, 500);

    sr.reveal('.sequence', { duration: 2000 }, 500);

    sr.reveal('.grid-item', {
        duration: 1000,
        beforeReveal: function (domEl) {
            grid.imagesLoaded(function(){
                grid.isotope();
            });
        }
    }, 500);

    sr.reveal('.stats-wrap', {
        reset: true,
        duration: 1000,
        beforeReveal: function (domEl) {
            $('.stats-count').each(function () {
                $(this).prop('Counter',0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 3000,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            });
        }
    });
    sr.reveal('.pricing-wrap', { reset: false, duration: 2000 } );
    sr.reveal('.pricing-box', { reset: false, duration: 2000 }, 1000);

});

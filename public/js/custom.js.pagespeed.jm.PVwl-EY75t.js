"use strict";
$(document).ready(function() {
    var trigger = $('.hamburger'),
        overlay = $('.overlay'),
        isClosed = false;
    trigger.click(function() {
        hamburger_cross();
    });

    function hamburger_cross() {
        if (isClosed == true) {
            overlay.hide();
            trigger.removeClass('is-open');
            trigger.addClass('is-closed');
            isClosed = false;
        } else {
            overlay.show();
            trigger.removeClass('is-closed');
            trigger.addClass('is-open');
            isClosed = true;
        }
    }
    $('[data-toggle="offcanvas"]').click(function() {
        $('#wrapper').toggleClass('toggled');
    });
    $(window).load(function() {
        $(".green-preloader").delay(1000).fadeOut(600);
    });
    var mockupSlider = $("#mockup-slider");
    var mockupSliderTitles = $("#mockup-slider-titles");
    mockupSlider.owlCarousel({
        singleItem: true,
        autoPlay: true,
        navigation: false,
        pagination: false
    });
    mockupSliderTitles.owlCarousel({
        singleItem: true,
        autoPlay: true,
        navigation: false,
        pagination: false
    });
    $(".next").click(function() {
        mockupSlider.trigger('owl.next');
        mockupSliderTitles.trigger('owl.next');
    });
    $(".prev").click(function() {
        mockupSlider.trigger('owl.prev');
        mockupSliderTitles.trigger('owl.prev');
    });
    var x = $(window).height();
    $("#asd").css("min-height", x);
    $("#wel").css("min-height", x);
    $("#abt").css("min-height", x);
    $("#ser").css("min-height", x);
    $("#por").css("min-height", x);
    $("#tes").css("min-height", x);
    $("#con").css("min-height", x);
    $("#tem").css("min-height", x);
});
$('.work').magnificPopup({
    delegate: 'a.zoom',
    type: 'image',
    fixedContentPos: false,
    removalDelay: 300,
    mainClass: 'mfp-fade',
    gallery: {
        enabled: true,
        preload: [0, 2]
    }
});
$('.popup-img').magnificPopup({
    type: 'image',
    removalDelay: 300,
    mainClass: 'mfp-fade'
});
$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
});
var $grid = $('.grid').isotope({
    layoutMode: 'masonry'
});
$('.filter-button-group').on('click', 'li', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({
        filter: filterValue
    });
});
$(".filter-button-group").each(function(t, e) {
    var i = $(e);
    i.on("click", "li", function() {
        i.find(".active").removeClass("active"), $(this).addClass("active")
    })
});
$(".login").click(function() {
    $('#login_box').addClass('on');
});
$(".abc").click(function() {
    $('#login_box').removeClass('on');
});
$(".reg").click(function() {
    $('#reg_box').addClass('on');
});
$(".abc").click(function() {
    $('#reg_box').removeClass('on');
});
$('.progress-bar > span').each(function() {
    var $this = $(this);
    var width = $(this).data('percent');
    $this.css({
        'transition': 'width 2s'
    });
    setTimeout(function() {
        $this.appear(function() {
            $this.css('width', width + '%');
        });
    }, 500);
});
$("#add").validate({
    rules: {
        phone: {
            required: true,
            digits: true,
            minlength: 10,
        },
        name: {
            required: true,
            minlength: 2,
        },
        subject: {
            required: true,
            minlength: 5,
        },
        email: {
            required: true,
            email: true
        },
        address: {
            required: true,
        },
        State: {
            required: true,
        },
        upload: {
            required: true,
        },
        country: {
            required: true,
        },
        message: {
            minlength: 5,
            required: true,
        },
    },
    errorElement: 'div',
    errorPlacement: function(error, element) {
        var placement = $(element).data('error');
        if (placement) {
            $(placement).append(error)
        } else {
            error.insertAfter(element);
        }
    }
});

function myFunction() {
    var x = document.getElementById("snackbar")
    x.className = "show";
    setTimeout(function() {
        x.className = x.className.replace("show", "");
    }, 2000);
}
// $(document).ready(function() {
// 	$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
// 		disableOn: 700,
// 		type: 'iframe',
// 		mainClass: 'mfp-fade',
// 		removalDelay: 160,
// 		preloader: false,
// 		fixedContentPos: false
// 	});
// });

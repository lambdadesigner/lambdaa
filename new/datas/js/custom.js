// Universal Variables 
var windowsheight = $(window).height();
//jQuery to collapse the navbar on scroll

$(window).bind('mousewheel', $.proxy(function(e){
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
},this));

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Margin top to content text
$(window).load(function(){
    var dividedwindowsheight = windowsheight / 7.5;
    $('.ContentTop').css('margin-top', dividedwindowsheight + 'px' );
})

$(function() {
    $( "#accordion" ).accordion();
});
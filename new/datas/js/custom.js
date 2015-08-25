// Universal Variables 
var windowsheight = $(window).height();
var windowswidth = $(window).width();
//jQuery to collapse the navbar on scroll

$(window).bind('mousewheel', $.proxy(function(e){
	/*if ($(".navbar").offset().top > 50) {
		$(".navbar-fixed-top").css('background' , 'red');
	} else {
		 $(".navbar-fixed-top").css('background' , 'red');
	}*/
	// alert(document.location.href.indexOf("Home"));
	if(document.location.href.indexOf("Home") > 0)
	{
	   $(".navbar-fixed-top").removeClass('top-nav-collapse');
	}
	else
	{
		$(".navbar-fixed-top").addClass('top-nav-collapse');
	}    
},this));

$(function(){
	$(window).on("touchstart", function(){
		// alert('haaal');
	});
});
$(window).trigger('touchstart');

$(function(){    
	$(document).keydown(function(e) {
		switch(e.which) {
			case 40: 
			if(document.location.href.indexOf("Home") > 0)
				{
				   $(".navbar-fixed-top").removeClass('top-nav-collapse');
				}
				else
				{
					$(".navbar-fixed-top").addClass('top-nav-collapse');
				}  
			break;

			case 38: 
				if(document.location.href.indexOf("Home") > 0)
				{
				   $(".navbar-fixed-top").removeClass('top-nav-collapse');
				}
				else
				{
					$(".navbar-fixed-top").addClass('top-nav-collapse');
				}  
			break;

			default: return; // exit this handler for other keys
		}
		e.preventDefault(); // prevent the default action (scroll / move caret)
	});
});

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


$(function(){
	$('.lambdalogo').css('margin-left', windowswidth / 4 + 'px');
	// alert('lambdalogo')
});

// Accordion JS 
//uses classList, setAttribute, and querySelectorAll
//if you want this to work in IE8/9 youll need to polyfill these
(function(){
	var d = document,
	accordionToggles = d.querySelectorAll('.js-accordionTrigger'),
	setAria,
	setAccordionAria,
	switchAccordion,
  touchSupported = ('ontouchstart' in window),
  pointerSupported = ('pointerdown' in window);
  
  skipClickDelay = function(e){
    e.preventDefault();
    e.target.click();
  }

		setAriaAttr = function(el, ariaType, newProperty){
		el.setAttribute(ariaType, newProperty);
	};
	setAccordionAria = function(el1, el2, expanded){
		switch(expanded) {
      case "true":
      	setAriaAttr(el1, 'aria-expanded', 'true');
      	setAriaAttr(el2, 'aria-hidden', 'false');
      	break;
      case "false":
      	setAriaAttr(el1, 'aria-expanded', 'false');
      	setAriaAttr(el2, 'aria-hidden', 'true');
      	break;
      default:
				break;
		}
	};
//function
switchAccordion = function(e) {
	e.preventDefault();
	var thisAnswer = e.target.parentNode.nextElementSibling;
	var thisQuestion = e.target;
	if(thisAnswer.classList.contains('is-collapsed')) {
		setAccordionAria(thisQuestion, thisAnswer, 'true');
	} else {
		setAccordionAria(thisQuestion, thisAnswer, 'false');
	}
  	thisQuestion.classList.toggle('is-collapsed');
  	thisQuestion.classList.toggle('is-expanded');
		thisAnswer.classList.toggle('is-collapsed');
		thisAnswer.classList.toggle('is-expanded');
 	
  	thisAnswer.classList.toggle('animateIn');
	};
	for (var i=0,len=accordionToggles.length; i<len; i++) {
		if(touchSupported) {
      accordionToggles[i].addEventListener('touchstart', skipClickDelay, false);
    }
    if(pointerSupported){
      accordionToggles[i].addEventListener('pointerdown', skipClickDelay, false);
    }
    accordionToggles[i].addEventListener('click', switchAccordion, false);
  }
})();

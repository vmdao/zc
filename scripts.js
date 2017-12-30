function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

//Fixed header
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
     //console.log(scroll);
    if (scroll >= 400) {
        //console.log('a');
        $(".header").addClass("fixed");
    } else {
        //console.log('a');
        $(".header").removeClass("fixed");
    }
});
function exitIntent(){
	$(document).mousemove(function(e) {
    	if(getCookie("exitpopup") == ""){
	    	$('#popup').css('left', (window.innerWidth/2 - $('#popup').width()/2));
			$('#popup').css('top', '60px');
			if(e.pageY <= 5){
				setCookie("exitpopup", 1, 365);
				$('#popup').slideDown();
				$('#overlay').fadeIn();
			}
		}
	});
}
// Slider
jQuery(document).ready(function($) {
    var $slider = $('.news-slider').unslider({
        autoplay: true,
        delay: 5000,
        arrows: false
    });

    $slider.on('mouseover', function() {
        $slider.unslider('stop');
    }).on('mouseout', function() {
        $slider.unslider('start');
    });
    var timerIntent = setTimeout("exitIntent();", 1000);
	$('#overlay, #close').on('click', function(){
		$('#popup').fadeOut();
		$('#overlay').fadeOut();
	});
	/*$('a[rel="external"]').on('click touchstart', function() {
        openTab($(this).attr('href'));
    });*/
});
$(function() { 
	$('.banner').unslider();
	//navigation
	$('#toggle').on('click tuchend', function() {
	    $('.navigation').slideToggle(200, function() {
	    // Animation complete.
	    });
	});
	$('#toggle-m').on('click tuchend', function() {
	    $('.navigation').slideToggle(200, function() {
	    // Animation complete.
	    });
	});
	if($(window).width() < 800){
		$('#popup, #overlay').remove();
	}
	$('.button, .btn').on('click', function(){
		gtag('event', 'button', {'name': ''+$(this).text()+''});
		fbq('trackCustom', 'button', {'name': ''+$(this).text()+''});
	});
	$('.form__submit').on('click', function(){
		fbq('track', 'Lead');
	});
});

// Smooth scroll to content
/*$(".goto-whatis").click(function() {
    $('html,body').animate({
        scrollTop: $("#whatis").offset().top},
        'slow');
    return false;
});*/

// Countdown timer
var now = new Date();
	var nowUTC = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds());
function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(nowUTC);
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var deadline = new Date(Date.parse(nowUTC) + 15 * 24 * 60 * 60 * 1000);
var deadline = '11/21/2017 13:00';

if($('#topCounter').length>0){
	initializeClock('topCounter', deadline);
}
$(".btn-roadmap").on('click touchstart', function() {
    $('html,body').animate({
        scrollTop: $(".section--roadmap").offset().top},
        'slow');
    return false;
});
$(".btn-team").on('click touchstart', function() {
    $('html,body').animate({
        scrollTop: $("#team").offset().top},
        'slow');
    return false;
});
$(".goto-whatis").on('click touchstart', function() {
    $('html,body').animate({
        scrollTop: $("#whatis").offset().top},
        'slow');
    return false;
});
$(".btn-contact").on('click touchstart', function() {
    $('html,body').animate({
        scrollTop: $("#contact").offset().top},
        'slow');
    return false;
});
$(".btn-media").on('click touchstart', function() {
    $('html,body').animate({
        scrollTop: $("#media").offset().top-100},
        'slow');
    return false;
});
// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$(document).ready(function (){

	$('body').scrollspy({
  		target: '#navlist'
	});

	$("#amjump").click(function() {
	    $('html, body').animate({
	        scrollTop: $(".about").offset().top
	    }, 1200);
	});

    $("#whjump").click(function() {
    	$('html, body').animate({
        	scrollTop: $(".workexp").offset().top
    	}, 1200);  	
	});

	$("#expjump").click(function() {
    	$('html, body').animate({
        	scrollTop: $(".experience").offset().top
    	}, 1200);  	
	});

	$("#examplejump").click(function() {
    	$('html, body').animate({
        	scrollTop: $(".portfolio").offset().top
    	}, 1200);  	
	});

	$("#edujump").click(function() {
    	$('html, body').animate({
        	scrollTop: $(".education").offset().top
    	}, 1200);  	
	});

	$("#cmjump").click(function() {
    	$('html, body').animate({
        	scrollTop: $(".contact").offset().top
    	}, 1200);  	
	});
	AOS.init({
	  duration: 1500,
	})

	$(function() {
    
    var $meters = $(".skill > span");
    var $section = $('.codexp');
    var $queue = $({});
    
    function loadDaBars() {
        $meters.each(function() {
            var $el = $(this);
            var origWidth = $el.width();
            $el.width(0);
            $queue.queue(function(next) {
                $el.animate({width: origWidth}, 800, next);
            });
        });
    }
    
    $(document).bind('scroll', function(ev) {
        var scrollOffset = $(document).scrollTop();
        var containerOffset = $section.offset().top - window.innerHeight;
        if (scrollOffset > containerOffset) {
            loadDaBars();
            // unbind event not to load scrolsl again
            $(document).unbind('scroll');
        }
    });
    
});
});






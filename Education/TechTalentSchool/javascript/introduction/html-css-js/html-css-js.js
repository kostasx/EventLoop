var i=0;
$(document).ready(function () {
	
	var loc = window.location.href+'';
	if (loc.indexOf('http://')==0){
		window.location.href = loc.replace('http://','https://');	// https redirect
	}
	
	$("a").each(function() {
		/*
		if ((window.location.pathname.indexOf($(this).attr('href'))) > -1) {
			$(this).addClass('active');
		}
		*/
		if ((window.location.pathname == $(this).attr('href'))) {
			$(this).addClass('active');
		}
	});
	if ((window.location.pathname.indexOf("html")) == 1) {
		$('body').addClass('htmlpage');
	}
	if ((window.location.pathname.indexOf("css")) == 1) {
		$('body').addClass('csspage');
	}
	if ((window.location.pathname.indexOf("js")) == 1) {
		$('body').addClass('jspage');
	}
    $(".tabz .html").mouseover(function(event) {
        $("#tabContainer").addClass("htmlhovered");
        $("#tabContainer").removeClass("csshovered");
        $("#tabContainer").removeClass("jshovered");
    });
    $(".tabz .css").mouseover(function(event) {
        $("#tabContainer").removeClass("htmlhovered");
        $("#tabContainer").addClass("csshovered");
        $("#tabContainer").removeClass("jshovered");
    });
    $(".tabz .js").mouseover(function(event) {
        $("#tabContainer").removeClass("htmlhovered");
        $("#tabContainer").removeClass("csshovered");
        $("#tabContainer").addClass("jshovered");
    });
    $("#tabContainer").mouseleave(function(event) {
        $("#tabContainer").removeClass("htmlhovered");
        $("#tabContainer").removeClass("csshovered");
        $("#tabContainer").removeClass("jshovered");
    });	
	
	
	$(".subtabz a").each(function() {
		//if ($(this).attr("href") == (window.location.pathname)) {
		if (window.location.pathname.indexOf($(this).attr("href")) != -1) {
			$(this).addClass('activeMenuItem');
		}
	});
	
	$("ul.generatorList a").each(function() {
		if ($(this).attr("href") == (window.location.pathname)) {
			$(this).addClass('activeGenerator');
		}
	});	
	
    $('.shares a').each(function() {
      var value = $(this).attr('href');
      console.log(value);
      $(this).attr('href', value.replace('https://html-css-js.com/',$(location).attr('href')));
    });
	
	$(".sendToSidebar").each(function() {                // send to sidebar
		$(this).appendTo('#sidebarContent');
	});	
	
});

/*Scroll to top when arrow up clicked BEGIN*/
$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('#back2Top').fadeIn();
    } else {
        $('#back2Top').fadeOut();
    }
});
$(document).ready(function() {
	
    $(".listLayout").click(function(event) {
        $('.linkListView a').removeClass('active');
        $(this).addClass('active');
        $('.bannerLinks').removeClass('showThumbs');		
	});
    $(".thumbnailLayout").click(function(event) {
        $('.linkListView a').removeClass('active');
        $(this).addClass('active');
        $('.bannerLinks').addClass('showThumbs');		
	});
	
	
    $("#back2Top").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

});
 /*Scroll to top when arrow up clicked END*/
$(document).on("pageload",function() {
	initiateScripts();
});
$(document).ready(function() {
	initiateScripts();
});
function initiateScripts(){
	$('[data-swipe="right"]').click(function() {
		toggleLeftSideBar();
	});
	$('[data-swipe="left"]').click(function() {
		toggleRightSideBar();
	});
	buildSwiper();
}
function buildSwiper(){
	var h = $(document).height() - ($("header").height() + $("#main_bar").height() + $("#sub_bar").height());
	$('.swiper-container').height(h);
	var loadedSlides = new Array();
	var mySwiper = $('.swiper-container').swiper({
		onFirstInit: function(s){
			if(typeof slides[1]!='undefined'){
				$(".swiper-wrapper").load(slides[1],function(r1){
					$(".swiper-wrapper").load(slides[0],function(r2){
						$(".swiper-wrapper").append(r1);
						mySwiper.reInit();
						loadedSlides.push(slides[0]);
						loadedSlides.push(slides[1]);
					});
				});
			} else {
				$(".swiper-wrapper").load(slides[0],function(r2){
					mySwiper.reInit();
					loadedSlides.push(slides[0]);
				});
			}
			$('.slides_left').html(slides.length);
		},
		onSlideNext: function(s){
			if(typeof slides[mySwiper.activeIndex+1]!='undefined' && slides.length > loadedSlides.length){
				$.get(slides[mySwiper.activeIndex+1]+".html",function(data){
					loadedSlides.push(slides[mySwiper.activeIndex+1]);
					var newSlide = mySwiper.createSlide($(data).html());
					newSlide.append();
				});
			}
		},
		onSlideChangeEnd: function(s,d){
			var actual_slide = parseInt($('.actual_slide').html());
			d=='next'?$('.actual_slide').html((actual_slide+1)):$('.actual_slide').html((actual_slide-1));
		}
	});
	$("#sub_bar .arrow-right").bind("click",function(){
		mySwiper.swipeNext();
	});
	$("#sub_bar .arrow-left").bind("click",function(){
		mySwiper.swipePrev();
	});
	window.onresize = function(event) {
		var h = $(document).height() - ($("header").height() + $("#main_bar").height() + $("#sub_bar").height());
		$('.swiper-container').height(h);
		mySwiper.reInit();
	};
}
function contentSwipeLeftHandler(event){
	var position = $(".ui-page-active .content").hasClass("open-right") ? 'left' : ($(".ui-page-active .content").hasClass("open-left") ? 'right' : 'center');
	switch(position){
	case 'center':
		toggleRightSideBar();
		break;
	case 'right':
		toggleLeftSideBar();
		break;
	}
}
function contentSwipeRightHandler(event){
	var position = $(".ui-page-active .content").hasClass("open-right") ? 'left' : ($(".ui-page-active .content").hasClass("open-left") ? 'right' : 'center');
	switch(position){
	case 'center':
		toggleLeftSideBar();
		break;
	case 'left':
		if(event.target.className == 'sidebar-arrow'){
			toggleRightSideBar();
		}
		break;
	}
}
function toggleLeftSideBar(){
	$(".ui-page-active .content").toggleClass("open-left");
	$(".ui-page-active .controls1").toggleClass("active");
	$(".left-sidebar").toggleClass("open");
}
function toggleRightSideBar(){
	$(".ui-page-active .content").toggleClass("open-right");
	$(".ui-page-active .controls2").toggleClass("active");
	$(".right-sidebar").toggleClass("open");
	if(typeof GoogleMap != 'undefined'){
		if(!$("#map_canvas").hasClass("loaded")){
			$(".right-sidebar .sidebar-arrow p").html('Łączenie...');
			var gmap = new GoogleMap();
			gmap.initialize();
		} else {
			$('#map_canvas').removeClass("loading").html('<div class="error">Geolokalizacja wyłączona.</div>');
			$(".right-sidebar .sidebar-arrow p").html('Brak połączenia');
		}
	} else {
		$('#map_canvas').removeClass("loading").html('<div class="error">Geolokalizacja wyłączona.</div>');
		$(".right-sidebar .sidebar-arrow p").html('Brak połączenia');
	}
	window.setInterval(function() {
		var x = $(".right-sidebar .sidebar-arrow p").html();
		if(x=='Ustalanie pozycji...' || x=='Łączenie...'){
			$(".right-sidebar .sidebar-arrow p").html('Błąd połączenia!');
		} else if(x=='Łączenie z Google...'){
			geolocationError();
		}
	}, 10000);
}
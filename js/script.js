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
	var loadedSlides = 0;
	var mySwiper = $('.swiper-container').swiper({
		onFirstInit: function(s){
			$(".swiper-wrapper").load(slides[1]+'.html',function(r1){
				$(".swiper-wrapper").load(slides[0]+'.html',function(r2){
					$(".swiper-wrapper").append(r1);
					mySwiper.reInit();
					loadedSlides = 2;
				});
			});
		},
		onSlideNext: function(s){
			//loadedSlides>mySwiper.activeIndex
			if(typeof slides[mySwiper.activeIndex+1]){
				$.get(slides[mySwiper.activeIndex+1]+".html",function(data){
					var newSlide = mySwiper.createSlide($(data).html());
					newSlide.append();
				});
			}
		}
	});
	
	$("#sub_bar .arrow-right").bind("click",function(){
		mySwiper.swipeNext();
	});
	$("#sub_bar .arrow-left").bind("click",function(){
		mySwiper.swipePrev();
	});
	//var newSlide = mySwiper.createSlide('<p>Hello</p>', 'swiper-slide red-slide', 'span');
	//newSlide.append();
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
	$(".ui-page-active .left-sidebar").toggleClass("open");
}
function toggleRightSideBar(){
	$(".ui-page-active .content").toggleClass("open-right");
	$(".ui-page-active .controls2").toggleClass("active");
	$(".ui-page-active .right-sidebar").toggleClass("open");
	if(typeof GoogleMap != 'undefined'){
		if(!$(".ui-page-active #map_canvas").hasClass("loaded")){
			$(".ui-page-active .right-sidebar .sidebar-arrow p").html('Łączenie...');
			var gmap = new GoogleMap();
			gmap.initialize();
		} else {
			$(".ui-page-active").find('#map_canvas').removeClass("loading").html('<div class="error">Geolokalizacja wyłączona.</div>');
			$(".ui-page-active .right-sidebar .sidebar-arrow p").html('Brak połączenia');
		}
	} else {
		$(".ui-page-active").find('#map_canvas').removeClass("loading").html('<div class="error">Geolokalizacja wyłączona.</div>');
		$(".ui-page-active .right-sidebar .sidebar-arrow p").html('Brak połączenia');
	}
	window.setInterval(function() {
		var x = $(".ui-page-active .right-sidebar .sidebar-arrow p").html();
		if(x=='Ustalanie pozycji...' || x=='Łączenie...'){
			$(".ui-page-active .right-sidebar .sidebar-arrow p").html('Błąd połączenia!');
		} else if(x=='Łączenie z Google...'){
			geolocationError();
		}
	}, 10000);
}
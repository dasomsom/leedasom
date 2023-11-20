window.onload = function(){
	try{
		var controller = new VgControllerClient({
			target_window: document.getElementsByClassName('videoCont').contentWindow
			
		});
		controller.set_repeat_start(10);
		controller.set_repeat_end(20);
		//controller.on('done', function() {
		//	controller.play();
		//});
	}catch(e){
		// Videogateweay Controller Library는 window.postMessage API를 이용하기 때문에
		// 해당 기능을 지원하지 않는 웹브라우져에서는 동작하지 않습니다.
		// 이 부분에 적절한 fail-over 코드를 추가하여 주십시요.
	}
};
$(document).ready(function() {
	$("#inner_contents").parent().css("width","100%");

	/*스크롤 메뉴 */
	var menuId = $('.main_scroll_div');
	var menuIdtop = menuId.offset().top;
	var menuIdHe = menuId.height();
	var no_menuId = $('#no_menu_div');
	var no_menuIdtop = no_menuId.offset().top;
	$(window).scroll(function() {
		if ($(this).scrollTop() >= menuIdtop) { 
			menuId.addClass('menu_fixed');
			menuId.removeClass('bg_RED');
			menuId.find('img.n1').addClass('hide');
			menuId.find('img.n2').removeClass('hide');
			$('#into_edu').css('margin-top','260px');
		} else {
			menuId.removeClass('menu_fixed');
			menuId.addClass('bg_RED');
			menuId.find('img.n1').removeClass('hide');
			menuId.find('img.n2').addClass('hide');
			$('#into_edu').css('margin-top','0px');
		}
	});
	$(window).scroll(function() {
		if ($(this).scrollTop() >= no_menuIdtop) {
			menuId.addClass("hide");
		} else{
			menuId.removeClass("hide");
		}
	});
	menuId.find("li").each(function(){
		var liThis = $(this);
		var divId = liThis.find("a").attr("href");
		var divIdtop = Math.floor($(divId).offset().top-menuIdHe);
		liThis.bind("click", function(e){
			e.preventDefault();
			$('body,html').animate({scrollTop: divIdtop},300);
		});
		$(window).scroll(function(){
			if ($(this).scrollTop() >= divIdtop ) {
				liThis.addClass("Select").siblings().removeClass("Select");
			}
		});
	});
	/*스크롤 메뉴 */

	$(".play_video").on("click",function(){
		$(this).css("display","none");
		if($(this).hasClass('aas') == true){
			$("#video_box .videoCont")[0].src += "http://v.kr.kollus.com/q8YqXq3w?autoplay=1";
		} else if ($(this).hasClass('vidcont1') == true){
			$(".vid1 .videoCont")[0].src += "http://v.kr.kollus.com/lQzsZAc1?autoplay=1";
		} else if ($(this).hasClass('vidcont2') == true){
			$(".vid2 .videoCont")[0].src += "http://v.kr.kollus.com/rn5MZA0u?autoplay=1";
		}
	});

	$("#review_div .thumb").click(function(){
		$(this).parents("#review_div").children(".modal").removeClass("hide");

		//영상 연결
		var i = $(this).parent("li").index();
		var videoSrc = $(this).parents("#review_div").children(".modal").find(".videoCont");

		videoSrc[0].src = "http://v.kr.kollus.com/";
		
		if(i == 0){
			videoSrc[0].src += "/Pv1dZfD9?autoplay=1";
		}else if(i == 1){
			videoSrc[0].src += "/CdRbZfIY?autoplay=1";
		}else if(i == 2){
			videoSrc[0].src += "/Uw6aZfDZ?autoplay=1";
		}else if(i == 3){
			videoSrc[0].src += "/I17bZAsK?autoplay=1";
		}else if(i == 4){
			videoSrc[0].src += "/elunZzCu?autoplay=1";
		}else {
			videoSrc[0].src += "/imcXZApZ?autoplay=1";
		}
	});

	$("#review_div .closed").click(function(){
		$(this).parents("#review_div").children(".modal").addClass("hide");
		var videoSrc = $(this).parents("#review_div").children(".modal").find(".videoCont");
		videoSrc[0].src = "http://v.kr.kollus.com/";
	});

	$(".btn_trans").click(function(){
		$(".img_chage").toggleClass("hide");
		
	});

	/* 패턴식 회화 슬라이더 */
	$('.slider5').bxSlider({
		mode:'fade',					//기본 : horizontal , 위 아래로 : vertical , 흐림효과 : fade
		speed:100,						//슬라이드 속도
		slideWidth: 2500,				//슬라이드 div 가로크기
		minSlides: 2,					//최소 몇개의 슬라이드 DIV 를 보여줄지 설정
		maxSlides: 3,					//최고 몇개의 슬라이드 DIV 를 보여줄지 설정
		moveSlides: 1,					//몇개씩 슬라이드를 이동 시킬지 설정  maxSlides 의 값에 영향을 받음. 3개의 슬라이드가 보여지는 상황에서는 최고값이 2
		slideMargin: 0,					//슬라이드 DIV margin 설정
		auto: false,					//자동 슬라이드 true/false
		nextSelector: '#slider_next',	//슬라이드 무빙기능에 사용될 DIV ID
		prevSelector: '#slider_prev',	//슬라이드 무빙기능에 사용될 DIV ID
		pager:false,					//하단 li 형식의 무빙기능 true/false
		pause: 3000,					//슬라이드 속도 integer 타입으로 입력 1000 = 1초
		autoHover:true					//마우스 오버시 슬라이드 멈춤옵션 true/false
	});

	$(".nav_box").children().find('a').addClass("hide");

	$("#sita_type li").click(function(){
		$("#sita_type li").removeClass("Select");
		$(this).addClass("Select");

		var sel = $(this).index();
		$("#advant02 .slider_contents").addClass("hide");
		$(".nav_box").children().find('a').addClass("hide");

		$("#advant02 .slider_contents").eq(sel).removeClass("hide");
		$(".nav_box #slider_prev").find('a').eq(sel).removeClass("hide")
		$(".nav_box #slider_next").find('a').eq(sel).removeClass("hide")
	});

	$("#sita_type li").eq(0).click();
	/* //패턴식 회화 슬라이더 */
	$('.newsticker').Vnewsticker({
		speed: 700,         //스크롤 스피드
		pause: 2000,        //잠시 대기 시간
		mousePause: true,   //마우스 오버시 일시정지(true=일시정지)
		showItems: 1,       //스크롤 목록 갯수 지정(1=한줄만 보임)
		direction : "Up"    //left=옆으로스크롤, up=위로스크롤, 공란=아래로 스크롤
	});

	//수강후기 슬라이드
	var swiper = new Swiper('.swiper-container', {
		slidesPerView:3,
		spaceBetween: -25,
		loop: true,
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		autoplay: {
			delay: 5000,
			//disableOnInteraction: false,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		}
	});
});
$(function(){
	
	/**
	  * 햄버거 버튼 제어
	  + 메뉴창 띄우기
	------------------------------------------------------------------
	*/
	$(document).ready(function(){
		$('#nav-icon4').click(function(){
			$(this).toggleClass('open');

			$(".hidden-nav").slideToggle(200);
			$(".hidden-nav").css("display","table");
			$(".hidden-nav > .navlist").css({
												"display" : "table-cell",
												"vertical-align" : "middle"
											});
			//메뉴바 생성 및 제거
			if($(this).hasClass('open') == true ){
				$("header .container").children().not($(this)).addClass("open-menu");
				$("header").css({
									"background" : "transparent",
									"boxShadow" : "none"
								});
			} else {
				$("header .container").children().not($(this)).removeClass("open-menu");
				$("header").css({
									"background" : "#100d1b",
									"boxShadow" : "1px 1px 1px #222"
								});
			}
		});
	});


	// menu click 시 -> 부드럽게 올라오는 효과
    $('#navmenu > li > a[href*=#]').on('click', function(e) {
    	e.preventDefault();
    	$('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
    });
    $('.logo > a[href*=#]').on('click', function(e) {
    	e.preventDefault();
    	$('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
    });

    //숨은 메뉴창
	$(".hidden-nav > .navlist > li").click(function(e){
		
		$(".hidden-nav").slideUp(300);
		$('#nav-icon4').toggleClass('open'); //메뉴 아이콘 되돌리기
		// 영역 이동  
		$(this).children("a").attr("href");

		//메뉴바 생성 및 제거
		if($(this).hasClass('open') == true ){
			$("header .container").children().not($(this)).addClass("open-menu");
			$("header").css({
								"background" : "transparent",
								"boxShadow" : "none"
							});
		} else {
			$("header .container").children().not($(this)).removeClass("open-menu");
			$("header").css({
								"background" : "#000",
								"boxShadow" : "1px 1px 1px #222"
							});
		}
	});
});
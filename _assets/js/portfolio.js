$(function(){
	/**
	  * 메뉴바 스크롤 고정	
	------------------------------------------------------------------
	*/
	
		// When the user scrolls the page, execute myFunction 
		window.onscroll = function() {myFunction()};

		// Get the navbar
		var navbar = document.getElementById("navbar");

		// Get the offset position of the navbar
		var sticky = navbar.offsetTop;

		// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
		function myFunction() {
		  if (window.pageYOffset >= sticky) {
		    navbar.classList.add("sticky");
		  } else {
		    navbar.classList.remove("sticky");
		  }
		}
	

	/**
	  * 탭변경
	------------------------------------------------------------------
	*/
	$("#navbar a").click( function(e){
		e.preventDefault();

		$("#cos-body").css("display","block");
		
		//tab 해당 이미지 불러오기 
		var target = $(this).attr('href');
		$(target).removeClass("hidden");
		$(".port_tab > ul").not($(target)).addClass("hidden");
        
        // 선택된 탭 색상 변경
        $(this).addClass("active");
        $("#navbar a").not(this).removeClass("active");
	});

    
    // menu click 시 -> 부드럽게 올라오는 효과
	$('#navbar a[href*=#]').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
    });
        

    // 상품보정 버튼을 클릭했을때 알럿창
    $(".alert-js").click(function(e){
    	e.preventDefault();
    	alert("업로드 준비중입니다.^_^*");
    	$("#cos-body").css("display","none");
    });

    anime({
        targets: '.ml8-2 .circle-img',
        rotateZ: 200,
        duration: 8000,
        easing: "linear",
        loop: true
    });
    
});
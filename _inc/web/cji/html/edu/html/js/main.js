$(document).ready(function() {

   /* S: 사이드바(커리큘럼) my_view_right_scroll_sub.html*/
   $(".right_con_inner_sub").hover(function(){
      navPopOpen();
   });

   $(".link_right_bar").click(function(){
      var idx_quick = $(this).index();
      if(idx_quick == 1 || idx_quick == 2){
         $('.BG_lecture').addClass("open").fadeIn(200);
         //$(this).addClass('open').siblings().removeClass("open");
         $('#curriculum_contents .popup_Div').addClass('close2');
         $(".link_right_bar2 > div").eq('1').removeClass('hide').siblings().addClass("hide");
      }
   });

   $(".link_right_bar2 .btn").click(function(){
      navPopBtn();
      $(window).scrollTop(0);
   });
   $(document).keydown(function(event){
      //ESC키,F5키 입력시 팝업창 종료, 탑으로 이동
      if(event.keycode == 27 || event.which == 27 || event.keycode == 116 || event.which == 116) {
         navPopBtn();
         $(window).scrollTop(0);
      }
   });
   /*  E: 사이드바(커리큘럼) my_view_right_scroll_sub.html*/
   
   /* S: 메뉴리스트 main_menu_ver2.html*/
   var didScroll;
   var lastScrollTop = 0; 
   var delta = 100;
   var navbarHeight = $('.main_login').outerHeight();
   $(window).scroll(function(){
      didScroll = true;
   });
   setInterval(function(){
      if(didScroll){
         hasScrolled();
         didScroll = false;
      }
   }, 250);

   function hasScrolled(){
      var st= $(this).scrollTop();
      if(Math.abs(lastScrollTop - st) <= delta){
         return;
      }
      if(st > lastScrollTop && st > navbarHeight){
         $('.main_login').removeClass('nav-up');
      } else {
         if(st + $(window).height() < $(document).height()){
            $('.main_login').addClass('nav-up');
         }
      }

      if(st <= delta){
         $('.main_login').removeClass('nav-up');
      }
      lastScrollTop = st;
   }

   $('#menu_list td').hover(function(){
      var i = $(this).index();
      $('.menuBox_num1 > li').children('a').removeClass('active');
      $('.bg_sub_menu').hide();
      $('.sub_menu_contain > .contents').hide();
      if(i == 0){
         $('#nvList_pack').show();
         $('.bg_sub_menu').show();
      } else if(i == 1){
         $('#nvLlist_lecture').show();
         $('.bg_sub_menu').show();
         setMenu();
      } else if(i == 2){
         setMenu();
         $('#nvLlist_book').show();
         $('.bg_sub_menu').show();
         $('#nvLlist_book .menuBox_num1 > li').eq(0).children('a').addClass('active');
         
      }
   });
   $('.bg_sub_menu').hover(function(){
      $(this).hide();
      $('.sub_menu_contain > .contents').hide();
      $('.menuBox_num1 > li').children('a').removeClass('active');
   });

   $('#new_topMenu').parent('div').css('position','relative');

   /*$(".my_room_sub li:eq(0)").click(function(){
      location.href='contents_buy.php';
   });
   $(".my_room_sub li:eq(1)").click(function(){
      location.href='my_movie_view.php';
   });
   /* E: 메뉴리스트 main_menu_ver2.html*/

   /* S: TOP 로그인박스 */
   $(".callmodal a").click(function(){
      $("#login_modal_all").removeClass('hide');
      var type= $(this).html();
      var title = $("#tit_loginModal");

      $(".modeDiv").addClass('hide');

      if(type == '로그인'){
         title.text('Login');
         $(".login_all").removeClass('hide');
         $("input[name='member_id']").focus();
      } else if(type == '아이디'){
         title.text('아이디 찾기');
         $(".find_Id").removeClass('hide');
         $("input[name='member_name']").focus();
      }else {
         title.text('비밀번호 찾기');
         $(".find_Pw").removeClass('hide');
         $("input[name='member_id']").focus();
      }
   });
   $(".Bg_close").click(function(){
      $(this).parents('#login_modal_all').addClass('hide')
   });
   /* E: TOP 로그인박스 */


   /* S: TOP 메뉴 강좌리스트 */
   /* 슬라이드 */
   $(".pack_delete").css("left","0");
   $(".packList_box").eq(0).find(".lectTit").addClass('active');
   $(".packList_box").hover(function(){
      $(".lectTit").removeClass("active");
      $(this).find(".lectTit").addClass('active');
   });
   /* 슬라이드 버튼 */
   $("#btn_nvListPack a").click(function(){
      $(".packList_box").find(".lectTit").removeClass('active');
      var pack_delete_left = parseInt($(".pack_delete").css("left").replace("px",""));
      if($(this).hasClass('prev') == true){
         if(pack_delete_left != 0){
            $(".pack_delete").animate({left:pack_delete_left+610+"px"},200);
            //$(".packList_box").eq(0).find(".lectTit").addClass('active');
         }
      }else if($(this).hasClass('next') == true){
         if(pack_delete_left+610 != 0){ // 5개일때 610 ,  4개일때 305
            $(".pack_delete").animate({left:pack_delete_left-610+"px"},200);
            //$(".packList_box").eq(3).find(".lectTit").addClass('active');
         }
      }
      console.log(pack_delete_left);
   });

   /* 강좌/교재 메뉴 */
   $('.menuBox_num1 > li').hover(function(){
      /*1depth*/
      $('.menuBox_num1 > li').children('a').removeClass('active');
      $(this).children('a').addClass('active');
      $(this).toggleClass('bg_gray');

      /*3depth*/
      $('.menuBox_posi').addClass('hide');
      $(this).children('.menuBox_posi').toggleClass('hide');
      
   });

   /* 강좌보기 메뉴 */ 
   $("#nvLlist_lecture .menuBox_num1 > li").hover(function(){
      var sbj_idx = $(this).index();
      /*거침없이중국어*/
      if(sbj_idx == 3){
         $('.menuBox_num2 li').eq(0).children('a').addClass('active');
         $(this).find('.menuBox_num3').css('width', '638px'); //3차 박스 가로 길이 변경

         $('.menuBox_num2 li').hover(function(){
            var i = $(this).index();
            var target = $(".menuBox_num3 > div");
            target.eq(i).removeClass('hide');
            target.not(target.eq(i)).addClass('hide'); 

            $('.menuBox_num2 li').children('a').removeClass('active');
            $(this).children('a').addClass('active');
         });

         if(($('.menuBox_num2 li').eq(0).children('a').hasClass('active') == true) && ($('.menuBox_num2 li').eq(1).children('a').hasClass('active') == true)){
            $('.menuBox_num2 li a').removeClass('active');
            $('.menuBox_num2 li').eq(0).children('a').addClass('active');
         }
      }
   });
   /* E: TOP 메뉴 강좌리스트 */
 
   /* S: 메인 슬라이드 */
   $('.slider4').bxSlider({
		mode:'fade',					//기본 : horizontal , 위 아래로 : vertical , 흐림효과 : fade
		speed:300,							//슬라이드 속도
		slideWidth: 2500,					//슬라이드 div 가로크기
		minSlides: 2,						//최소 몇개의 슬라이드 DIV 를 보여줄지 설정
		maxSlides: 3,						//최고 몇개의 슬라이드 DIV 를 보여줄지 설정
		moveSlides: 1,						//몇개씩 슬라이드를 이동 시킬지 설정  maxSlides 의 값에 영향을 받음. 3개의 슬라이드가 보여지는 상황에서는 최고값이 2
		slideMargin: 0,					//슬라이드 DIV margin 설정
		auto: true,							//자동 슬라이드 true/false
		nextSelector: '#slider-next',		//슬라이드 무빙기능에 사용될 DIV ID
		prevSelector: '#slider-prev',		//슬라이드 무빙기능에 사용될 DIV ID
		pager:true,						//하단 li 형식의 무빙기능 true/false
		pause: 5000,						//슬라이드 속도 integer 타입으로 입력 1000 = 1초
		autoHover:false						//마우스 오버시 슬라이드 멈춤옵션 true/false
	});

	if($(".slide").has(".selSlide").css('display') == 'block'){
		$('.cont_position_L').animate({
			opacity:0,
			top:"130px",
			left: "120px"
		}, 100);
		$('.cont_position_R').animate({
			opacity:0,
			top:"130px",
			left:"-120px"
		}, 200);
	} else{
		$('.cont_position_L').animate({
			opacity:1,
			top:0,
			left: "-35px"
		}, 100);
		$('.cont_position_R').animate({
			opacity:1,
			top:0,
			left:0
		}, 200);
	}
   /* E: 메인 슬라이드 */







   /* 디테일 페이지 - 상단 탭 */
	$(".detail_tab li").each(function(){
		var liThis = $(this);
		var divId = liThis.find("a").attr("href");
		var divIdtop = Math.floor($(divId).offset().top-menuIdHe);
		liThis.bind("click", function(e){
			e.preventDefault();
			$('body,html').animate({scrollTop: divIdtop},300);
		});
		$(window).scroll(function(){
			if ($(this).scrollTop() >= divIdtop ) {
				liThis.addClass("active").siblings().removeClass("active");
			}
		});
	});
});

/*사이드 바(커리큘럼)*/
function navPopOpen(){
   if($('.BG_lecture').hasClass("open") == true){
      $('.right_con').addClass('open');
      $('.pop_eventBadge').addClass('move');
   }else{ 
      $('.right_con').toggleClass('open');
      $('.pop_eventBadge').toggleClass('move');
   }
}
function navPopBtn(){
   $(".link_right_bar2 .btn").addClass('hide').siblings().removeClass("hide");
   $('.BG_lecture').removeClass("open").fadeOut(200);
   $('.right_con, .link_right_bar').removeClass('open');
   $('.pop_eventBadge').removeClass('move');
}
function top_click() { 
   window.scrollTo(0,0);
}
/* S: TOP 로그인박스 */

 /* S: TOP 메뉴 강좌리스트 */
function setMenu(){

   $(".pack_delete").css("left","0");
   $(".packList_box").eq(0).find(".lectTit").addClass('active');

   var target = $('.menuBox_num1 > li');

   /*3depth*/
   $('.menuBox_posi').addClass('hide');
   target.eq(0).find('.menuBox_num3').removeClass('hide');

   /*1depth*/
   target.eq(0).children('.menuBox_posi').removeClass('hide');
   target.eq(0).children('a').addClass('active');

}
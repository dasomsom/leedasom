$(function() {
    /**
      * 배경화면 움직이기
    ------------------------------------------------------------------
    */

    $(document).ready(function() {
        var movementStrength = 150;
        var height = movementStrength / $(window).height();
        var width = movementStrength / $(window).width();
        $(".dust").mousemove(function(e) {
            var pageX = e.pageX - ($(window).width() / 2);
            var pageY = e.pageY - ($(window).height() / 2);
            var newvalueX = width * pageX * -1 - 25;
            var newvalueY = height * pageY * -1 - 50;
            $('.dust').css("background-position", newvalueX + "px     " + newvalueY + "px");
        });
    });
    
    /**
      * #work_port tab
      + 클릭시 해당 이미지로 이동
    ------------------------------------------------------------------
    */

    $(".planet-ico a").click(function(e){
        e.preventDefault();
        // 선택됨을 의미  
        $(this).addClass("tabselec");
        $(this).removeClass("opaci40");
        //tab 해당 이미지 불러오기 
        var target = $(this).attr('href');
        $(target).removeClass("hidden");
        $("#list > div").not($(target)).addClass("hidden");

        if($(this).hasClass("tabselec") == true ){
            $('#work_port').addClass("work-port-ht");
            $("#ico-bg").removeClass("hidden"); ;  // add  background
            $(".planet-ico a").not(this).removeClass("tabselec"); 
            //scale animate
            $(this).find('img').addClass("planet-ico-scale");
            $(".planet-ico a").not(this).find('img').removeClass("planet-ico-scale");
            $(".planet-ico a").not(this).addClass("opaci40"); //opacity
        }
    }); //$(".planet-ico a").click()

    $(".planet-ico a").hover(function(e){
        e.preventDefault();
        //scale animate
        $(this).find('img').addClass("planet-ico-scale");
        $(".planet-ico a").not(this).find('img').removeClass("planet-ico-scale");
        if($(this).hasClass("tabselec") == true ){
            $(this).find('img').addClass("planet-ico-scale");
            $(".planet-ico a").not(this).find('img').removeClass("planet-ico-scale");
        }
    });// $(".planet-ico a").hover()

    $("#show_mv_bg").click(function(e){
        e.preventDefault();
        if ($(this).hasClass("active") == true ){
            push_hide_mv_bg();  //함수 호출
        }
    }); //$("#show_mv_bg").click()

    $("#hide_mv_bg").click(function(e){
        e.preventDefault();
        $(this).hide(200);
    }); //$("#hide_mv_bg").click()

    $(".bg-closed a").click(function(e){
        e.preventDefault();
        $(this).parents("#ico-bg").addClass("hidden");
        $(this).parents('#work_port').removeClass("work-port-ht");  // bg hight
        $(".planet-ico a").removeClass("tabselec");
        $(".planet-ico a").removeClass("opaci40");
        $(".planet-ico a").find('img').removeClass("planet-ico-scale");
        
    }); //$(".bg-closed a").click()

    /**
    ------------------------------------------------------------------
      * aos 플러그인 적용 / circle roop
    ------------------------------------------------------------------
    */
    AOS.init({
        offset: 300,
        easing: 'ease-in-sign',
        duration: 600,
        delay: 250,
    });

    anime({
        targets: '.ml8 .circle-dark-dashed',
        rotateZ: 360,
        duration: 8000,
        easing: "linear",
        loop: true
    });
    
});
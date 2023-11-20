$(function() {
   // $("#topMenu").css({
   //    "width":"100%",
   //    "background": "transparent",
   //    "position": "fixed"
   // });

});


function moveTab(sbj){
   $(".tabmenu_round li").removeClass("active");
   $(".collection_list li").show();

   if(sbj == "all"){
       $(".tabmenu_round #work_all").addClass("active");
       $(".collection_list li").show();
   } else{
       $(".tabmenu_round #work_"+ sbj).addClass("active");
       $(".collection_list li:not('.work_"+ sbj +"')").hide();
   }
}
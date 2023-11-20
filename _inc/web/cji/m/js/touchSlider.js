$(document).ready(function() {
	
	$("#touchSlider").touchSlider({
		flexible : true,
		btn_prev : $("#touchSlider").next().find(".btn_prev"),
		btn_next : $("#touchSlider").next().find(".btn_next"),
		counter : function (e) {
			$("#count").html("current : " + e.current + ", total : " + e.total);
		}
	});
	
	$("#touchSlider2").touchSlider({
		roll : false,
		page : 2,
		speed : 300,
		btn_prev : $("#touchSlider2").next().find(".btn_prev"),
		btn_next : $("#touchSlider2").next().find(".btn_next")
	});
	
	$("#touchSlider3").touchSlider({
		roll : false,
		view : 3,
		btn_prev : $("#touchSlider3").next().find(".btn_prev"),
		btn_next : $("#touchSlider3").next().find(".btn_next")
	});
	
	$("#touchSlider4").touchSlider({
		view : 3,
		btn_prev : $("#touchSlider4").next().find(".btn_prev"),
		btn_next : $("#touchSlider4").next().find(".btn_next")
	});
	
	$("#touchSlider5").touchSlider({
		flexible : true,
		view : 4,
		btn_prev : $("#touchSlider5").next().find(".btn_prev"),
		btn_next : $("#touchSlider5").next().find(".btn_next")
	});
	
	$("#touchSlider6").touchSlider({
		flexible : true,
		initComplete : function (e) {
			$("#touchSlider6_paging").html("");
			var num = 1;
			$("#touchSlider6 ul li").each(function (i, el) {
				if((i+1) % e._view == 0) {
					$("#touchSlider6_paging").append('<button type="button" class="btn_page">page' + (num++) + '</button>');
				}
			});
			$("#touchSlider6_paging .btn_page").bind("click", function (e) {
				var i = $(this).index();
				$("#touchSlider6").get(0).go_page(i);
			});
		},
		counter : function (e) {
			$("#touchSlider6_paging .btn_page").removeClass("on").eq(e.current-1).addClass("on");
		}
	});

	$("#touchSlider7").touchSlider({
		flexible : true,
		initComplete : function (e) {
			$("#touchSlider7_paging").html("");
			var num = 1;
			$("#touchSlider7 ul li").each(function (i, el) {
				if((i+1) % e._view == 0) {
					$("#touchSlider7_paging").append('<button type="button" class="btn_page">page' + (num++) + '</button>');
				}
			});
			$("#touchSlider7_paging .btn_page").bind("click", function (e) {
				var i = $(this).index();
				$("#touchSlider7").get(0).go_page(i);
			});
		},
		counter : function (e) {
			$("#touchSlider7_paging .btn_page").removeClass("on").eq(e.current-1).addClass("on");
		}
	});
	
});
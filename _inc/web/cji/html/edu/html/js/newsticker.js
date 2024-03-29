(function (a){
	a.fn.Vnewsticker = function (b){
		var c = {
			speed : 700, 
			pause : 4000, 
			showItems : 3, 
			mousePause : true, 
			isPaused : false, 
			direction : "left", 
			width : 0
		};
		var b = a.extend(c, b);

		moveUp = function (g, d, e){
			if (e.isPaused) {
				return
			}
			var f = g.children("ul");
			var h = f.children("li:first").clone(true);
			if (e.height > 0) {
				d = f.children("li:first").height()
			}
			f.animate({
				top : "-=" + d + "px"
			},
			e.speed, function ()
			{
				a(this).children("li:first").remove();
				a(this).css("top", "0px")
			});
			h.appendTo(f)
		};

		return this.each(function (){
			var f = a(this);
			var e = 0;
			var u = f.children("ul");
			var l = u.children("li").length;
			var w = u.children("li").width();
			var ulw = l * w + "px";
			f.css({overflow : "hidden"}).children("ul").css({position : "absolute" });

			if (b.width == 0){
				f.children("ul").children("li").each(function ()
				{
					if (a(this).width() > e) {
						e = a(this).height();
						e2 = a(this).width();
					}
				});
				f.children("ul").children("li").each(function ()
				{
					a(this).height(e)
				});
				f.height(e * b.showItems)
			}
			else {
				f.width(b.width)
			}
			var d = setInterval(function ()
			{
				if (b.direction == "left") {
					moveSlide(f, e2, b)
									  u.css({width : ulw})
				} else if (b.direction == "Up") {
					moveUp(f, e, b)
				}
				else {
					moveDown(f, e, b)
				}
			},
			b.pause);

			if (b.mousePause){
				f.bind("mouseenter", function (){
					b.isPaused = true;
				}).bind("mouseleave", function (){
					b.isPaused = false;
				})
			}
		})
	}
})(jQuery);

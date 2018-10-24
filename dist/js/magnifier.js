define(["jquery","jquery-cookie"],function($){
	function magnifier(){
		$(function(){
			$(".product").hover(function(){
				var offsetX = 0;
				var offsetY = 0;
				$(".opacity").css("display","block");
				$(".big").css("display","block");
				$(".product").mousemove(function(ev){
					var e = ev || window.event;

					offsetX = e.pageX - $(".product").offset().left - parseInt($(".opacity").css("width")) / 2;
					offsetY = e.pageY - $(".product").offset().top - parseInt($(".opacity").css("height")) / 2;
					if (offsetX < 0){offsetX = 0;}
					if (offsetX > 100) {offsetX = 100;}
					if (offsetY < 0){offsetY = 0;}
					if (offsetY > 150) {offsetY = 150;}
					$(".opacity").css("left",offsetX + "px");
					$(".opacity").css("top",offsetY + "px");
					$(".big").find("img").css("left",- offsetX * 2 + "px");
					$(".big").find("img").css("top",- offsetY * 2 + "px");
				})
			},function(){
				$(".opacity").css("display","none");
				$(".big").css("display","none");
			})

			$(".product-details-content-left-menu").find("li").mouseover(function(){
				$(".product-details-content-left-menu").find("li").attr("class","");
				$(this).attr("class","active");
				$(".product").find("img").attr("src",$(this).find("img").attr("src"));
				$(".big").find("img").attr("src",$(this).find("img").attr("src"));
			})

			$(".product-details-content-left").find(".right").click(function(){
				$(".product-details-content-left-menu").css("left","-140px");
				return false;
			})
			$(".product-details-content-left").find(".left").click(function(){
				$(".product-details-content-left-menu").css("left","0px");
				return false;
			})
		})
	}
	return{
		magnifier: magnifier
	}
})
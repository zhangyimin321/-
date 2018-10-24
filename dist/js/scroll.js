define(["jquery","jquery-cookie"],function($){
	function scroll(){
		var oBtns = $("#banner").find("ol").find("li");
		var oUl = $("#banner").find("ul");
		var aLis = oUl.find("li");

		// 设置inow代表当前显示图篇的下标
		var iNow = 0;
		var timer = null;

		oBtns.hover(function(){
			iNow = $(this).index();
			aLis.css("z-index","1");
			aLis.eq(iNow).css("z-index","2");
			oBtns.attr("class", "");
			oBtns.eq(iNow).attr("class","active")
			aLis.eq(iNow).fadeIn(600);
		},function(){
			aLis.eq(iNow).siblings("li").css("display","none");
		})


		// 添加自滚动
		timer = setInterval(function(){
			iNow++;
			if (iNow == 5) {
				iNow = 0;
				aLis.css("z-index","1");
			}
			aLis.css("z-index","1");
			aLis.eq(iNow).css("z-index","2");
			oBtns.attr("class", "");
			oBtns.eq(iNow).attr("class","active")
			aLis.eq(iNow).fadeIn(600);
			aLis.eq(iNow).siblings("li").css("display","none");
		}, 3000);

		$("#banner").hover(function(){
				clearInterval (timer);
			}, function(){
				timer = setInterval(function(){
			iNow++;
			if (iNow == 5) {
				iNow = 0;
				aLis.css("z-index","1");
			}
			aLis.css("z-index","1");
			aLis.eq(iNow).css("z-index","2");
			oBtns.attr("class", "");
			oBtns.eq(iNow).attr("class","active")
			aLis.eq(iNow).fadeIn(600);
			aLis.eq(iNow).siblings("li").css("display","none");
		}, 3000);
		})
	}
	return{
		scroll:scroll
	}
})
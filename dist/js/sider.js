define(["jquery","jquery-cookie"],function($){
	function sider(){
		$(function(){
			$(".content-left-link").click(function(){
				if ($(this).find("div").css("display") == "none") {
					$(this).css("background","white");
					$(this).find(".content-left-link-title").find("i").html("&#xe501;");
					$(this).find("div").css("display","block")
				}else{
					$(this).css("background","#e8e6e7");
					$(".content-left-link-title").find("i").html("&#xe50a;");
					$(this).find("div").css("display","none")
				}
				return false;
			})

			$(".nav-bottom-title").hover(function(){
				$("#sider").css("display","block");
			},function(){
				$("#sider").css("display","none");
			})
		})
	}
	return{
		sider: sider
	}
})
define(["jquery","jquery-cookie"],function($){
	function title(){
		$(function(){
			$.ajax({
				url:"data/product-list-title.json",
				success:function(arr){
					for(var i = 0; i < arr.length; i++){
						$(`<dl class="content-right-option-big">
						<dt>${arr[i].title}</dt>
						<dd class="content-right-option-little"></dd>
					</dl>`).appendTo(".content-right-option");
						for(var j = 0; j < arr[i].content.length; j++){
							$(`<span><a href="">${arr[i].content[j]}</a></span>`).appendTo($(".content-right-option-big").eq(i).find("dd"));
						}
						if(arr[i].content.length > 9){
							$(".content-right-option-big").eq(i).css("height","90px")
							$(`<div class="content-right-option-danger"><p>更多<i>&#xe501;</i></p></div>`).appendTo($(".content-right-option-big").eq(i));
							$(".content-right-option-danger").click(function(){
								if ($(this).closest(".content-right-option-big").css("height") == "90px") {
									$(this).closest(".content-right-option-big").css("height","");
									$(this).html("<p>收起<i>&#xe514;</i></p>")
								}else{
									$(this).closest(".content-right-option-big").css("height","90px");
									$(this).html("<p>更多<i>&#xe501;</i></p>")
								}
							})
						}
					}
					var aDls = $(".content-right-option").find("dl");
						for(var i = 0; i < aDls.length; i++){
							if (i > 3) {
							aDls.eq(i).css("display","none");
						}
					}
				},
				error: function(msg){
					console.log("错误" + msg);
				}
			})
			
			$(".content-right-click").find(".down").click(function(){
				var aDls = $(".content-right-option").find("dl");
				for(var i = 0; i < aDls.length; i++){
					if (i > 4) {
						aDls.eq(i).css("display","block");
						$(".content-right-click").find(".down").css("display","none");
						$(".content-right-click").find(".up").css("display","block");
					}
				}
			})
			$(".content-right-click").find(".up").click(function(){
				var aDls = $(".content-right-option").find("dl");
				for(var i = 0; i < aDls.length; i++){
					if (i > 3) {
						aDls.eq(i).css("display","none");
						$(".content-right-click").find(".up").css("display","none");
						$(".content-right-click").find(".down").css("display","block");
					}
				}
			})
		})
	}
	return{
		title: title
	}
})
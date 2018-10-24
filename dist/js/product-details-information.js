define(["jquery","jquery-cookie"],function($){
	function information(){
		$(function(){
			$(".product-details-content-right-QR").hover(function(){
				$(".product-details-content-right-QR").find("img").css("display","block");
			},function(){
				$(".product-details-content-right-QR").find("img").css("display","none");
			})
			$.ajax({
				url:"data/product-details.json",
				success:function(obj){

					$(`<i>${obj.product[0].present}</i>`).appendTo($(".content3-right-title").find("span"));
					for(var i = 0; i < obj.product[0].img.length; i++){
						$(`<li><img src="${obj.product[0].img[i]}" alt=""></li>`).appendTo(".product-details-content-left-menu");
						if (i == 0) {
							$(".product-details-content-left-menu").find("li").eq(i).attr("class","active");
						}
					}
					for(var i = 0; i < obj.list.length; i++){
						$(`<li>
					<a href=""><img src="${obj.list[i].img}" alt=""></a>
					<p><a href="">${obj.list[i].name} ${obj.list[i].describe} ${obj.list[i].specifications}</a></p>
					<p>￥<span>${obj.list[i].present}</span></p>
				</li>`).appendTo($("#content2").find("ul"));
					}
					$("#content2").find("li").hover(function(){
						$(this).find("img").css("opacity","0.5");
					},function(){
						$(this).find("img").css("opacity","1");
					})
				},
				error:function(msg){
					console.log("错误" + msg);
				}
			})
		})
	}
	return{
		information: information
	}
})
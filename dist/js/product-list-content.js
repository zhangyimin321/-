define(["jquery","jquery-cookie"],function($){
	function content(){

		$(function(){
			$.ajax({
				url:"data/product-list-content.json",
				success:function(arr){
					var arr1 = [];
					for(var i = 0; i < arr.length; i++){
						$(`<li class="content-right-product-box">
							<div>
								<div>限时特卖</div>
								<div><i><svg class="icon" aria-hidden="true">
  									<use xlink:href="${arr[i].fromLog}"></use>
								</svg></i><span>${arr[i].from}</span></div>
								<a href=""><img src="${arr[i].img1}" alt=""></a>
								<dl>
									<dd><img src="${arr[i].img1}" alt=""></dd>
									<dd><img src="${arr[i].img2}" alt=""></dd>
									<dd><img src="${arr[i].img3}" alt=""></dd>
								</dl>
							</div>
							<div><i>${arr[i].discount}折</i><em>￥${arr[i].present}</em><span>￥${arr[i].original}</span></div>
							<div><p><span>${arr[i].express}</span><a href="">${arr[i].name}</a></p><a href="">${arr[i].describe}</a><p>${arr[i].specifications}</p><p>${arr[i].volume}</p></div>
							<div id="${arr[i].id}" class="content-right-product-click"><div>立即抢购</div></div>
						</li>`).appendTo(".content-right-product");
						
						
						if ((i + 1) % 3 == 0) {
							$(".content-right-product").find("li").eq(i).css("marginRight","0px");
						}
						arr1.push($(".content-right-product").find("li").eq(i).position());	
					}
					for(var i = 0; i < arr1.length; i++){
						if ((i + 1) % 3 == 0) {
							$(".content-right-product").find("li").eq(i).css("position","absolute");
							$(".content-right-product").find("li").eq(i).css("top",arr1[i].top);
							$(".content-right-product").find("li").eq(i).css("right","0px");
						}else{
						$(".content-right-product").find("li").eq(i).css("position","absolute");
						$(".content-right-product").find("li").eq(i).css("left",arr1[i].left);
						$(".content-right-product").find("li").eq(i).css("top",arr1[i].top);
						}
					}
					$(".content-right-product").find("li").hover(function(){
						$(this).css("z-index","2");
						$(this).find(".content-right-product-click").css("display","block");
						$(this).animate({width:"338px",height:"520px"},100)
					},function(){
						$(this).animate({width:"253px",height:"482px"},100,function(){$(this).css("z-index","1");});
						$(this).find(".content-right-product-click").css("display","none");
					})
					$(".content-right-product").on("mouseover", "li", function(){
						$(this).css("boxShadow","0px 0px 6px 3px #eee");
					})
					$(".content-right-product").on("mouseout", "li", function(){
						$(this).css("boxShadow","0px 0px 0px 0px #eee");
					})





				},
				error:function(msg){
					console.log("错误" + msg);
				}
			})
		})
	}
	return{
		content: content
	}
})
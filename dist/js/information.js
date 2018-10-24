define(["jquery","jquery-cookie"],function($){
	function information(){
		$(function(){
			
			$.ajax({
				url:"data/index.json",
				success:function(obj){
					for(var i = 0; i < obj.content1.length; i++){
						$(`<div class="content1-top-img"><a href=""><img src="${obj.content1[i]}" alt=""></a></div>`).appendTo($("#content1-top"));
					}
					for(var j = 0; j < obj.content2.length; j++){
						$(`<li class = "content2-content-li"><a href=""><img src="${obj.content2[j].img}" alt="">
					<div>
						<p>${obj.content2[j].p1}</p>
						<p>${obj.content2[j].p2}</p>
						<p>${obj.content2[j].p3}</p>
						<p class="click">立即疯抢</p>
					</div>
					</a></li>`).appendTo($(".content2-content"));
					}
					for(var x = 0; x < obj.content3.length; x++){
						$(`<li class="content2-content-lis">
					<a href=""><img src="${obj.content3[x].img}" alt="">
						<div>
							<div>
								<span>剩余</span>
								<span id = 'hour'>00</span>
								<span>:</span>
								<span id = 'min'>00</span>
								<span>:</span>
								<span id = 'sec'>00</span>
							</div>
							<div>${obj.content3[x].p1}</div>
							<div><span>${obj.content3[x].p2}</span>${obj.content3[x].p3}</div>
							<div><span>￥</span><span>${obj.content3[x].p4}</span><span>${obj.content3[x].p5}</span></div>
							<div><p class="click">马上抢</p><span>${obj.content3[x].p6}</span></div>
						</div>
					</a>
					<i>${obj.content3[x].p7}</i>
				</li>`).appendTo($(".content3-content"));
					}
					for(var y = 0; y < obj.content4.length; y++){
						$(`<li class="content4-content-top">
					<h1>${obj.content4[y].p1}</h1>
					
				</li>`).appendTo($(".content4-content"));
						for(var i = 0; i < obj.content4[y].content.length;i++){
							$(`<div>
						<div><img src="${obj.content4[y].content[i].img2}" alt=""></div>
						<a href=""><img src="${obj.content4[y].content[i].img1}" alt=""></a>
						<div>
							<a href="">
								<i>${obj.content4[y].content[i].p1}</i><em>${obj.content4[y].content[i].p2}</em>
							</a>
							<div>
								<i>已售${obj.content4[y].content[i].p3}</i><span>￥${obj.content4[y].content[i].p4}</span><b>￥${obj.content4[y].content[i].p5}</b>
							</div>
						</div>
					</div>`).appendTo($(".content4-content-top").eq(y));
						}
					}
					for(var z = 0; z < obj.content5.length; z++){
						$(`<li>
					<a href="">
						<p>新品上市</p>
						<i><svg class="icon" aria-hidden="true">
  							<use xlink:href="${obj.content5[z].p1}"></use>
						</svg></i>
						<span>${obj.content5[z].p2}</span>
						<img src="${obj.content5[z].img}" alt="">
					</a>
					<div><a href="">${obj.content5[z].p3}</a><a href="">${obj.content5[z].p4}</a></div>
					<div><i>￥${obj.content5[z].p5}</i><em>￥${obj.content5[z].p6}</em></div>
				</li>`).appendTo($(".content5-content"));
					}

				},
				error: function(msg){
					console.log("错误" + msg);
				}
			})


			// $(".content2-content-li").hover(function(){
			// 	$(".content2-content-li").css("boxShadow","0px 0px 5px 1px #666");
			// },function(){
			// 	$(".content2-content-li").css("boxShadow","0px 0px 0px 0px #666");
			// })

			$(".content2-content").on("mouseover", "li", function(){
				$(this).css("boxShadow","0px 0px 5px 8px #eee");
			})
			$(".content2-content").on("mouseout", "li", function(){
				$(this).css("boxShadow","0px 0px 0px 0px #eee");
			})
			$(".content3-content").on("mouseover", "li", function(){
				$(this).css("boxShadow","0px 0px 5px 8px #eee");
			})
			$(".content3-content").on("mouseout", "li", function(){
				$(this).css("boxShadow","0px 0px 0px 0px #eee");
			})

			$("#content1-top").on("mouseover", "div", function(){
				$(this).css("opacity","0.7");
			})
			$("#content1-top").on("mouseout", "div", function(){
				$(this).css('opacity', '1');
			})

		})
	}
	return{
		information: information
	}
})
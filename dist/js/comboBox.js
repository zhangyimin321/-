define(["jquery","jquery-cookie"],function($){
	function comboBox(){
		$(function(){


			// 账户列表弹出
			$(`<ol id = "account-list">
						<li><a href="">我的订单</a></li>
						<li><a href="">我的积分</a></li>
						<li><a href="">我的优惠劵</a></li>
						<li><a href="">我的收藏</a></li>
						<li><a href="">我的评价</a></li>
					</ol>`).appendTo("#header ul li:first-child");
			
			$("#account").hover(function(){
				$("#account-list").animate({height:"175px"},200,"linear");
			}, function(){
				$("#account-list").animate({height:"0px"},200,"linear");
			})

			// 购物车列表弹出
			$(".shopping").css('display', 'none');
			$("#shop").hover(function(){
				pr_msg();
				$(".shopping").css('display', 'block');
			}, function(){
				$(".shopping").css('display', 'none');
			})

			// 二维码弹出
			$("#weixinQR").css('display', 'none');
			$("#weiboQR").css('display', 'none');
			$("#weixin").hover(function(){
				$("#weixinQR").css('display', 'block');
			}, function(){
				$("#weixinQR").css('display', 'none');
			})

			$("#weibo").hover(function(){
				$("#weiboQR").css('display', 'block');
			}, function(){
				$("#weiboQR").css('display', 'none');
			})

			//显示购物车内商品
			function pr_msg(){
				$.ajax({
					url: 'data/product-list-content.json',
					success: function(arr){
						$(".shopping-cart-content-list").html("");
						$(".shopping-top").html("");
						//在所有商品信息里面找出，加入购物车的商品信息
						var cookie_arr = eval($.cookie('goods'));
						for(var i = 0; i < cookie_arr.length; i++){
							$(`<li>
					<div class = "product-img">
						<img src="${arr[cookie_arr[i].id].img1}" alt="">
					</div>
					<div class = "product-title">
						<a href="">${arr[cookie_arr[i].id].name}&${arr[cookie_arr[i].id].describe}&${arr[cookie_arr[i].id].specifications}</a>
					</div>
					<div class = "product-delete"><i>￥${arr[cookie_arr[i].id].present}</i>x${cookie_arr[i].num}<em class="product-delete-click">&#xe628;</em></div>
				</li>`).appendTo(".shopping-top");
						}
					},
					error:function(msg){
						console.log("错误" + msg);
					}
				})
			}
		})
	}
	return{
		comboBox: comboBox
	}
})
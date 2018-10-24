define(["jquery","jquery-cookie"],function($){
	function shopping(){
		$(function(){
			pr_car();
			$(".shopping-cart-a-div").css("display","none");
			$(".shopping-cart-a").hover(function(){
				$(this).find(".shopping-cart-a-div").fadeIn(200);
				$(this).find(".shopping-cart-a-div").animate({left:"-90px"},200)
			},function(){
				$(this).find(".shopping-cart-a-div").fadeOut(200);
				$(this).find(".shopping-cart-a-div").animate({left:"-110px"},200)
			})
			
			$(".shopping-cart-click").click(function(){
				pr_msg();
				$(".shopping-cart-link").css("display","block");
				return false;
			})
			$(".shopping-cart-quit").click(function(){
				$(".shopping-cart-link").css("display","none");
			})

			$(".content-right-product").on("click", ".content-right-product-click", function(){
				//获取到当前加入购物车按钮所在的商品id
				var id = this.id;
				//存储cookie的时候，对于当前商品只存储两个值，id num
				//json格式的字符串去存 goods  [{id:1, num:3},{id:7, num2}];
				//
				//1、判断是否第一次添加cookie
				var first = $.cookie("goods") == null ? true : false;
				if(first){
					$.cookie('goods', `[{id:${id},num:1}]`, {expires: 7,raw:true});
				}else{
					//2、判断之前是否添加过该商品
					var str = $.cookie('goods');
					var arr = eval(str);
					var same = false; //假设没有相同的数据
					for(var i = 0; i < arr.length; i++){
						if(arr[i].id == id){
							//之前添加过
							arr[i].num++;
							var cookieStr = JSON.stringify(arr);
							$.cookie('goods', cookieStr, {expires: 7,raw:true});
							same = true;
							break;
						}
					}
					if(!same){
						//之前没添加过
						var obj = {id: id, num: 1};
						arr.push(obj);
						var cookieStr = JSON.stringify(arr);
						$.cookie('goods', cookieStr, {expires: 7,raw:true});
					}
				}
				pr_car();
				pr_msg();
			})

			$(".shopping-cart-content-list").on("click",".product-delete-click",function(){
				alert($(this).closest("li").attr("class"));
				var str = $.cookie('goods');
				var arr = eval(str);
				var same = false; //假设没有相同的数据
				for(var i = 0; i < arr.length; i++){
					if(arr[i].id == id){
							//之前添加过
						arr[i].num++;
						var cookieStr = JSON.stringify(arr);
						$.cookie('goods', cookieStr, {expires: 7,raw:true});
						same = true;
						break;
					}
				}
				$.cookie('goods', 'id:$(this).closest("li").attr("class")', {expires: -1,raw:true});
				pr_msg();
				pr_car();
			})

			// 购物车数字
			function pr_car(){
				var str = $.cookie("goods");
				if(str){
					var arr = eval(str);
					var sum = 0;
					for(var i = 0; i < arr.length; i++){
						sum += arr[i].num;
					}
					$(".product-num").html(sum);
				}
			}
			
			//显示购物车内商品
			function pr_msg(){
				$.ajax({
					url: 'data/product-list-content.json',
					success: function(arr){
						$(".shopping-cart-content-list").html("");
						$(".shopping-top").html("");
						//在所有商品信息里面找出，加入购物车的商品信息
						var cookie_arr = eval($.cookie('goods'));
						var price = 0;
						for(var i = 0; i < cookie_arr.length; i++){
							$(`<li class="${arr[cookie_arr[i].id].id}">
						<input type="checkbox" />
					<div class = "product-img">
						<img src="${arr[cookie_arr[i].id].img1}" alt="">
					</div>
					<div class = "product-title">
						<a href="">${arr[cookie_arr[i].id].name}&${arr[cookie_arr[i].id].describe}&${arr[cookie_arr[i].id].specifications}</a>
					</div>
					<div class = "product-delete"><i>￥${arr[cookie_arr[i].id].present}</i>x${cookie_arr[i].num}<em class="product-delete-click">&#xe628;</em></div>
				</li>`).appendTo(".shopping-cart-content-list");
							price += parseInt(arr[cookie_arr[i].id].present) * cookie_arr[i].num;
						$(".price").html("￥" + price);
						}
						$(".num").html(cookie_arr.length);
					},
					error:function(msg){
						console.log("错误" + msg);
					}
				})
			}
		})
	}
	return{
		shopping: shopping
	}
})
define(["jquery","jquery-cookie"],function($){
	function nav(){
		$(function(){
			var oSider = $("#sider");
			var aLis = oSider.find("li");
			$.ajax({
				url:"data/nav.json",
				success:function(arr){
					
					for(var i = 0; i < arr.length; i++){
						$(`<div class="sider-right"></div>`).appendTo(aLis[i]);

						for(var j = 0; j < arr[i].length; j++){
							$(`
							<div class = "lump">
								<div class="title"><a href="">${arr[i][j][0]}</a></div>
								<div class="sider-right-content"></div>
							</div>`).appendTo(aLis.eq(i).find(".sider-right"));
							for(var z = 1; z < arr[i][j].length; z++){
								var aLumps = aLis.eq(i).find(".lump");
								$(`<a href="">${arr[i][j][z-1]}</a>`).appendTo(aLumps.eq(j).find(".sider-right-content"))
							}
						}
					}
				},
				error: function(msg){
					console.log("错误" + msg);
				}
			})
			$("#sider").on("mouseover", "li", function(){
				$(this).find(".sider-right").css('display', 'block');
			})
			$("#sider").on("mouseout", "li", function(){
				$(this).find(".sider-right").css('display', 'none');
			})
		})
	}
	return{
		nav: nav
	}
})
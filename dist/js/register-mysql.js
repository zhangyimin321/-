define(["jquery","jquery-cookie"],function($){
	function mysql(){
		$(function(){
			// 注册
			$(".register-content-click").click(function(){

				var str = `username=${$(".register-content-text").val()}&password=${$(".register-content-password").val()}&repassword=${$(".register-content-repassword").val()}`;
				alert(str);
				$.ajax({
					method: "post",
					url: "php/register.php",
					data: str,
					success: function(data){
						alert(data);
					},
					error: function(msg){
						alert(msg);
					}
				})
			})
		})
	}
		return{
		mysql: mysql
	}
})
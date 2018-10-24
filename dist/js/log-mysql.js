define(["jquery","jquery-cookie"],function($){
	function mysql(){
		$(function(){
			//登陆
			$(".log-content-click").click(function(){

				var str = `username=${$(".log-content-text").val()}&password=${$(".log-content-password").val()}`;
				alert(str);
				$.ajax({
					method: "post",
					url: "php/log.php",
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
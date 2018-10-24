define(["jquery","jquery-cookie"],function($){
	function validate(){
		$(function(){
			$(".register-content-text").blur(function(){
				if($(this).val().length == 0){
					$(".register-content-text-hint").text("内容不能为空！");
				}else if(/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/.test($(this).val())){
					$(".register-content-text-hint").text("输入正确。");
				}else if (/^[1][3,4,5,7,8][0-9]{9}$/.test($(this).val())) {
					$(".register-content-text-hint").text("输入正确。");
				}else{
					$(".register-content-text-hint").text("请输入邮箱或手机号码");
				}
			})

			$(".register-content-password").blur(function(){
				if($(this).val().length == 0){
					$(".register-content-password-hint").text("内容不能为空！");
				}else if($(this).val().length < 6 || $(this).val().length > 16){
					$(".register-content-password-hint").text("请输入6~16个字符！");
				}else if (/\W/.test($(this).val())) {
					$(".register-content-password-hint").text("只能写字母数字下划线。");
				}else{
					$(".register-content-password-hint").text("输入正确。");
				}
			})

			$(".register-content-repassword").blur(function(){
				if($(this).val() == $(".register-content-password").val()){
					$(".register-content-repassword-hint").text("输入正确。");
				}else{
					$(".register-content-repassword-hint").text("两次输入的密码不一致！");
				}
			})
		})
	}
		return{
		validate: validate
	}
})
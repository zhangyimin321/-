define(["jquery","jquery-cookie"],function($){
	function code(QR,click){
		$(function(){
			var arr = [];
			function code(){

				for(var i = 0;i < 5;i++){
					var num = parseInt(Math.random() * 100);
					if (num >= 0 && num <= 9) {
						arr.push(num);
					}else if(num >= 17 && num <= 42){
						var str = String.fromCharCode(num + 80);
						arr.push(str);
					}else if(num >= 65 && num <= 90){
						var str = String.fromCharCode(num);
						arr.push(str);
					}else{
						i--;
					}
				}
				$(QR).html(arr.join(""));
				arr = [];
			}
			code();
			$(click).click(function(){
				code();
			})
			$(QR).click(function(){
				code();
			})
		})
	}
		return{
		code: code
	}
})
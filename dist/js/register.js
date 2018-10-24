/*
	配置引入模块的路径
 */
require.config({
	paths:{"jquery":"jquery-1.11.3",
		"jquery-cookie":"jquery.cookie",
		"comboBox":"comboBox",
		"code":"code",
		"mysql":"register-mysql",
		"validate":"validate"
	},
	// 设置模块之间的依赖关系
	shim:{
		"jquery-cookie":["jquery"]
	}
})

require(['comboBox',"code","mysql","validate"],function(comboBox,code,mysql,validate){
	comboBox.comboBox();
	code.code(".register-content-QR",".register-content-code-click");
	mysql.mysql();
	validate.validate();
})
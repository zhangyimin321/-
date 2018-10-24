/*
	配置引入模块的路径
 */
require.config({
	paths:{"jquery":"jquery-1.11.3",
		"jquery-cookie":"jquery.cookie",
		"comboBox":"comboBox",
		"code":"code",
		"mysql":"log-mysql"
	},
	// 设置模块之间的依赖关系
	shim:{
		"jquery-cookie":["jquery"]
	}
})

require(['comboBox',"code","mysql"],function(comboBox,code,mysql){
	comboBox.comboBox();
	code.code(".log-content-QR",".log-content-code-click");
	mysql.mysql();
})
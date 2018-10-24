/*
	配置引入模块的路径
 */
require.config({
	paths:{"jquery":"jquery-1.11.3",
		"jquery-cookie":"jquery.cookie",
		"comboBox":"comboBox",
		"shopping":"shopping"
	},
	// 设置模块之间的依赖关系
	shim:{
		"jquery-cookie":["jquery"]
	}
})

require(['comboBox',"shopping"],function(comboBox,shopping){
	comboBox.comboBox();
	shopping.shopping();
})
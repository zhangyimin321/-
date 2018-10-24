/*
	配置引入模块的路径
 */
require.config({
	paths:{"jquery":"jquery-1.11.3",
		"jquery-cookie":"jquery.cookie",
		"comboBox":"comboBox",
		"scroll":"scroll",
		"nav":"nav",
		"information":"information",
		"shopping":"shopping"
	},
	// 设置模块之间的依赖关系
	shim:{
		"jquery-cookie":["jquery"]
	}
})

require(['comboBox','scroll',"nav","information","shopping"],function(comboBox,scroll,nav,information,shopping){
	comboBox.comboBox();
	scroll.scroll();
	nav.nav();
	information.information();
	shopping.shopping();
})
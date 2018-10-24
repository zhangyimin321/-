/*
	配置引入模块的路径
 */
require.config({
	paths:{"jquery":"jquery-1.11.3",
		"jquery-cookie":"jquery.cookie",
		"comboBox":"comboBox",
		"nav":"nav",
		"shopping":"shopping",
		"sider":"sider",
		"magnifier":"magnifier",
		"information":"product-details-information"
	},
	// 设置模块之间的依赖关系
	shim:{
		"jquery-cookie":["jquery"]
	}
})

require(['comboBox',"nav","shopping","sider","magnifier","information"],function(comboBox,nav,shopping,sider,magnifier,information){
	comboBox.comboBox();
	nav.nav();
	shopping.shopping();
	sider.sider();
	magnifier.magnifier();
	information.information();
})
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
		"product-list-title":"product-list-title",
		"product-list-content":"product-list-content"
	},
	// 设置模块之间的依赖关系
	shim:{
		"jquery-cookie":["jquery"]
	}
})

require(['comboBox',"nav","shopping","sider","product-list-title","product-list-content"],function(comboBox,nav,shopping,sider,title,content){
	comboBox.comboBox();
	nav.nav();
	shopping.shopping();
	sider.sider();
	title.title();
	content.content();
})
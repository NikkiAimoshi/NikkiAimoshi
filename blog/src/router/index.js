import { createRouter,createWebHistory} from "vue-router";		//引入router

import home from "@/views/indexPage.vue"							//引入页面
//const home = () => import("../views/indexPage.vue")				//引入页面
import blogEssay from "@/views/blogEssay.vue"


const router = createRouter({					//然后创建router
  history: createWebHistory(),					//hash模式：createWebHashHistory //history模式：createWebHistory
  base: process.env.BASE_URL,
  routes:[										//router中注册
    {
		path: "",
		name: "home",
		component: home
	},
	{
		path: "/blogEssay",
		name: "blogEssay",
		component: blogEssay
	}
  ]
})

export default router;



/* vue3 router 

	1. 安装vue-router  : npm install vue-router
	2. 在src下创建route文件夹和下面的index.js
	3. 打开index.js 引入router  import { createRouter,createWebHashHistory} from "vue-router";   hash模式:createWebHashHistory history模式:createWebHistory
	4. 引入页面	: import home from "../views/indexPage.vue"  或   const home = () => import("../views/indexPage.vue")
	5. 创建router 并注册：
		const router = createRouter({
		  history: createWebHistory(),					//hash模式：createWebHashHistory //history模式：createWebHistory
		  routes: [
		    {
				path: "/home",
				name: "home",
				component: home
			}
		  ]
		})
	6. 导出router
	7. 在main.js中引入router 并挂载 : createApp(App).use(router)
	8. 使用。。。
	9. App.vue <template>里加<router-view />
*/

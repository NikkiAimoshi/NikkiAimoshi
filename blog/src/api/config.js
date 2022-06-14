export default {
    baseUrl: {
      //dev: "http://43.142.20.103", // 开发环境
		//fat: 'http://43.142.20.103' 
		uat : "http://43.142.20.103"
    },
  };
  
  //建立完成后config.js文件我用来存放后端请求接口地址，http.js封装axios的请求方式，index.js用来所有调用接口的方法
  //config,js文件，可以配置不同环境对应的地址
// api.js

import qs from 'qs';

const baseURL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:9001'
    : process.env.type === 'test'
    ? 'http://localhost:9001'
    : 'http://localhost:9001';

// 创建一个空对象，用于存储全局 token
const globalData = {
  token: '',
};


// 创建请求拦截器
uni.addInterceptor('request', {
  // 请求拦截器的处理函数，每次请求前都会执行
  invoke(request) {
    // 添加 token 到请求头
    if (globalData.token) {
		console.log("找到token了");
      request.header['Authorization'] = `Bearer ${globalData.token}`;
    } else {
      console.error('未找到有效的 token，需要用户登录');
      // 处理登录逻辑，例如跳转到登录页面
      // 如果不跳转登录页面，您也可以在这里触发登录逻辑
      // ...
	  // uni.navigateTo({
	  // 	url:"/pages/tabbar/tabbar-2/tabbar-2"
	  // })
    }
  },
});


function request(config) {
  return new Promise((resolve, reject) => {
	const handleRequest  = () => {
		uni.request({
		  url: config.url,
		  method: config.method,
		  data: config.method === 'post' ? qs.stringify(config.data) : config.data,
		  header: {
			'appkey': '...',
			'token': '...',
			// 其他请求头信息
		  },
		  success: (res) => {
			if (res.statusCode === 200) {
			  resolve(res.data);
			} else {
			  reject(res);
			}
		  },
		  fail: (error) => {
			reject(error);
		  },
		});
	}
  });
}
// 验证token
// if (!globalData.token) {
//   console.error('未找到有效的 token，需要用户登录');
//   // 处理登录逻辑，例如跳转到登录页面
// } else {
//   // 如果验证通过或不需要验证，继续发起请求
//   console.log("验证通过");
//   handleRequest();
// }
	
// 设置全局 token 的函数，用于登录成功后保存 token
function setGlobalToken(token) {
  globalData.token = token;
}

export default {
  baseURL,
  request,
  setGlobalToken
};

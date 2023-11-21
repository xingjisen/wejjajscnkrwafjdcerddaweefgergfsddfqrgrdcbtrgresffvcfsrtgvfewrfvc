// login.js
import api from './api.js';
export function loginSuccessHandler(token) {
	return api.setGlobalToken(token)
}

export async function getLogin(code) {
	console.log("接收到了code", code);
	console.log("地址：", `${api.baseURL}/web/user/login`);
	try {
		const response = await api.request({
			url: `${api.baseURL}/web/user/login`,
			method: 'POST',
			headers: {
				'content-type': 'application/json' //设置请求头请求格式为json
			},
			data: {
				code: code
			},
		});
		console.log("API 请求成功：", response);
		return response;
	} catch (error) {
		console.error("API 请求出错：", error);
		throw error;
	}
}


// export function getItemListAll(datas) {
//     return Axios({
//         url: "/wanxin/as",
//         method: "get",
//         headers: {
//             'Content-Type': 'application/x-www-form-urlencoded' //设置请求头请求格式form
//         },
//         data: datas
//     })
// }

// export function getItemListPage(datas) { 
//     return Axios({
//         url: "/wanxin/as/page" + datas,
//         method: "get",
//     })
// }

// export function getItemCode(datas) {
//     console.log("/wanxin/as/code" + datas);
//     return Axios({
//         url: "/wanxin/as/code" + datas,
//         method: "get",

//     })
// }


// export function submitDateJson(datas) {
//     return Axios({
//         url: "/wanxin/as/submsg",
//         method: "post",
//         headers: {
//             'Content-Type': 'application/json' //设置请求头请求格式为json
//         },
//         datas
//     })
// }
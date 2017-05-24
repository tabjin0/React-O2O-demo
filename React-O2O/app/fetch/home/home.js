import { get } from '../get'

//获取广告数据
export function getAdData() {
	const result = get('/api/homead')
	return result
}

// 获取List列表数据的
export function getListData(city,page) {
	//encodeURIComponent(city)是城市的url编码的形式
	const result = get('/api/homelist/' + encodeURIComponent(city) + '/' + page)
	return result;
}

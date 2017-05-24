import { get } from '../get'

export function getAdData() {
	const result = get('/api/homed')
	return result
}

export function getListData(city,page) {
	const result = get('/api/homelist/' + encodeURIComponent())
	return result;
}

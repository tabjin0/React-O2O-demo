import * as actionTypes from '../constants/userinfo'


//update更新动作
export function update(data) {
	return {
		type: actionTypes.USERINFO_UPDATE,
		data
	}
}
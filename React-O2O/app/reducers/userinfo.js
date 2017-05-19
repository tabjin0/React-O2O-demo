//定义规则userinfo

import * as actionTypes from '../constants/userinfo'

const initialState = {}//初始化状态，暂时为空对象

//返回已经被action更改的信息
export default function userinfo (state = initialState, action) {
	switch (action.type) {
		case actionTypes.USERINFO_UPDATE:
			return action.data
		default:
			return state 
	}
}
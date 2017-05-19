//规则引用文件，通过combineReducers方法将多个规则合并起来

import { combineReducers } from 'redux'
import userinfo from './userinfo'

export default combineReducers({
	userinfo//暂时只有一个规则userinfo
})
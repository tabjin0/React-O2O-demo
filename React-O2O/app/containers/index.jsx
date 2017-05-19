//父组件

import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import LocalStore from '../util/localStore.js'

import { CITYNAME } from '../config/localStoreKey.js'
//***********引用Redux的一些基本方法和相关内容********
import { bindActionCreators } from 'redux'
//connect作为react组件的redux组件的连接方法
import { connect } from 'react-redux'
//引入actions文件夹中的userinfo.js中的更新动作，起名为userInfoActionsFormOtherFile
import * as userInfoActionsFormOtherFile from '../actions/userinfo.js'
//***********引用Redux的一些基本方法和相关内容********
class App extends React.Component {
	constructor(props ,context) {
		super(props, context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		this.state = {
			initDone: false
		}		
	}

	render() {
		return (
			<div>
				{
					//模拟加载
					this.state.initDone ? this.props.children : <div>Sorry,抽风了</div>
				}
			</div>
		)
	}

	componentDidMount() {
		//从localstorage获取城市数据
		let cityName = LocalStore.getItem(CITYNAME)//传入一个key，这个key从localStoreKey.js中获取
		if (cityName == null) {
			cityName = '扬州'
		}
		// console.log(cityName)//测试城市是否获取
		//将城市信息存储到 Redux 中
		this.props.userInfoActions.update({
			cityName: cityName
		})


		//**************模拟加载中************************

		// console.log(this)//App
		// var _that = this
		// setTimeout(function() {
		// 	console.log(this)//Window
		// 	console.log(_that)//App

		// 	// this.setState({
		// 	// 	initDone: true
		// 	// })
		// },1000)

		//原生js写法
		// var _that = this
		// setTimeout(function() {
		// 	_that.setState({
		// 		initDone: true
		// 	})
		// },1000) 
		//测试成功

		//ES6箭头函数
		setTimeout(() => {
			console.log(this)
			this.setState({
				initDone: true
			})
		}, 1000)
		//测试成功，用setTimeout模拟ajax请求数据的过程，ajax通过callback，setTimeout也是通过callback

		//ajax (function() {
			// callback
		// })
		//**************模拟加载中************************
	}
}

//**************根据Rudex的规则更改App组件的export************************

//将state作为属性传入到React中
function mapStateToProps(state) {
	return {
		//先返回空，只是设置城市信息到Redux中，不需要获取state里面的数据来展示
	}
}
//将action作为属性传入到React中
function mapDispatchToProps(dispatch) {
	//传入actions/userinfo.js中的update方法
	return {
		userInfoActions: bindActionCreators(userInfoActionsFormOtherFile, dispatch)//bug：这边写成了dispath
		//已经将获取的actions传递到组价中了，作为函数的属性使用，属性总有一个update函数
	}
}
// export default App
//根据Rudex的规则更改App组件的export，通过conect函数返回的组件App，返回一个函数，然后将App组件传进去
//connect()传入两个参数，第一个参数是函数mapStateToProps,第二个参数是函数mapDispatchToProps
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App)

//**************根据Rudex的规则更改App组件的export************************

//这边initDone初始尾false，那么就一直显示‘Sorry,抽风了’
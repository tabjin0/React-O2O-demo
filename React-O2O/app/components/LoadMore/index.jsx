import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'
class LoadMore extends React.Component {
	constructor(props, context) {
		super(props, context);
	 	this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}

	render() {
		return (
			<div className="load-more" ref="wrapper">
				{
					this.props.isLoadingMore
					?<span>加载中...</span>
					:<span onClick={this.loadMoreHandle.bind(this)}>加载更多</span>
				}
				<span>加载更多</span>
			</div>
		)
	}
	//加载更多函数
	loadMoreHandle() {
		//loadMoreFn作为LoadMore组件的属性由父组件List传入，执行loadMoreData函数，该函数定义位于List.jsx文件中
		this.props.loadMoreFn()
	}

	componentDidMount() {
		//定义函数loadMoreFn
		const loadMoreFn =  this.props.loadMoreFn
		// 下面获取改变的DOM
		const wrapper = this.refs.wrapper
		console.log(wrapper)//测试

		//节流
		let timeoutId
		function callback () {
			// console.log('456')//测试代码
			//触发加载更多的事件loadMoreFn
			const top = wrapper.getBoundingClientRect().top
			// console.log(top)//测试
			const windowHeight = window.screen.height
			console.log(windowHeight)
			if ( top && top < windowHeight){
				//当组件”加载更多“按钮出现在屏幕内部的时候，已经暴露在页面的可视范围之内的时候，top肯定是小鱼屏幕高度的，由此判断触发执行加载更多的函数
				//一开始的时候是不显示”加载更多“按钮的，下拉直到”加载更多“按钮暴露
				loadMoreFn()
			}
		}

		//绑定
		//下面将这一层的this bind进去了
		window.addEventListener('scroll', function() {
			//先检查一下scroll是不是有，用console.log('123')验证
			// console.log('123')//测试代码
			if (this.props.isLoadingMore){
				//如果正在工作中，置之不理，但是也应该劲量避免，因为点击“加载更多”的时候isLoadingMore为true的时候不作处理
				return
			}
			if (timeoutId) {
				 clearTimeout(timeoutId)
			}
			timeoutId = setTimeout(callback, 50)
		}.bind(this), false)
	}
}


export default LoadMore



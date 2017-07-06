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
			<div className="load-more">
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
		//执行loadMoreData函数，该函数定义位于List.jsx文件中
		this.props.loadMoreFn()
	}
}


export default LoadMore



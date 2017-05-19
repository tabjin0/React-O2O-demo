import React from 'react'

import PureRenderMixin from 'react-addons-pure-render-mixin'

class NotFound extends React.Component {
	//这个构造函数是干吗用的，忘了
	constructor(props, context) {
		super(props, context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
	}
	render() {
		return (
			<div>你的小宝贝已经丢失链接，对方不想理你并向你放了一个屁</div>
		)
	}
}

// export default NotFound
//使用require.endure异步加载，不支持ES6的export
module.export = NotFound
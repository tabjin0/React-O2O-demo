import React from 'react'

import PureRenderMixin from 'react-addons-pure-render-mixin'

class ListComponent extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	render() {
		const data = this.props.data //取出从Home/subpage/List组件中传入的数据
		return (
			<div>
				{
					// data is an array ，traverse it
					data.map((item, index) => {
						return <p key={index}>{item.title}</p>
						{/*bug：别忘了在p上添加key，尽管不会error,Warning: Each child in an array or iterator should have a unique "key" prop.*/}
					})
				}
			</div>
		)
	}
}

export default ListComponent
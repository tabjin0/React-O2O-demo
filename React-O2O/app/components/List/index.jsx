import React from 'react'

import PureRenderMixin from 'react-addons-pure-render-mixin'
import ListItem from './Item'

class ListComponent extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	render() {
		return (
			<div>
				{
					// data is an array ，traverse it
					this.props.data.map((item, index) => {
						return <ListItem key={index} data={item} />
						{/*bug：别忘了在p上添加key，尽管不会error,Warning: Each child in an array or iterator should have a unique "key" prop.*/}
					})
				}
			</div>
		)
	}
}

export default ListComponent
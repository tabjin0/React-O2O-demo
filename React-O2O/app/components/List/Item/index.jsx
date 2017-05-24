//将每个商铺封装成一个组件，渲染一个小段落，便于复用

//将item作为element属性传入
import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

class ListItem extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}

	render() {
		return (
			<div className="list-item clear-fix">
				<div>
					<img src={this.props.data.img} alt={this.props.data.title}/>
				</div>
				
			</div>
		)
	}
}

export default ListItem
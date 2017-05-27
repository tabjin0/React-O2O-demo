//将每个商铺封装成一个组件，渲染一个小段落，便于复用

//将item作为element属性传入
import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'
class ListItem extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}

	render() {
		return (
			<div className="list-item-container clear-fix">
				<div className="list-item-img-container float-left">
					<span className="list-item-order float-left">{this.props.data.order}</span>
					<img className="float-left" src={this.props.data.img} alt={this.props.data.title}/>
				</div>
				<div className="list-item-content-container">
					<div className="list-item-title-container clear-fix">
						<h3 className="float-left">{this.props.data.title}</h3>
						<span className="float-right">{this.props.data.distance}</span>
					</div>
					<div className="list-item-subtitle-container clear-fix">
						<span>[{this.props.data.address}] </span>
						<span>{this.props.data.subTitle}</span>
					</div>
					<div className="list-item-price-container clear-fix">
						<span className="list-item-price">￥{this.props.data.price}元</span>
						<span className="list-item-sold-number float-right">已售{this.props.data.number}</span>
						<span className="list-item-preferential-price">{this.props.data.preferential}</span>
					</div>
				</div>
			</div>
		)
	}
}

export default ListItem
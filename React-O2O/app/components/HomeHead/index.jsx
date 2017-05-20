import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class HomeHead extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div id="home-head" className="clear-fix">
            	{/*左*/}
	           	<div className="home-head-left float-left">
	           		<span>{this.props.cityName}</span>
	           		&nbsp;
	           		<i className="icon-down-triangle"></i>
	           	</div>
	           	{/*右*/}
	            <div className="home-head-right float-right">
	            	<i className="icon-user">我</i>
	            </div>
	           	{/*中*/}
	            <div className="home-head-middle">
	            	<div className="home-search-container">
	            		<i className="icon-search"></i>
	            		<input type="text" placeholder="你搜什么都是对的"/>
	            	</div>
	            </div>
            </div>
        )
    }
}

export default HomeHead
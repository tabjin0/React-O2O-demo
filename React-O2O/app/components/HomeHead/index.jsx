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
            <div className="clear-fix">
            	{/*左*/}
	           	<div className="float-left">
	           		扬州
	           		<i className="icon-down-triangle"></i>
	           	</div>
	           	{/*右*/}
	            <div className="float-right">
	            	<i className="icon-user">个人中心</i>
	            </div>
	           	{/*中*/}
	            <div>
	            	<i className="icon-search"></i>
	            	<input/>
	            </div>
            </div>
        )
    }
}

export default HomeHead
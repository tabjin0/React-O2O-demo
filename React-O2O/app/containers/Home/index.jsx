import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

//引入HomeHead
import HomeHead from '../../components/HomeHead/index.jsx'

//***********引用Redux的一些基本方法和相关内容********
//connect作为react组件的redux组件的连接方法
import { connect } from 'react-redux'
//***********引用Redux的一些基本方法和相关内容********

import Category from '../../components/Category'
import Ads from './subpage/Ads.jsx'
import List from './subpage/List.jsx'

class Home extends React.Component {
	
	constructor(props, context) {
		super(props, context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}

	render() {
		return (
			<div>
				{/*<h1>hello , jinboy</h1>*/}
				<HomeHead cityName={this.props.userinfo.cityName}/>{/*因为在./containers/index.jsx中设置了cityName*/}
				<hr style={{width: '100%',height: '1px'}}/>
				<Category/>
				<hr style={{width: '100%',height: '1px'}}/>
				<div style={{height: '10px'}}></div>
				<Ads />
				<List cityName={this.props.userinfo.cityName} />
				{/*需要给List组件传入城市名，和Readux关联的地方关注一下*/}
			</div>
			
		)
	}
}



//**************根据Rudex的规则更改Home组件的export************************

//将state作为属性传入到React中
function mapStateToProps(state) {
	return {
		userinfo: state.userinfo
	}
}
//将action作为属性传入到React中
function mapDispatchToProps(dispatch) {
	//传入actions/userinfo.js中的update方法
	return {
		
	}
}
//根据Rudex的规则更改App组件的export，通过conect函数返回的组件App，返回一个函数，然后将App组件传进去
//connect()传入两个参数，第一个参数是函数mapStateToProps,第二个参数是函数mapDispatchToProps
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Home)

//**************根据Rudex的规则更改Home组件的export************************

// export default Home




//react redux 绑定
// function mapStateToProps(state) {
// 	return {
// 		userinfo: state.userinfo
// 	}
// }

// function mapDispatchToProps(dispatch) {
// 	return {

// 	}
// }

// export default connect(
// 	mapStateToProps,
// 	mapDispatchToProps
// )(Home)
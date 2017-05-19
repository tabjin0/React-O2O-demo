import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

//引入HomeHead
import HomeHead from '../../components/HomeHead/index.jsx'
class Home extends React.Component {
	
	constructor(props, context) {
		super(props, context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}

	render() {
		return (
			<div>
				{/*<h1>hello , jinboy</h1>*/}
				<HomeHead/>
			</div>
			
		)
	}
}

export default Home
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
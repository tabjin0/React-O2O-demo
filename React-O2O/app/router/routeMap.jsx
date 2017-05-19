//路由页面，所有的页面都在contianers文件夹里面

import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'

import App from '../containers'
import Home from '../containers/Home'
import City from '../containers/City'
import User from '../containers/User'
import Search from '../containers/Search'
import Detail from '../containers/Detail'
import NotFound from '../containers/404'

//小项目，router的配置就简单点吧

class RouteMap extends React.Component {
	render() {
		return (
			<Router history={this.props.history}>
				<Route path='/' component={App}>
					{/*进入系统的默认路由，即访问http://localhost:8080/，默认渲染Home组件*/}
					<IndexRoute component={Home} />
					{/*IndexRoute是默认的route，Home,注意Home的父组件是App*/}
					{/*组件Home,City,Detail,Search,User,NotFound都是App的子组件*/}
					<Route path='/city' component={City} />
					<Route path='/User' component={User} />
					<Route path='/search/:type(/:keyword)' component={Search} />
					<Route path='/detail/:id' component={Detail}/>
					<Route path='*' component={NotFound} />
				</Route>
			</Router>
		)
	}
}

export default RouteMap	
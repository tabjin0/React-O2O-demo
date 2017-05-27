//List组件获取数据，然后交给另一个组件来展示数据


import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
//引入fetch/home.js中的getListData方法,用来获取数据 
import { getListData } from '../../../fetch/home/home.js'

import ListComponent from '../../../components/List'//bug：不要命名同样的组件名，命名之前审核一下是不是同名，这边和subpage的List的同名
import LoadMore from '../../../components/LoadMore'
import "./style.less"//在这边引入一个style，之前都是在components文件夹中，每个组件包含模板、逻辑、样式
//为什么要在subpage里面写style？
//这是因为在render中还有“列表”组件，“加载更多”组件，这些组件的style是在components中的，但是下面h2标签还是需要style的
// 总不至于在components文件夹里面获取样式，因为h2既不属于下面的“列表”组件，又不属于下面的“加载更多”组件
//不管subpage里面有多少子页面，所有这些子页面的样式都直接放在subpage文件夹中,其实subpage页面的样式代码不是很多，共用一个就行了；至于子页面中的木偶组件，这都是在components文件夹中的
class List extends React.Component {
	
	constructor(props, context) {
		super(props, context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		// 通过state来存数据
		this.state = {
			data: [],//默认空数组，至少先来一个容器嘛，存储列表信息
			hasMore: false, //默认没有更多加载页，记录当前状态下还有没有更多的数据可加载
			isLoadingMore: false, //记录当前状态下是”loading。。“（正在工作）还是”点击加载更多“（等待工作 ）
			page: 1 //记录下一页页码，因为默认情况下获取首页的时候传入的是第0页
		};//当然存的是js对象啦
	}

	render() {
		return (
			<div className="list-container clear-fix">
				<h2 className="home-list-title">猜你喜欢 {this.props.cityName}</h2>
			{/*
				测试存储成功
				<div>
					{this.state.hasMore.toString()}
					{this.state.data.length}
				</div>
			*/}
			{/*data放在木偶组件中展示，涉及到数据交互*/}
			{/*列表*/}
				{
					this.state.data.length
					? <ListComponent data={this.state.data} /> 
					: <div>jinboy在List抽风啦</div>
					// 在组件ListComponent中展示
				}
			{/*加载更多*/}
			<LoadMore/>
			</div>
		)
	}
	// 在页面渲染完获取数据
	componentDidMount() {
		// 获取首页数据，把这个数据存放在constructor定义的初始化的state.data中
		this.loadFirstPageData()
	}
	//新建loadFirstPageData方法，给componentDidMoun调用
	loadFirstPageData() {
		//获取首页数据，result
		//1.获取到城市的信息
		const cityName = this.props.cityName  //从引用页面传入数据，<List cityName={this.props.userinfo.cityName} />也就给List组价传入了cityName
		//2.引入fetch/home.js中的getListData方法之后，geiListPage方法第一个参数传city，第二个参数传page
		const result = getListData(cityName, 0)  //这边0写死是因为这边就是获取的首页的数据，没有其他的

		console.log(result) //测试result，打印出来是一个promise对象
		this.resultHandler(result) //在获取到result这个promise对象之后，传入到this.resultHandler中
	}
	//加载更多的数据，在组件LoadMOre中被触发 
	loadMoreData() {
		//加载下一页的数据result
		//获取到result这个promise对象，用到this.resultHandler处理
	}
	//数据处理，在loadFirstPageData中调用
	resultHandler(result) {
		//解析数据，更改state
		result.then(res => {
			return res.json()
		}).then(json => {
			console.log(json)//返回一个Object，里面有5个数组；还有一个就是hasMore属性，指的是本次访问还有没有更多的页面，这边是第0页，true代表着哈你有更多页，false就没有更多页
			//hasMore属性和后面的“加载更多“组件是不是显示联系密切，某一页hasMore为true，就可访问下一页
		
			//拆解数据
			const hasMore = json.hasMore  //json中有hasMore属性
			const data = json.data

			//拆解完存储数据，即放入State中
			this.setState({
				hasMore: hasMore,
				data: data
			})//可在render中确定存储。测试存储成功
		})


	}
}

export default List
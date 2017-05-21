//做成标准的React的形式
import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

//引用轮播图相关
import ReactSwipe from 'react-swipe'

import './style.less'

class Category extends React.Component {
	
	constructor(props, context) {
		super(props, context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		//设置index状态
		this.state= {
			index: 0
		}
	}

	render() {
		var option = {
			// 2s滚动一下
			auto: 2000,
			callback: function(index) {
					//callback定义每次滚动完执行函数
					console.log(index)
					this.setState({index: index})//这边的this不是callback函数外面的this，一种方法是用ES6的尖头函数
				}.bind(this)//.bind(this)使得this是函数外部的this
		}

		return (
			<div id="home-category">	
				<ReactSwipe className="carousel" swipeOptions={option}>
					<div className="carousel-item">
						<ul className="clear-fix">
							 <li className="float-left meishi">美食</li>
							 <li className="float-left maoyandianying">猫眼电影</li>
							 <li className="float-left jiudian">酒店</li>
							 <li className="float-left xiuxianyule">休闲娱乐</li>
							 <li className="float-left waimai">外卖</li>
							 <li className="float-left lvyouchuxing">旅游出行</li>
							 <li className="float-left lirenmeifa">丽人.美发</li>
							 <li className="float-left zhoubianyou">周边游</li>
							 <li className="float-left ktv">KTV</li>
							 <li className="float-left gouwu">购物</li>
						</ul>
					</div>
					<div className="carousel-item">
						<ul className="clear-fix">
							 <li className="float-left gaoduanjiudian">高端酒店</li>
							 <li className="float-left jiehunsheying">结婚/摄影</li>
							 <li className="float-left qinzi">亲子</li>
							 <li className="float-left shenghuofuwu">生活服务</li>
							 <li className="float-left yundongjianshen">运动健身</li>
							 <li className="float-left jingdian">景点</li>
							 <li className="float-left wenquan">温泉</li>
							 <li className="float-left jiazhuang">家装</li>
							 <li className="float-left xuexipeixun">学习培训</li>
							 <li className="float-left quanbufenlei">全部分类</li>
						</ul>
					</div>
					<div className="carousel-item">
						<ul className="clear-fix">
							 <li className="float-left xiaochikuaican">小吃快餐</li>
							 <li className="float-left zizhucan">自助餐</li>
							 <li className="float-left ribenliaoli">日本料理</li>
							 <li className="float-left meifa">美发</li>
							 <li className="float-left meijiameijie">美甲美睫</li>
							 <li className="float-left meirongspa">美容SPA</li>
							 <li className="float-left shoushenxianti">瘦身纤体</li>
							 <li className="float-left qinzisheying">亲子摄影</li>
							 <li className="float-left qinziyoule">亲子游乐</li>
							 <li className="float-left quanbufenlei">全部分类</li>
						</ul>
					</div>
				</ReactSwipe>
				<div className="index-container">
					<ul>
						<li className={this.state.index === 0 ? "selected" : '' }></li>
						<li className={this.state.index === 1 ? "selected" : '' }></li>
						<li className={this.state.index === 2 ? "selected" : '' }></li>
					{/*这边index为0、1的时候就会有bug，3个没有关系*/}
					</ul>
				</div>
			</div>
		)
	}
	//测试ReactSwipe内容
	componentDidMount() {
		console.log(ReactSwipe)
	}
}

export default Category
//export到Home页面中
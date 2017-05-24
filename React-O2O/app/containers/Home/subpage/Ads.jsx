import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import HomeAds from '../../../components/HomeAds'
import HomeAdsWeiNiYouXuan from '../../../components/HomeAdsWeiNiYouXuan'
//引用fetch中的getAdData
import { getAdData } from '../../../fetch/home/home.js'//bug：便便出了一个低级错误，这边是三层路径，写成了两层

class Ads extends React.Component {
	
	constructor(props, context) {
		super(props, context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		//用来存data
		this.state = {
			data: []
		}//用来存data
	}

	render() {
		return (
			<div>
				{
					// 如果data有值
	                this.state.data.length
	                ? <HomeAds data={this.state.data}/>//this.state.data是从ad.js里面获取的数据
	                : <div>jinboy抽风啦...</div>
	            }
	            {
					// 如果data有值
	                this.state.data.length
	                ? <HomeAdsWeiNiYouXuan data={this.state.data}/>//this.state.data是从ad.js里面获取的数据
	                : <div>jinboy抽风啦...</div>
	            }
			</div>	
		)
	}
	// 获取数据
	componentDidMount() {
		const result = getAdData()
		// console.log(result)//会打印Promise
		result.then((res) => {
			return res.json()//返回一个json格式的处理。bug：这边写成了res(json)，注意这边的json()是一个方法
		}).then((json) => {
			console.log(json)//打印json,bug:为什么这边json会显示not defined，一看就是getAdData没有获取
			const data = json
			// 如果data有数据就存起来
			if(data.length) {
				this.setState({
					data: data
				})
			}
		})

	}
}

export default Ads

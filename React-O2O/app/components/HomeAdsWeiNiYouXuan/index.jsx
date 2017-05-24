import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class HomeAdsWeiNiYouXuan extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const data = this.props.data
        return (
            <div id="home-ads">
                <h2>天天特价 {data.length}</h2>
                <span className="ads-more float-right">more&gt;</span>
                <div className="ads-container clear-fix">
                    {this.props.data.map((item, index) => {
                        //通过map函数来做一次遍历，map是ES5中针对数组的扩展函数
                        // 返回json中的对象
                        // bug:下面每次其实是一个div，不要在return后面加{}。bug：打字问题？ads-item没用，a-item有用
                        return <div key={index} className="a-item float-left">
                            <a href={item.link} target="_blank">
                            {/*item是data的一个属性*/}
                                <img src={item.img} alt={item.title}/>
                                <span className="ads-item-title">{item.title}</span>
                            </a>
                        </div>
                    })}
                </div>
            </div>
        )
    }
}

export default HomeAdsWeiNiYouXuan
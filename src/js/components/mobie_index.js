import React from 'react';
import MobieHeader from './mobie_header';
import MobieFooter from './mobie_footer';
import MobieList from './mobie_list';
import { Tabs, Carousel } from 'antd';

const TabPane = Tabs.TabPane;	
export default class MobieIndex extends React.Component {
	constructor() {
		super()

		this.state = {
			current: 'top',
			visible: false,
			action: 'login',
			hasLogined: false,
			userNickName: '',
			userid: 0
		};

		this.callback = this.callback.bind(this);
	};

	callback(e) {
		console.log(e.key)
	}

	render () {

		return (
			<div>
				<MobieHeader></MobieHeader>
			  <Tabs defaultActiveKey="1" >
			    <TabPane tab="头条" key="1">
						<Carousel autoplay className="mobie_carousel">
							<div><img src="./src/img/carousel_1.jpg" alt="" width="100%" /></div>
							<div><img src="./src/img/carousel_2.jpg" alt="" width="100%" /></div>
							<div><img src="./src/img/carousel_3.jpg" alt="" width="100%" /></div>
							<div><img src="./src/img/carousel_4.jpg" alt="" width="100%" /></div>
						</Carousel>
			    	<MobieList count={20} type="top"></MobieList>
			    </TabPane>
			    <TabPane tab="社会" key="2">
			    	<MobieList count={20} type="shehui"></MobieList>
			    </TabPane>
			    <TabPane tab="国内" key="3">
			    	<MobieList count={20} type="guonei"></MobieList>
			    </TabPane>
			    <TabPane tab="国际" key="4">
			    	<MobieList count={20} type="guoji"></MobieList>
			    </TabPane>
			    <TabPane tab="娱乐" key="5">
			    	<MobieList count={20} type="yule"></MobieList>
			    </TabPane>
			  </Tabs>
				<MobieFooter></MobieFooter>
			</div>
		)
	}
} 
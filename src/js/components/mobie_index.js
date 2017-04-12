import React from 'react';
import MobieHeader from './mobie_header';
import MobieFooter from './mobie_footer';
import { Tabs } from 'antd';

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
			    <TabPane tab="头条" key="1"></TabPane>
			    <TabPane tab="社会" key="2"></TabPane>
			    <TabPane tab="国内" key="3"></TabPane>
			    <TabPane tab="国际" key="4"></TabPane>
			    <TabPane tab="娱乐" key="5"></TabPane>
			  </Tabs>
				<MobieFooter></MobieFooter>
			</div>
		)
	}
} 
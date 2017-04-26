import React from 'react';
import {Row, Col, BackTop} from 'antd';
import MobieHeader from './mobie_header';
import MobieFooter from './mobie_footer';
import CommonComment from './common_comments';

export default class MobieNewsDetails extends React.Component {
	constructor (){
		super();

		this.state = {
			newsItem: ''
		};
	};

	componentWillMount () {
		var myFetchOptions = {
			method : 'GET'
		};

		fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=" + this.props.params.uniquekey, myFetchOptions)
		.then(res => res.json())
		.then(json => {
			this.setState({newsItem: json});
			document.title = this.state.newsItem.title + " - React News | React 驱动的新闻平台";
		})
	};
	
	createMarkup() {
		return {__html: this.state.newsItem.pagecontent};
	};

	render () {
		return (
			<div id="mobieDetailsContainer">
				<MobieHeader></MobieHeader>
				<div className="ucmobieList">
					<Row>
						<Col span={24} className="container">
							<div className="articleContainer" dangerouslySetInnerHTML={this.createMarkup()}>
							</div>
							<hr/>
							<CommonComment uniquekey={this.props.params.uniquekey}></CommonComment>
						</Col>
					</Row>
				</div>

				<MobieFooter></MobieFooter>
				<BackTop id="MobieBackTop"></BackTop>
			</div>
		)
	}
}
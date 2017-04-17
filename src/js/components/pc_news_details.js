import React from "react";
import {Row, Col, BackTop} from 'antd';
import PCNewsImageBlock from "./pc_news_image_block"
import PCHeader from "./pc_header";
import PCFooter from "./pc_footer";

export default class PCNewsDetails extends React.Component {
	constructor (){
		super();

		this.state = {
			newsItem: ''
		};
	};

	componentDidMount () {
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
			<div>
				<PCHeader></PCHeader>
				<Row>
					<Col span={14} offset={2} className="container">
						<div className="articleContainer" dangerouslySetInnerHTML={this.createMarkup()}>
						</div>
					</Col>
					<Col span={4} offset={1}>
						<PCNewsImageBlock count={40} type="guonei" width="100%" cartTitle="相关新闻" imageWidth="132px"></PCNewsImageBlock>
					</Col>
				</Row>
				<PCFooter></PCFooter>
				<BackTop></BackTop>
			</div>
		)
	}
}
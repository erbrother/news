import React from "react";
import {Card, Row, Col, Carousel} from "antd";
import {Router, Route, Link, browserHistory} from "react-router";
import Tloader from 'react-touch-loader';
export default class MobieList extends React.Component {
	constructor(){
		super();
		this.state = {
			news: [],
			count: 5,
			hasMore: 0,
			initializing: 1,
			canRefreshResolve:true,
			refreshedAt: Date.now()
		};
	};

	componentWillMount() {

		var myFetchOptions = {
			method: "GET"
		};

		fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=" + this.props.type
		+ "&count=" + this.props.count, myFetchOptions)
		.then(response=> response.json())
		.then(json => {
			this.setState({news: json});
		});
	};

	loadMore(resolve) {

		setTimeout(()=> {
			var myFetchOptions = {
				method: "GET"
			};
			var count = this.state.count;
			this.setState({
				count: count+5
			});
			fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=" + this.props.type + "&count="+this.state.count, myFetchOptions)
			.then(response => response.json())
			.then(json => this.setState({news: json}));
			this.setState({
	      hasMore: count>0 && count<50
	    });
	    resolve();
			
		}, 2e3)
	};

  refresh(resolve, reject) {
    setTimeout(() => {
        if(!this.state.canRefreshResolve) return reject();

				var myFetchOptions = {
					method: "GET"
				};

				fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=" + this.props.type
				+ "&count=" + this.props.count, myFetchOptions)
				.then(response=> response.json())
				.then(json => {
					this.setState({
						news: json,
						refreshedAt: Date.now(),
						hasMore: 1,
					});
					resolve();
				});
    }, 2e3);
	};

	componentDidMount() {
	  setTimeout(() => {
	      this.setState({
	          hasMore: 1,
	          initializing: 2, // initialized
	      });
	  }, 2e3);
  };

	render() {
		var {hasMore, initializing, refreshedAt} = this.state;
		var { refresh, loadMore, toggleCanReresh,refresh } = this;
		const {news} = this.state;

		const newsList = news.length
			?
			news.map((newsItem,index)=>(
				<section key={index} className="m_article list-item special_section clearfix">
					<Link to={'details/' + newsItem.uniquekey}>
						<div className="m_article_img">
							<img src={newsItem.thumbnail_pic_s} alt={newsItem.title}/>
						</div>
						<div className="m_article_info">
							<div className="m_article_title">
								<span>{newsItem.title}</span>
							</div>
							<div className="m_article_desc clearfix">
								<div className="m_article_desc_l">
									<span className="m_article_channel">{newsItem.realtype}</span>
									<span className="m_article_time">{newsItem.date}</span>
								</div>
							</div>
						</div>
					</Link>
				</section>
			))
			:
			'没有任何数据';

		return (
			<div>
				<Row>
					<Col span={24}>
						<Tloader className="main" onRefresh={this.refresh.bind(this)} onLoadMore={this.loadMore.bind(this)} hasMore={hasMore} initializing={initializing}>
							{newsList}
						</Tloader>
					</Col>
				</Row>
			</div>
		)
	}
}

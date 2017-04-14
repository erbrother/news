import React from "react";
import PCNewsBlock from "./pc_news_block";
import PCNewsImageBlock from "./pc_news_image_block"
import {Col, Row, Tabs, Carousel} from "antd";

const TabPane = Tabs.TabPane

export default class PCNewsContainer extends React.Component {
	render () {
		return (
			<div>
				<Row>
					<Col span={20} offset={2} class="container">
						<div className="leftContainer">
							<div className="carousel">
								<Carousel autoplay>
									<div><img src="./src/img/carousel_1.jpg" alt=""/></div>
									<div><img src="./src/img/carousel_2.jpg" alt=""/></div>
									<div><img src="./src/img/carousel_3.jpg" alt=""/></div>
									<div><img src="./src/img/carousel_4.jpg" alt=""/></div>
								</Carousel>
							</div>

							<PCNewsImageBlock count={9} type="guoji" width="400px" cartTitle="国际头条" imageWidth="112px"></PCNewsImageBlock>
						</div>

						<Tabs className="tab_news">
							<TabPane tab="头条" key="1">
								<PCNewsBlock count={22} type="top" width="100%" borderd="false"></PCNewsBlock>
							</TabPane>
							<TabPane tab="国际" key="2">
								<PCNewsBlock count={22} type="guoji" width="100%" borderd="false"></PCNewsBlock>
							</TabPane>
						</Tabs>

						<div>
							<PCNewsImageBlock count={9} type="guonei" width="100%" cartTitle="国内新闻" imageWidth="132px"></PCNewsImageBlock>
							<PCNewsImageBlock count={16} type="yule" width="100%" cartTitle="娱乐新闻" imageWidth="132px"></PCNewsImageBlock>
						</div>
					</Col>
				</Row>
			</div>
		)
	}
}
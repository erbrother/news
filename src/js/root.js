import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import PCIndex from "./components/pc_index";
import MobieIndex from "./components/mobie_index";
import PCNewsDetails from "./components/pc_news_details";
import MobieNewsDetails from "./components/mobie_news_details";
import PCUCenter from "./components/pc_ucenter";
import MobieUCenter from "./components/mobie_ucenter";
import {Button} from "antd";
import "antd/dist/antd.css";
import MediaQuery from 'react-responsive';

export default class Root extends React.Component {
	render() {
		return (
			<div>
				<MediaQuery query='(min-device-width: 1224px)'>
					<Router history={hashHistory}>
						<Route path="/" component={PCIndex}></Route>
						<Route path="/details/:uniquekey" component={PCNewsDetails}></Route>
						<Route path="/ucenter" component={PCUCenter}></Route>
					</Router>
				</MediaQuery>
				<MediaQuery query='(max-device-width: 1224px)'>
					<Router history={hashHistory}>
						<Route path="/" component={MobieIndex}></Route>
						<Route path="/details/:uniquekey" component={MobieNewsDetails}></Route>
						<Route path="/ucenter" component={MobieUCenter}></Route>
					</Router>
				</MediaQuery>
			</div>
		)
	};
};

ReactDOM.render(<Root/>, document.getElementById('mainContainer'))
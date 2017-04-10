import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import PCIndex from "./components/pc_index";
import MobieIndex from "./components/mobie_index";
import {Button} from "antd";
import "antd/dist/antd.css";
import MediaQuery from 'react-responsive';

export default class Root extends React.Component {
	render() {
		return (
			<div>
				<MediaQuery query='(min-device-width: 1224px)'>
					<PCIndex></PCIndex>
				</MediaQuery>
				<MediaQuery query='(max-device-width: 1224px)'>
					<MobieIndex></MobieIndex>
				</MediaQuery>
			</div>
		)
	};
};


ReactDOM.render(<Root/>, document.getElementById('mainContainer'))
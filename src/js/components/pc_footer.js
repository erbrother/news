import React from 'react';
import {Row, Col} from 'antd';

export default class PCFooter extends React.Component {
	render () {
		return (
			<footer>
				<Row>
					<Col offset={2} span={20} class="footer">
						客服热线：18009223900
					</Col>					
					<Col offset={2} span={20} class="footer">
						&copy;&nbsp;2017 夏恒鑫版权所有
					</Col>
				</Row>
			</footer>
		)
	}
}
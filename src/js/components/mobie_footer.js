import React from 'react';
import {Row, Col} from 'antd';

export default class MobieFooter extends React.Component {
	render () {
		return (
			<footer>
				<Row>
					<Col offset={2} span={20} class="footer">
						&copy;&nbsp;2016 ReactNews. All Rights Reserved.
					</Col>
				</Row>
			</footer>
		)
	}
}
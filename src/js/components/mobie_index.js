import React from 'react';
import MobieHeader from './mobie_header';
import MobieFooter from './mobie_footer';

export default class MobieIndex extends React.Component {
	render () {
		return (
			<div>
				<MobieHeader></MobieHeader>
				<MobieFooter></MobieFooter>
			</div>
		)
	}
} 
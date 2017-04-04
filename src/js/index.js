import React from 'react';
import ReactDOM from 'react-dom';
import ComponentHeader from './components/header';
import ComponentFooter from './components/footer';
import ComponentBodyIndex from './components/bodyindex';

class Index extends React.Component{
	render(){
		return (
			<div>
				<ComponentHeader/>
				<ComponentBodyIndex userId={9527}/>
				<ComponentFooter/>
			</div>
		)
	}
}

ReactDOM.render(<Index/>,document.getElementById('example'))
import React from 'react';
import ReactDOM from 'react-dom';
import ComponentHeader from './components/header';
import ComponentFooter from './components/footer';
import ComponentBodyIndex from './components/bodyindex';

class Index extends React.Component{
	componentWillMount(){
		console.log('Index - componentWillMount')
	}	

	componentDidMount(){
		console.log('Index - componentDidMount')
	}

	render(){
		return (
			<div>
				<ComponentHeader/>
				<ComponentBodyIndex/>
				<ComponentFooter/>
			</div>
		)
	}
}

ReactDOM.render(<Index/>,document.getElementById('example'))
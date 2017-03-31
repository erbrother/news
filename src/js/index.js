import React from 'react';
import ReactDOM from 'react-dom';
import ComponentHeader from './components/header';
// const React = require('react');
// const ReactDOM = require('react-dom');
// const ComponentHeader = require('./components/header');
class Index extends React.Component{
	render(){
		return (
			<ComponentHeader/>
		)
	}
}
// ReactDOM.render(
//   <h1>Hello, world!</h1>,
//   document.getElementById('example')
// );

ReactDOM.render(<Index/>,document.getElementById('example'))
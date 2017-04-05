import React from 'react';
import ReactDOM from 'react-dom';
import BodyChild from './bodyChild';

class ComponentBodyIndex extends React.Component{
	constructor(){
		super();
		this.state = {
			age : 18
		}
	};

	changeUserInfo() {
		this.setState({
			age : parseInt(this.state.age) + 10
		});

		// 第一种方法 传统方法
		var mySubmitButtom = document.getElementById('mySubmitButtom');
		ReactDOM.findDOMNode(mySubmitButtom).style.color = 'red';
		// 第二种方法 refs
		console.log(this.refs.mySubmitButtom)
	};

	handleChildValueChange(event){
		this.setState({
			age : event.target.value
		})
	};

	render() {
		return (
			<div>
			  <p>来自bodyIndex的父页面的：{this.props.userId},{this.props.username}</p>
			  <input type="button" id="mySubmitButtom" ref="mySubmitButtom" value="提交" onClick={this.changeUserInfo.bind(this)}/>
				<BodyChild handleChildValueChange={this.handleChildValueChange.bind(this)}/>
			</div>
		)
	}
}

ComponentBodyIndex.propTypes = {
	userId : React.PropTypes.number.isRequired
};
ComponentBodyIndex.defaultProps = { 
	username: 'jack' 
};

export default ComponentBodyIndex;
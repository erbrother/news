import React from 'react';

class ComponentBodyIndex extends React.Component{
	constructor(){
		super();
		this.state = {
			username : "Parry",
			age : 18
		}
	};

	changeUserInfo() {
		this.setState({
			age : this.state.age + 10
		})
	};

	render() {
		return (
			<div>
			  <p>{this.state.username},{this.state.age}</p>
			  <input type="button" value="提交" onClick={this.changeUserInfo.bind(this)}/>
			</div>
		)
	}
}

export default ComponentBodyIndex;
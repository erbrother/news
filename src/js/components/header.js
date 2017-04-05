import React from 'react';

class ComponentHeader extends React.Component{
	constructor(){
		super();
		this.state = {
			miniHeader : false
		}
	};

	switchHeader(){
		this.setState({
			miniHeader: !this.state.miniHeader
		})
	};

	render(){
		const styleComponentHeader = {
			header : {
				background: "#333333",
				color: "#ffffff",
				paddingTop: (this.state.miniHeader) ? "10px" : "15px"
			}
		};

		return (
			<header style={styleComponentHeader.header} className="smallFontSize" onClick={this.switchHeader.bind(this)}>
				<h1>这里是头部</h1>
			</header>
		)
	}
}

export default ComponentHeader;
import React from 'react';
var footerCss = require("../../css/footer.css");

class ComponentFooter extends React.Component{
	render () {
		console.log(footerCss)
		return (
			<footer className={footerCss.miniFooter}>
				<h1>这里是页脚,一般放置版权税</h1>
			</footer>
		)
	}
}

export default ComponentFooter;
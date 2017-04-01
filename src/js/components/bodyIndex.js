import React from 'react';

class ComponentBodyIndex extends React.Component{
	render() {
		var userName = 'Parry';
		var dot = 'imooc so cool'
		return (
			<div>
			  <h1>这里是BODY内容</h1>
			  <p>{ userName == '' ? '用户还没有登录' : '用户名:' + userName}</p>
			  <p><input type="button" value={userName} disabled="false"/></p>
			  <p>{dot}</p>
			</div>
		)
	}
}

export default ComponentBodyIndex;
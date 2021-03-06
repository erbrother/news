import React from 'react';
import { Row, Col } from 'antd';
import {Router, Route, Link} from 'react-router';
import { 
	Menu, 
	Icon,
	Tabs,
	message,
	Form,
	Input,
	Button,
	CheckBox,
	Modal,
 } from 'antd';
// import {request} from 'request';

const FormItem = Form.Item;
const TabPane = Tabs.TabPane;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class MobieHeader extends React.Component {
	constructor() {
		super();

		this.state = {
			current: 'top',
			visible: false,
			action: 'login',
			hasLogined: false,
			userNickName: '',
			userid: 0
		};

		this.login = this.login.bind(this);
		this.handleCancel = this.handleCancel.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.callback = this.callback.bind(this);

	};
	handleCancel(){
		this.setState({
			visible: false
		})
	};

  handleSubmit(e) {
  	e.preventDefault();
  	var myFetchOptions = {
  		method: 'GET'
  	};
  	var formData = this.props.form.getFieldsValue();

  	fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=" + this.state.action + "&username="+formData.userName+"&password="+ formData.password +"&r_userName="+ formData.r_userName+"&r_password="+ formData.r_password +"&r_confirmPassword=" + formData.r_comfirmPassword, myFetchOptions)
  	.then(response=>response.json())
  	.then(json=>{
  		if ( this.state.action === "register" && json === true) {
  			message.success('注册成功');
  			// console.log(formData)
  			this.setState({
  				userNickName: formData.r_userName,
  				hasLogined: true,
  				visible: false
  			})			
  		} 
  		else if (this.state.action === "login" && json)  {
  			message.success('登陆成功');

  			this.setState({
  				userNickName: json.NickUserName,
  				userid: json.userid,
  				hasLogined: true,
  				visible: false
  			})

  			localStorage.userid = json.UserId;
  			localStorage.userNickName = json.NickUserName
  		}
  	})

  };

	callback(key) {
		if ( key === "1" ) {
			this.setState({
				action: 'login'
			})
		}
		else if ( key === "2") {
			this.setState({
				action: "register"
			})
		}
	};

	login() {
		this.setState({
			visible: true
		})
	};

	render () {
		const { getFieldDecorator } = this.props.form;
		const userShow = this.state.hasLogined || localStorage.userid ?
		<Link to={'/ucenter'}>
			<Icon type="inbox" />
		</Link>
		:
		<Icon type="setting" onClick={this.login} />;

		return (
			<div id="mobieheader">
				<header>
					<img src="./src/img/logo1.png" alt="logo" />
					<span>ReactNews</span>
					{ userShow }
				</header>
				<Modal wrapClassName="vertical-center-modal" visible={this.state.visible} onOk={this.handleOk} onCancel={this.handleCancel} footer={null}>
	        <Tabs type="card" onChange={this.callback} class="tabPane">
	        	<TabPane tab="登陆" key="1">
	        		<Form> 
	        			<FormItem>
		        			{getFieldDecorator('userName', {
				            rules: [{ required: true, message: 'Please input your username!' }],
				          })(
				            <Input type="text" prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
				          )}
	        			</FormItem>
	        			<FormItem>
	        				{getFieldDecorator('password', {
				            rules: [{ required: true, message: 'Please input your password!' }],
				          })(
				            <Input type="password" prefix={<Icon type="lock" style={{ fontSize: 13 }} />} placeholder="Password" />
				          )}
	        			</FormItem>
	        			<Button type="primary" htmlType="submit" onClick={this.handleSubmit}>登陆</Button>
	        		</Form>
	        	</TabPane>
	        	<TabPane tab="注册" key="2">
	        		<Form> 
	        			<FormItem>
		        			{getFieldDecorator('r_userName', {
				            rules: [{ required: true, message: 'Please input your username!' }],
				          })(
				            <Input type="text" prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
				          )}
	        			</FormItem>
	        			<FormItem>
	        				{getFieldDecorator('r_password', {
				            rules: [{ required: true, message: 'Please input your password!' }],
				          })(
				            <Input type="password" prefix={<Icon type="lock" style={{ fontSize: 13 }} />} placeholder="Password" />
				          )}
	        			</FormItem>
	        			<FormItem>
	        				{getFieldDecorator('r_comfirmPassword', {
				            rules: [{ required: true, message: 'Please input your password again!' }],
				          })(
				            <Input type="password" prefix={<Icon type="lock" style={{ fontSize: 13 }} />} placeholder="comfirm your Password" />
				          )}
	        			</FormItem>
	        			<Button type="primary" htmlType="submit" onClick={this.handleSubmit}>注册</Button>
	        		</Form>
	        	</TabPane>
	        </Tabs>
        </Modal>
			</div>
		)
	}
}

export default MobieHeader = Form.create()(MobieHeader); 
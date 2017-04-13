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

const FormItem = Form.Item;
const TabPane = Tabs.TabPane;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class PCHeader extends React.Component {
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

		this.handleClick = this.handleClick.bind(this);
		this.handleCancel = this.handleCancel.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.callback = this.callback.bind(this);
		this.logout = this.logout.bind(this);

	};

	componentWillMount() {
		if ( localStorage.userid !== "" &&  localStorage.userid !== undefined) {
			this.setState({
				hasLogined: true,
				userNickName: localStorage.userNickName,
				userid: localStorage.userid
			})
		}
	}

	logout() {
		localStorage.userid = "";
		localStorage.userNickName = "";
		this.setState({
			hasLogined: false
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

  handleClick(e) {
  	if (e.key === "register") {
	    this.setState({
	      visible: true,
	      current: 'register'
	    });
  	} else {
  		this.setState({
  			current: e.key
  		})
  	}
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
  		if (json === true) {
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
  				userid: json.UserId,
  				hasLogined: true,
  				visible: false
  			});

  			localStorage.userid = json.UserId;
  			localStorage.userNickName = json.NickUserName
  		}
  	})
  };

  handleCancel (e){
    this.setState({
      visible: false
    });
  };


	render() {
		const { getFieldDecorator } = this.props.form;
		const userShow = this.state.hasLogined
		?
		<Menu.Item key="logout" class="register">
			<Button type="primary" htmlType="button">{this.state.userNickName}</Button>
			&nbsp;&nbsp;
			<Link target="_blank">
				<Button type="dashed" htmlType="button">个人中心</Button>
			</Link>
			&nbsp;&nbsp;
			<Button type="ghost" htmlType="button" onClick={this.logout}>退出</Button>
		</Menu.Item>
		:
		<Menu.Item key="register" class="register">
			<Icon type="appstore" />注册/登陆
		</Menu.Item>;

		return (
			<header>
				<Row>
					<Col span={4} offset={2}>
						<a href="/" class="logo">
							<img src="./src/img/logo1.png" alt="logo" />
							<span>ReactNews</span>
						</a>
					</Col>
					<Col span={16}>
						<Menu selectedKeys={[this.state.current]} mode="horizontal" onClick={this.handleClick}>
			        <Menu.Item key="top">
			          <Icon type="appstore" />头条
			        </Menu.Item>
			        <Menu.Item key="shehui">
			          <Icon type="appstore" />社会
			        </Menu.Item>
			        <Menu.Item key="guonei">
			          <Icon type="appstore" />国内
			        </Menu.Item>
			        <Menu.Item key="guoji">
			          <Icon type="appstore" />国际
			        </Menu.Item>
			        <Menu.Item key="yule">
			          <Icon type="appstore" />娱乐
			        </Menu.Item>
			        <Menu.Item key="tiyu">
			          <Icon type="appstore" />体育
			        </Menu.Item>
			        <Menu.Item key="keji">
			          <Icon type="appstore" />科技
			        </Menu.Item>
			        <Menu.Item key="shishang" >
			          <Icon type="appstore" />时尚
			        </Menu.Item>
			        {userShow}
			      </Menu>
					</Col>
				</Row>

				<Modal wrapClassName="vertical-center-modal" visible={this.state.visible}
          onOk={this.handleOk} onCancel={this.handleCancel} footer={null}
        >
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
			</header>
		)
	}
};

export default PCHeader = Form.create()(PCHeader);
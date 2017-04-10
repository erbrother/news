import React from 'react';
import { Row, Col } from 'antd';
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
		this.handleOk = this.handleOk.bind(this);
		this.handleCancel = this.handleCancel.bind(this);

	};

  handleClick(e) {
  	if (e.key === "register") {
	    this.setState({
	      visible: true,
	    });
  	}
  };

  handleOk (e) {
    
    this.setState({
      visible: false,
    });
  };

  handleCancel (e){
    
    this.setState({
      visible: false,
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
			<Button type="ghost" htmlType="button">退出</Button>
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
        <Tabs type="card">
        	<TabPane tab="注册" key="2">
        		<Form onSubmit={this.handleSubmit}> 
        			<FormItem>
	        			{getFieldDecorator('userName', {
			            rules: [{ required: true, message: 'Please input your username!' }],
			          })(
			            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
			          )}
        			</FormItem>
        			<FormItem>
        				{getFieldDecorator('password', {
			            rules: [{ required: true, message: 'Please input your password!' }],
			          })(
			            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} placeholder="Password" />
			          )}
        			</FormItem>
        			<FormItem>
        				{getFieldDecorator('comfirmPassword', {
			            rules: [{ required: true, message: 'Please input your password again!' }],
			          })(
			            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} placeholder="comfirm your Password" />
			          )}
        			</FormItem>
        			<Button type="primary" htmlType="submit">注册</Button>
        		</Form>
        	</TabPane>
        </Tabs>
        </Modal>
			</header>
		)
	}
};

export default PCHeader = Form.create({})(PCHeader);
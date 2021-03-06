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
	Card,
	notification 
 } from 'antd';

const FormItem = Form.Item;
const TabPane = Tabs.TabPane;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class CommonComments extends React.Component {
	constructor() {
		super();

		this.state = {
			comments: ''
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.addUserCollection = this.addUserCollection.bind(this);
	};

	componentWillMount () {
		var myFetchOptions = {
			method : 'GET'
		};

		fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getcomments&uniquekey=" + this.props.uniquekey, myFetchOptions)
		.then(res => res.json())
		.then(json => {
			this.setState({comments: json});
		})
	};

	handleSubmit (e) {
		e.preventDefault();

		var myFetchOptions = {
			method : 'GET'
		}
		var formdata = this.props.form.getFieldsValue();
		fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=comment&userid=" + localStorage.userid + "&uniquekey=" + this.props.uniquekey + "&commnet=" + formdata.remark, myFetchOptions)
		.then(res => res.json())
		.then(json => {
			this.componentWillMount();
		})
	};

	addUserCollection () {
		var myFetchOptions = {
			method : 'GET'
		};

		fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=uc&uniquekey=" + this.props.uniquekey+ "&userid=" + localStorage.userid, myFetchOptions)
		.then(res => res.json())
		.then(json => {
			// 收藏成功后进行一下全局的提醒
			notification['success']({
				message: 'ReactNews提醒', description: '收藏此文章成功'
			});

		})
	};
	
	render(){
		const { getFieldDecorator } = this.props.form;

		const {comments} = this.state;
		const commentList = comments.length ? 
		comments.map((comment,index)=> (
			<Card key={index} title={comment.UserName} extra={<a href="#">发布于 {comment.datetime}</a>}>
				<p>{comment.Comments}</p>
			</Card>
		))
		:
		'没有加载到任何数据';
		return(
			<div className="comment">
				<Row>
					<Col span={24}>
						{commentList}
						<Form onSubmit = {this.handleSubmit}>
							<FormItem>
			          {getFieldDecorator('remark', {
			            rules: [{ required: true }],
			          })(
			            <Input type="textarea" placeholder="随便写" />
			          )}
			          <Button type="primary" htmlType="submit">提交评论</Button>
			          &nbsp;&nbsp;
			          <Button type="primary" htmlType="button" onClick={this.addUserCollection}>收藏该文章</Button>
			        </FormItem>
						</Form>
					</Col>
				</Row>
			</div>
		)
	}
}

export default CommonComments = Form.create()(CommonComments)
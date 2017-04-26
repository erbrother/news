import React from 'react';
import {Row, Col, Modal} from 'antd';
import {Menu, Icon} from 'antd';
import MobieHeader from "./mobie_header";
import MobieFooter from "./mobie_footer";
import {Router, Route, Link, browserHistory} from 'react-router';
import {
	Tabs,
	message,
	Form,
	Input,
	Button,
	CheckBox,
	Card,
	notification,
	Upload
} from 'antd';
const TabPane = Tabs.TabPane;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


class MobieUCenter extends React.Component {
	constructor() {
		super();
	  this.state = {
	  	usercollection: '',
	  	usercomments: '',
	  	action : 'http://newsapi.gugujiankong.com/Handler.ashx',
	  	headers: {
	  		"Access-Control-Allow-Origin" : "*"
	  	},
	    previewVisible: false,
	    previewImage: '',
	    fileList: [{
	      uid: -1,
	      name: 'xxx.png',
	      status: 'done',
	      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
	    }],
	  };

		this.handleCancel = this.handleCancel.bind(this);
		this.handlePreview = this.handlePreview.bind(this);
		this.handleChange = this.handleChange.bind(this);
	};

	componentDidMount() {
		var myFetchOption = {
			method: "GET"
		}

		fetch('http://newsapi.gugujiankong.com/Handler.ashx?action=getuc&userid=' + localStorage.userid, myFetchOption)
		.then(res => res.json())
		.then(json=> {
			this.setState({usercollection: json})
		})

		fetch('http://newsapi.gugujiankong.com/Handler.ashx?action=getusercomments&userid=' + localStorage.userid, myFetchOption)
		.then(res => res.json())
		.then(json=> {
			this.setState({usercomments: json})
		})
	};

 	handleCancel(){this.setState({ previewVisible: false })};

 	handleChange({ fileList }){this.setState({ fileList })};

  handlePreview (file)  {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  };

	render () {
	 	const { previewVisible, previewImage, fileList, action, headers, usercomments } = this.state;
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    );

    const {usercollection} = this.state;
    const usercollectionList = usercollection.length ? 
	    usercollection.map((uc, index) => (
	    	<Card key={index} title={uc.uniquekey} extra={<a href={'/#/details/'+ uc.uniquekey}>查看</a>}>
	    		<p>{uc.Title}</p>
	    	</Card>
	    ))
	    :
	    '您还没有收藏任何的新闻,快去收藏一些新闻吧';
		const usercommentsList = usercomments.length ? 
	    usercomments.map((comment, index) => (
	    	<Card key={index} title={'于' +comment.datetime + '评论了文章' + comment.uniquekey} extra={<a href={'/#/details/'+ comment.uniquekey}>查看</a>}>
	    		<p>{comment.Comments}</p>
	    	</Card>
	    ))
	    :
	    '您还没有发表任何评论';
		return (
			<Row>
				<Col span={24}>
					<MobieHeader></MobieHeader>
					<Tabs>
						<TabPane tab="我的收藏列表" key="1">
							<div class="comment">
								<Row>
									<Col span={24}>
										{usercollectionList}
									</Col>
								</Row>
							</div>
						</TabPane>
						<TabPane tab="我的评论列表" key="2">
							<div class="comment">
								<Row>
									<Col span={24}>
										{usercommentsList}
									</Col>
								</Row>
							</div>
						</TabPane>
						<TabPane tab="头像设置" key="3">
				      <div className="clearfix">
				        <Upload
				        	action = {action}
				        	header = {headers}
				          listType="picture-card"
				          fileList={fileList}
				          onPreview={this.handlePreview}
				          onChange={this.handleChange}
				        >
				          {fileList.length >= 3 ? null : uploadButton}
				        </Upload>
				        <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
				          <img alt="example" style={{ width: '100%' }} src={previewImage} />
				        </Modal>
				      </div>
						</TabPane>
					</Tabs>
					<MobieFooter></MobieFooter>
				</Col>
			</Row>
		) 
	}
}

export default MobieUCenter;
import React from 'react';
import { Layout } from 'antd';
import Nav from '../components/nav';
import Lsider from '../components/lsider';
import Rsider from '../components/rsider';
import Contents from '../components/contents';
import "./layouts.css";

const { Header, Sider, Footer } = Layout;

class Layouts extends React.Component {
  render() {
    return (
      <Layout id="layout">
        <Header id="nav-header">
          <Nav/>
        </Header>
        <Layout style={{ paddingTop:"40px", backgroundColor:"rgb(255, 255, 255)", overflow:"auto"}}>
          <Sider width={'18%'} theme={'light'} id="lsider" style={{overflow:"auto"}}>
            <Lsider/>
          </Sider>
          <Layout id="contents-layout" style={{ padding: '0 24px 0', backgroundColor:"rgb(255, 255, 255)", overflow:"auto" }}>
            <Contents/>
            <Footer style={{ textAlign: 'center', backgroundColor:"rgb(255, 255, 255)", overflow:"auto", paddingBottom:"12px" }}>Ant Design ©2018 Created by Ant UED</Footer>
          </Layout>
          <Sider width={'10%'} id="rsider" style={{backgroundColor:"rgb(255, 255, 255)"}}>
            <Rsider/>
          </Sider>
        </Layout>
      </Layout>
    );
  }
}

export default Layouts;


/*import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  HomeOutlined,
  FunctionOutlined,
  ChromeOutlined,
  ApartmentOutlined,
  CodeOutlined,
  ConsoleSqlOutlined,
  SettingOutlined,
  UserOutlined,
} from '@ant-design/icons';
import "./layouts.css"

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class Layouts extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState( {collapsed} );
  };

  render() {
    const { collapsed } = this.state;
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider className="siderleft" width={250} collapsedWidth={130} collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
          <div id="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<HomeOutlined />}>
              首页 谷歌搜索
            </Menu.Item>
            <SubMenu key="sub1" icon={<FunctionOutlined />} title="数学">
              <Menu.Item key="2">数值分析</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<ChromeOutlined />} title="web开发">
              <Menu.Item key="4">前端</Menu.Item>
              <Menu.Item key="5">后端</Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" icon={<ApartmentOutlined />} title="算法">
            </SubMenu>
            <SubMenu key="sub4" icon={<CodeOutlined />} title="操作系统">
              <Menu.Item key="8">Linux</Menu.Item>
            </SubMenu>
            <SubMenu key="sub5" icon={<ConsoleSqlOutlined />} title="数据库">
              <Menu.Item key="9">Mysql</Menu.Item>
            </SubMenu>
            <Menu.Item key="10" icon={<SettingOutlined />}>
              设置
            </Menu.Item>
            <Menu.Item key="11" icon={<UserOutlined />}>
              联系作者
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0, height: "130px" }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              Bill is a cat.
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default Layouts;*/
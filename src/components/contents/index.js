import React from 'react';
import { Layout, Breadcrumb } from 'antd';
import "./index.css"

const { Content } = Layout;

class Contents extends React.Component {
    render() {
        return (
            <div className="contents" style={{overflow:"auto"}}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <Content className="contents-content" style={{height:"1500px"}}>
                    Content
                </Content>
            </div>
        );
    }
}

export default Contents;
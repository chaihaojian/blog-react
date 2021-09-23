import React from 'react';
import {  Menu } from 'antd';
import "./index.css"

class Lsider extends React.Component {
    render() {
        return (
            <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%', overflow:"auto" }}
            >
                <Menu.Item key="index" title="首页" style={{paddingLeft:'16px'}}>
                    <a href="http://localhost:3000">
                        <span>首页</span>
                    </a>
                </Menu.Item>
                <Menu.ItemGroup title="option1" className="lsider-menu-item-group">
                <Menu.Divider key="divider-1" style={{marginTop:'8px', marginBottom:'12px', width:'200px', minWidth:'50%' }}/>
                    <Menu.Item key="option1-1">key1</Menu.Item>
                    <Menu.Item key="option1-2">key2</Menu.Item>
                    <Menu.Item key="option1-3">key3</Menu.Item>
                </Menu.ItemGroup>
                <Menu.ItemGroup title="option2" className="lsider-menu-item-group">
                <Menu.Divider key="divider-2" style={{marginTop:'8px', marginBottom:'12px', width:'200px', minWidth:'50%' }}/>
                    <Menu.Item key="option2-1">key1</Menu.Item>
                    <Menu.Item key="option2-2">key2</Menu.Item>
                    <Menu.Item key="option2-3">key3</Menu.Item>
                </Menu.ItemGroup>
                <Menu.ItemGroup title="option3" className="lsider-menu-item-group">
                <Menu.Divider key="divider-3" style={{marginTop:'8px', marginBottom:'12px', width:'200px', minWidth:'50%' }}/>
                    <Menu.Item key="option3-1">key1</Menu.Item>
                    <Menu.Item key="option3-2">key2</Menu.Item>
                    <Menu.Item key="option3-3">key3</Menu.Item>
                </Menu.ItemGroup>
                <Menu.ItemGroup title="option4" className="lsider-menu-item-group">
                <Menu.Divider key="divider-4" style={{marginTop:'8px', marginBottom:'12px', width:'200px', minWidth:'50%' }}/>
                    <Menu.Item key="option4-1">key1</Menu.Item>
                    <Menu.Item key="option4-2">key2</Menu.Item>
                    <Menu.Item key="option4-3">key3</Menu.Item>
                </Menu.ItemGroup>
            </Menu>
        );
    }
}

export default Lsider;
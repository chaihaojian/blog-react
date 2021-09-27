import React from 'react';
import { Menu } from 'antd';
import { Drawer, Button } from 'antd';
import { UnorderedListOutlined } from '@ant-design/icons'
import './index.css'

class LsiderDrawer extends React.Component {
    state = { visible: false, placement: 'left' };

    showDrawer = () => {
        this.setState({
            visible: !this.state.visible,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };

    onChange = e => {
        this.setState({
            placement: e.target.value,
        });
    };

    render() {
        const { placement, visible } = this.state;
        return (
            <>
                <Drawer
                    title="Basic Drawer"
                    placement={placement}
                    closable={true}
                    onClose={this.onClose}
                    visible={visible}
                    key={placement}
                    width="220px"
                    handler={
                        <Button id="drawer-btn" type="primary" onClick={this.showDrawer}>
                            <UnorderedListOutlined style={{color:" #000000d9"}}/>
                        </Button>}
                        >
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{ height: '100%', overflow: "auto", borderRight: "0" }}
                        >
                            <Menu.Item key="index" title="首页" style={{ paddingLeft: '16px' }}>
                                <a href="http://localhost:3000">
                                    <span>首页</span>
                                </a>
                            </Menu.Item>
                            <Menu.ItemGroup title="option1" className="lsider-menu-item-group">
                                <Menu.Divider key="divider-1" style={{ marginTop: '8px', marginBottom: '12px', width: '200px', minWidth: '50%' }} />
                                <Menu.Item key="option1-1">key1</Menu.Item>
                                <Menu.Item key="option1-2">key2</Menu.Item>
                                <Menu.Item key="option1-3">key3</Menu.Item>
                            </Menu.ItemGroup>
                            <Menu.ItemGroup title="option2" className="lsider-menu-item-group">
                                <Menu.Divider key="divider-2" style={{ marginTop: '8px', marginBottom: '12px', width: '200px', minWidth: '50%' }} />
                                <Menu.Item key="option2-1">key1</Menu.Item>
                                <Menu.Item key="option2-2">key2</Menu.Item>
                                <Menu.Item key="option2-3">key3</Menu.Item>
                            </Menu.ItemGroup>
                            <Menu.ItemGroup title="option3" className="lsider-menu-item-group">
                                <Menu.Divider key="divider-3" style={{ marginTop: '8px', marginBottom: '12px', width: '200px', minWidth: '50%' }} />
                                <Menu.Item key="option3-1">key1</Menu.Item>
                                <Menu.Item key="option3-2">key2</Menu.Item>
                                <Menu.Item key="option3-3">key3</Menu.Item>
                            </Menu.ItemGroup>
                        </Menu>
                </Drawer>
            </>
        );
    }
}

export default LsiderDrawer
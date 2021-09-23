import React from 'react';
import { Anchor } from 'antd';
import "./index.css"

const { Link } = Anchor;

class Rsider extends React.Component {
    render() {
        return (
            <Anchor style={{backgroundColor:"rgb(255, 255, 255)"}}>
                <Link href="#components-anchor-demo-basic" title="Basic demo" />
                <Link href="#components-anchor-demo-static" title="Static demo" />
                <Link href="#API" title="API">
                    <Link href="#Anchor-Props" title="Anchor Props" />
                    <Link href="#Link-Props" title="Link Props" />
                </Link>
            </Anchor>
        );
    }
}

export default Rsider;
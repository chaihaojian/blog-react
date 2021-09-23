import React from 'react';
import "./index.css";
import logoURL from './logo.jpg'

class Nav extends React.Component {
    render() {
        return (
            <div className="nav-header-row">
                <div className="nav-header-row-logo">
                    <img src={logoURL} alt="" id="logo"/>
                </div>
                <div className="nav-header-row-info"></div>
            </div>
        );
    }
}

export default Nav;
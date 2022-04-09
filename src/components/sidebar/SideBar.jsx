import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import './sidebar.css';

import logo from '../../assets/images/favicon.png'

import sidebar_items from '../../assets/JsonData/sidebar_routes.json'
import SidebarItem from './SidebarItem';

const SideBar = () => {
    const {pathname}=useLocation();
    const activeItem = sidebar_items.findIndex(item =>item.route === pathname);
    console.log(activeItem)

    return (
        <div className="sidebar">
            <div className="sidebar__logo">
                <img src={logo} alt="" />
            </div>
            {
                sidebar_items.map((item ,i) => (
                    <Link to={item.route} key={i}>
                       <SidebarItem active={i=== activeItem ? "active" : ""} title={item.display_name} icon={item.icon} />
                    </Link>
                ))
            }
        </div>
    );
};

export default SideBar;
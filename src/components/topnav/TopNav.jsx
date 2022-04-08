import React from 'react';
import { Link } from 'react-router-dom';

import './topnav.css';

import DropDown from './../dropdown/Dropdown';

import notifications from '../../assets/JsonData/notification.json';

import user_image from '../../assets/images/tuat.png';

import user_menu from '../../assets/JsonData/user_menus.json';
import ThemeMenu from './../thememenu/ThemeMenu';


const curr_user ={
    display_name: 'Dat Hoang',
    image: user_image
}
const renderUserMenu = (item, index) => (
    <Link to='/'  key={index}>
        <div className="notification-item">
            <i className={item.icon}></i>
            <span>{item.content}</span>
        </div>
    </Link>
)

const renderNotificationItem = (item,index) => (
    <div className="notification-item" key={index}>
        <i className={item.icon}></i>
        <span>{item.content}</span>
    </div>
)

const renderUserToggle = (user) => {
    return (
        <div className="topnav__right-user">
            <div className="topnav__right-user__image">
                <img src={user.image} alt="" />
            </div>
            <div className="topnav__right-user__name">
                {user.display_name}
            </div>
        </div>
    )
}




const TopNav = () => {
    return (
        <div className="topnav">
            <div className="topnav__search">
                <input type="text" placeholder="Search here..." />
                <i className="bx bx-search"></i>
            </div>

            <div className="topnav__right">
                <div className="topnav__right-item">
                    <DropDown
                       contentData={user_menu}
                       customToggle = {() =>renderUserToggle(curr_user)}
                       customRender={renderUserMenu}
                    />
                </div>
                <div className="topnav__right-item">
                    <DropDown 
                        icon="bx bx-bell"
                        badge="12"
                        contentData={notifications}
                        customRender={renderNotificationItem}
                        renderFooter = {() => <Link to='/'>View all</Link>}
                       
                    />
                </div>
                <div className="topnav__right-item">
                    <ThemeMenu/>
                </div>
                
            </div>
        </div>
    );
};

export default TopNav;



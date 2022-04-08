import React, { useEffect } from 'react';
import {BrowserRouter } from 'react-router-dom';

import './layout.css';
import RoutesConfig from '../Routes';
import SideBar from './../sidebar/SideBar';
import TopNav from './../topnav/TopNav';

import { useSelector, useDispatch } from 'react-redux';
import ThemeActions from '../../redux/actions/ThemeAction'


const Layout = () => {

    const themeReducer = useSelector(state => state.ThemeReducer)
    const dispatch = useDispatch()

    useEffect(()=>{
        const themeClass = localStorage.getItem('themeMode','theme-mode-light')
        
        const colorClass = localStorage.getItem('themeColor','theme-color-blue')

        dispatch(ThemeActions.setMode(themeClass))
        dispatch(ThemeActions.setColor(colorClass))
        
    },[dispatch])

    console.log(themeReducer.mode,themeReducer.color)
    return (
        <BrowserRouter>
            <div className={`layout ${themeReducer.mode} ${themeReducer.color}`}>
                <SideBar/>
                <div className="layout__content">
                    <TopNav/>
                    <div className="layout__content-main">
                        <RoutesConfig/>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    )
};

export default Layout;
import React, { useRef, useState,useEffect } from 'react';

import { useDispatch } from 'react-redux';
import ThemeActions from '../../redux/actions/ThemeAction'

import './thememenu.css';

const mode_settings =[
    {
        id: 'light',
        name: 'Light',
        background: 'light-background',
        class: 'theme-mode-light', 
    },
    {
        id: 'dark',
        name: 'Dark',
        background: 'dark-background',
        class: 'theme-mode-dark', 
    },
]
const color_settings = [
    {
        id: 'blue',
        name: 'Blue',
        background: 'blue-color',
        class: 'theme-color-blue'
    },
    {
        id: 'red',
        name: 'Red',
        background: 'red-color',
        class: 'theme-color-red'
    },
    {
        id: 'cyan',
        name: 'Cyan',
        background: 'cyan-color',
        class: 'theme-color-cyan'
    },
    {
        id: 'green',
        name: 'Green',
        background: 'green-color',
        class: 'theme-color-green'
    },
    {
        id: 'orange',
        name: 'Orange',
        background: 'orange-color',
        class: 'theme-color-orange'
    },
]
// const toggleTheme= (e,content_ref, toggle_ref) {

// }

const clickOutsideRef = (content_ref, toggle_ref) => {
    document.addEventListener('mousedown',(e)=>{
        if(toggle_ref.current && toggle_ref.current.contains(e.target)) {
            
            content_ref.current.classList.toggle('active')
        }
        else {
            if(content_ref.current && !content_ref.current.contains(e.target)) {
                content_ref.current.classList.remove('active')
            }
        }
    })

}

const ThemeMenu = () => {

    const dispatch= useDispatch();

    const menu_ref = useRef(null)
    const menu_toggle_ref = useRef(null)
    clickOutsideRef(menu_ref,menu_toggle_ref)
    
    const [currMode, setCurrMode] = useState('light')
    const [currColor, setCurrColor] = useState('blue')

    const setMode = mode => {
        setCurrMode(mode.id)
        localStorage.setItem('themeMode', mode.class)
        dispatch(ThemeActions.setMode(mode.class))
    }
    const setColor = color => {
        setCurrColor(color.id)
        localStorage.setItem('themeColor', color.class)
        dispatch(ThemeActions.setColor(color.class))
    }

    useEffect(()=>{
        const themeClass = mode_settings.find( e => 
            e.class === localStorage.getItem('themeMode','theme-mode-light')
        )

        const colorClass = color_settings.find( e => 
            e.class === localStorage.getItem('themeColor','theme-color-blue')
        )
        if(themeClass !== undefined) setCurrMode(themeClass.id)
        if(colorClass !== undefined) setCurrColor(colorClass.id)

    },[])

    return (
        <div>
            <button className="dropdown__toggle" ref={menu_toggle_ref}>
               <i className="bx bx-palette"></i>
            </button>
            <div className="theme-menu" ref={menu_ref}>
                <h4>Theme settings</h4>
                <button className="theme-menu__close" onClick={()=> menu_ref.current.classList.remove('active')}>
                    <i className="bx bx-x"></i>
                </button>
                <div className="theme-menu__select">
                    <span>choose mode</span>
                    <ul className="mode-list">
                        {
                            mode_settings.map((item,index) => (
                                <li key={index} onClick={() => setMode(item)}>
                                    <div className={`mode-list__color ${item.background} ${item.id === currMode ? 'active' : ''}`}>
                                        <i className="bx bx-check"></i>
                                    </div>
                                    <span>{item.name}</span>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="theme-menu__select">
                    <span>choose color</span>
                    <ul className="mode-list">
                        {
                            color_settings.map((item,index) => (
                                <li key={index}  onClick={() => setColor(item)}>
                                    <div className={`mode-list__color ${item.background} ${item.id === currColor ? 'active' : ''}`}>
                                        <i className="bx bx-check"></i>
                                    </div>
                                    <span>{item.name}</span>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ThemeMenu;
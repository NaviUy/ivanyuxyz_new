import React from 'react';

import './Toolbar.css';

import Logo from './logo-IY.png';

import DrawerToggleButton from '../SideDrawer/DrawerToggle'

const toolbar = props => (
    <header className="toolbar">

        <div className="toolbar__toggle-button"><DrawerToggleButton click={props.drawerClickHandler} toggleState={props.toggleState} /></div>

        <nav className="toolbar__navigation">
            <div></div>
            <div className="toolbar__logo"><a href="/"> <img className="logo" src={Logo} /> IVAN YU</a></div>
        </nav>
    </header>
);

export default toolbar;

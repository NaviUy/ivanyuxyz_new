import React from 'react';

import DTLA from '../../images/DTLA.jpeg';

import './NavHover.css';

const NavHover = props => {
    let home = "home";

    if (props.hovered === "home") {
        home = "home_hovered";
    }

    return (
        <div>
            <img className={home} src={DTLA}></img>
        </div>
    )

}

export default NavHover;
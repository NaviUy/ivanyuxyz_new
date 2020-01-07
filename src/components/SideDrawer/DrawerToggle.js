import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faAngleLeft } from '@fortawesome/free-solid-svg-icons'

import './DrawerToggle.css'

const drawerToggleButton = props => {
    let toggleState = 'toggle-button__line on';
    let toggleState2 = 'toggle-button__line';

    if(props.toggleState){
     toggleState = 'toggle-button__line'
     toggleState2 = 'toggle-button__line on';
    }

    return(
        <button className="toggle-button" onClick={props.click}>
            <FontAwesomeIcon icon={faBars} className={toggleState} />
            <FontAwesomeIcon icon={faAngleLeft} className={toggleState2} />
        </button>);

}


export default drawerToggleButton;

import React, { Component } from 'react';

import {
    Link
} from "react-router-dom";

import './SideDrawer.css';


class sideDrawer extends Component{

    // console.log(props.show);

    render(){
            let drawerClasses = 'side-drawer';

            if(this.props.show){
                drawerClasses = 'side-drawer open';
            }

            return (
            <nav className={drawerClasses}>
            <ul>
            <li><Link to="/" onClick={this.props.click}>HOME</Link></li>
            <li><Link to="/resume" onClick={this.props.click}>RESUME</Link></li>
            <li><Link to="/portfolio" onClick={this.props.click}>PORTFOLIO</Link></li>
            <li><Link to="/photography" onClick={this.props.click}>PHOTOGRAPHY</Link></li>
            <li><Link to="/contact" onClick={this.props.click}>CONTACT ME</Link></li>
            </ul>
        </nav>
    );

    }

}

export default sideDrawer;


// const sideDrawer = props => {

//     let drawerClasses = 'side-drawer';

//     if (props.show) {
//         drawerClasses = 'side-drawer open';
//     }

//     // console.log(props.show);

// return (
//     <nav className={drawerClasses}>
//         <ul>
//         <li><Link to="/" onClick={this.doSomething}>HOME</Link></li>
//         <li><Link to="/resume" >RESUME</Link></li>
//         <li><Link to="/portfolio">PORTFOLIO</Link></li>
//         <li><Link to="/photography">PHOTOGRAPHY</Link></li>
//         <li><Link to="/contact">CONTACT ME</Link></li>
//         </ul>
//     </nav>


// }

// export default sideDrawer;

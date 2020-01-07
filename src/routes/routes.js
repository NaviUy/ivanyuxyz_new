import React from "react";
import SideDrawer from '../components/SideDrawer/SideDrawer';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Home from './home';
import Resume from './resume';
import Portfolio from './portfolio';
import Photography from './photography';
import Contact from './contact';

const routes = props => {
    // console.log(props.show)

    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/resume" component={Resume} />
                    <Route path="/portfolio" component={Portfolio} />
                    <Route path="/photography" component={Photography} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/" component={Home} />

                </Switch>
            </div>

            <SideDrawer show={props.show} click={props.drawerClickHandler}/>

        </Router>);

}


export default routes;

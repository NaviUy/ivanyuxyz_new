import React, {
  Component
} from 'react';

import Toolbar from './components/Toolbar/Toolbar';
import Backdrop from './components/BackDrop/Backdrop';
import Routes from './routes/routes';

import './App.css';

class App extends Component {


  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    //alert("s")
    //console.log(this.state)
    this.setState((prevState) => {
      return {
        sideDrawerOpen: !prevState.sideDrawerOpen
      };
    });
   //console.log(this.state);
  };

  // sideBarHoverHandler = (state) => {
  //   this.setState(() => {
  //     if (state === "home") {
  //       return "home";
  //     } else {
  //       return "none";
  //     }
  //   })
  // }


  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = < Backdrop />
    }

    return (

      <div className="App" style={{ height: '100%' }} >
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} toggleState={this.state.sideDrawerOpen} />

        <Routes show={this.state.sideDrawerOpen} drawerClickHandler={this.drawerToggleClickHandler} test="TESTING" />

        {backdrop}
      </div>
    );
  }
}
export default App;

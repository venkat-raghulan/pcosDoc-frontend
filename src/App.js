import React, { Component } from "react";
import Navbar from "./components/Navmenu/Navmenu";
import "./App.css";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import BackDrop from "./components/BackDrop/BackDrop";
import "typeface-roboto";
// import Button from "@material-ui/core/Button";
import ActivityCard from "./components/ActivityCard/ActivityCard";
import SubGoalCardContainer from "./components/SubGoalCard/SubGoalCardContainer";

export default class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let backDrop;
    if (this.state.sideDrawerOpen) {
      backDrop = <BackDrop backdropClickHandler={this.backdropClickHandler} />;
    }

    return (
      <div className="App">
        <Navbar drawerClickHandler={this.drawerToggleClickHandler}></Navbar>
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backDrop}

        <main className="page-content">
          {/* <Button variant="contained" color="primary">
            Hello World
          </Button> */}
          <SubGoalCardContainer />
          <ActivityCard />
        </main>
      </div>
    );
  }
}

import React, { Component } from "react";
import Navbar from "./components/Navmenu/Navmenu";
import "./App.css";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import BackDrop from "./components/BackDrop/BackDrop";
import "typeface-roboto";
import Button from "@material-ui/core/Button";
import ActivityCard from "./components/ActivityCard/ActivityCard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Switch, Route } from "react-router-dom";
import MyGoals from "./views/MyGoals";
import Home from "./LandingPage/index";

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

  notify = () => toast("Wow so easy !");

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

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/mygoals" component={MyGoals} />
        </Switch>

        {/* <main className="page-content">
          <ToastContainer />
          <Button variant="contained" color="primary" onClick={this.notify}>
            Hello World
          </Button>
          <ActivityCard />
        </main> */}
      </div>
    );
  }
}

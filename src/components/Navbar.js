import React, { Component } from 'react';
import "../Css/Navbar.css";
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';

class Navbar extends Component {
  constructor(props) {
  super(props);
  this.state = {open: false};
}

handleToggle = () => this.setState({open: !this.state.open});

  render() {
    return (
      <div>
        <AppBar zDepth={1}
          title="ChatApp"
            iconClassNameRight = "muidocs-icon-navigation-expand-more"
            onLeftIconButtonClick={this.handleToggle}
        />
        <Drawer open={this.state.open}
          docked={false}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}>
            <MenuItem>Friends</MenuItem>
            <MenuItem>Messages</MenuItem>
            <MenuItem>Opions</MenuItem>
        </Drawer>
      </div>
    );
  }
}

export default Navbar;

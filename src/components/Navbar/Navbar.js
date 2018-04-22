import React, { Component } from 'react';
import "./Navbar.css";
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

class Navbar extends Component {
  constructor(props) {
  super(props);
  this.state = {open: false};
}

handleToggle = () => this.setState({open: !this.state.open});

  render() {
    return (
      <div className='navbar'>
        <AppBar zDepth={1}
          title="ChatApp"
          // set a couple of inline styles to change the background color to match one we selected
          // for the theme on the Figma and palleton
          style={{ height: 'auto', backgroundColor: '#15df88', borderBottom: '1px solid white' }}
            iconClassNameRight = "muidocs-icon-navigation-expand-more"
            iconElementLeft={(<div />)}
            onLeftIconButtonClick={this.handleToggle}
        />
      </div>
    );
  }
}

export default Navbar;

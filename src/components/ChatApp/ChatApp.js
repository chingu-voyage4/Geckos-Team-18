// TOP LEVEL COMPONENT

import React, { Component } from 'react';

import Footer from '../Footer/Footer.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Navbar from '../Navbar/Navbar.js';
import { MessageWindow } from '../../containers/MessageWindow';
import { UserList } from '../../containers/RecentList';
import OptionsMenu from '../OptionsMenu/OptionsMenu';
import './ChatApp.css';

// A couple of adjustments to begin generating a custom theme for
// our project. There are many other components that can be styled
// as a part of a custom theme. canvasColor change was necessary to
// set the default background color of most imported Material-UI
// components. Text color must be white to show up on dark backgrounds.

const muiTheme = getMuiTheme({
  palette: {
    canvasColor: '#f2f2f2',
    textColor: '#555'
  }
});

class ChatApp extends Component {
  render() {
    return (
        <MuiThemeProvider muiTheme={muiTheme}>
          <div>
          <Navbar/>
          <div className = "flex-container">
            <UserList />
            <MessageWindow />
            {/* <OptionsMenu /> */}
          </div>
          <Footer/>
          </div>
        </MuiThemeProvider>
    );
  }
}

export default ChatApp;

// TOP LEVEL COMPONENT

import React, { Component } from 'react';

import Footer from '../Footer/Footer.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Navbar from '../Navbar/Navbar.js';
import MessageWindow from '../MessageWindow/MessageWindow';
import RecentList  from '../RecentList/RecentList';
import './ChatApp.css';

// A couple of adjustments to begin generating a custom theme for
// our project. There are many other components that can be styled
// as a part of a custom theme. canvasColor change was necessary to
// set the default background color of most imported Material-UI
// components. Text color must be white to show up on dark backgrounds.

const muiTheme = getMuiTheme({
  palette: {
    canvasColor: '#0F143A',
    textColor: 'white'
  }
});

class ChatApp extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme} >
        <div
          style={{display: 'flex', flexDirection: 'column', flexWrap: 'wrap',
                  height: '100vh', justifyContent: 'center', margin: '0'}}
        >
          <Navbar />
          <RecentList />
          <MessageWindow />
          <Footer />
        </div>
      </ MuiThemeProvider>
    );
  }
}

export default ChatApp;

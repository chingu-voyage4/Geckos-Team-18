// DON'T LET THIS FILE FOOL YOU! IT'S BROKEN!
// During a refactoring session, I tried to break the ChatApp file out
// of its folder & to put the ChatApp.css files inline. It completely
// broke the flexbox layout.

// The apps entry point is still ChatApp/ChatApp.js
import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Footer from './Footer/Footer.js';
import Navbar from './Navbar/Navbar.js';
import MessageWindow from './MessageWindow/MessageWindow';
import RecentList  from './RecentList/RecentList';

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

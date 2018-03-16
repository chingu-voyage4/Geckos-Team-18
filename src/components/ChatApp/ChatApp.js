import React, { Component } from 'react';
import Footer from '../Footer/Footer.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Navbar from '../Navbar/Navbar.js'


class ChatApp extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="ChatApp">
          <Navbar/>
          <Footer/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default ChatApp;

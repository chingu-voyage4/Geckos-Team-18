import React, { Component } from 'react';
import Footer from './Footer.js';
import Navbar from './Navbar.js'

class ChatApp extends Component {
  render() {
    return (
      <div className="ChatApp">
      <Navbar/>
        <Footer></Footer>
      </div>
    );
  }
}

export default ChatApp;

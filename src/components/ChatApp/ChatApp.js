import React, { Component } from 'react';

import Footer from '../Footer/Footer.js';
import Navbar from '../Navbar/Navbar.js'
import RecentList  from '../RecentList/RecentList';


class ChatApp extends Component {
  render() {
    return (
        <div className="ChatApp">
          <Navbar/>
       <RecentList/>
          <Footer/>
        </div>
    );
  }
}

export default ChatApp;

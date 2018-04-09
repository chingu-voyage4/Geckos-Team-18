// This component will be responsible for displaying Messages and
// providing a place users to input a message.

import React, { Component } from 'react';
import MessageInput from '../MessageInput/MessageInput';
import './MessageWindow.css';
import io from "socket.io-client";
import {List, ListItem} from 'material-ui/List';

class MessageWindow extends Component {
  constructor(props){
    super(props);

    this.state = {
      message: "", //current most recent message
      messages: [], // arrey of all messages sent/recieved
      handle: "", //name? this.props.handle
      typing: "" // true or false
    }

    this.socket = io('localhost:8080');
    this.socket.on('RECEIVE_MESSAGE', function(data){ //listen for " RECEIVE_MESSAGE" from server
        addMessage(data);
    });

    this.socket.on('SOMEONE_TYPING', (data) => {
      console.log("typing from server");
      this.setState({typing: true})
      addTyping(data);
    })

    const addMessage = data => { // add data from server to state
        this.setState({messages: [...this.state.messages, data]});
        console.log(this.state.messages);
      };

    const addTyping = data => { //add "... is typing to page"
          this.timeout = setTimeout(() => {
            this.setState({typing: false,});
          }, 1500); // every 1.5secs removes component if server doesnt say "typing"
      }

    }

  render() {

    const listStyle = {
      height: 'auto',
      width: '80%',
    }

    const listItemStyle = {
      backgroundColor: 'rgb(244, 23, 90, 0.4)',
      borderRadius: '25px',
      fontSize: '1.3em',
      marginBottom: '1em',
      width: 'fit-content',
    }

    const typingText = {
      color: 'white',
      fontStyle: 'italic',
      fontSize: '1em',
      marginRight: 'auto',
      padding: '1em'
    }

    return (
      <div className='message-window'>
        {this.state.typing ? <span style={typingText}>{"typing"}</span> : ""}
        <List style={listStyle}>
          {this.state.messages.map((item,index) =>
            <ListItem style={listItemStyle}
              primaryText={item.message}
            />
          )}
        </List>
        <MessageInput />
      </div>
    );
  }
}
export default MessageWindow;

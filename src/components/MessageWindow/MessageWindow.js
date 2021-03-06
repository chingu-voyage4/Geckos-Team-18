// A list of messages will be displayed in this component. Once the
// MessageInput form is sent, its value will be passed to this and
// added to the list of messages. It also contains the MessageInput
// component.
import React, { Component } from 'react';
import MessageInput from '../MessageInput/MessageInput';
import './MessageWindow.css';
import io from 'socket.io-client';
import {List, ListItem} from 'material-ui/List';

class MessageWindow extends Component {
  constructor(props){
    super(props);

    this.state = {
      message: '', // current most recent message
      messages: [], // arrey of all messages sent/recieved
      handle: '', // name? this.props.handle
      typing: '' // true or false
    };

    this.socket = io('localhost:8080');
    // listen for " RECEIVE_MESSAGE" from server
    this.socket.on('RECEIVE_MESSAGE', (people, data) => {
        console.log(people);
        addMessage(people, data);
    });

    this.socket.on('SOMEONE_TYPING', (data) => {
      console.log('typing from server');
      this.setState({typing: true});
      addTyping(data);
    });

    const addMessage = (handle, data) => { // add data from server to state
        this.setState({
          messages: [ ...this.state.messages, data ],
        });
        console.log(this.state.messages);
        console.log(handle);
      };

    // a function for the message window component that adds "... is typing"
    // to the page and removes that message if the server has not
    // sent the typing event to the page in the last 1.5 seconds
    const addTyping = data => {
          this.timeout = setTimeout(() => {
            this.setState({ typing: false });
          }, 1500);
      };
    }

  render() {
    const listStyle = {
      height: 'auto',
      marginBottom: 'auto',
      overflowY: 'scroll',
      width: '85%'
    };

    const listItemStyle = {
      backgroundColor: 'rgb(244, 23, 90, 0.4)',
      borderRadius: '25px',
      fontSize: '1.3em',
      marginBottom: '1em',
      width: 'fit-content'
    };

    const typingText = {
      color: '#0F143A',
      fontStyle: 'italic',
      fontSize: '1em',
      marginRight: 'auto',
      padding: '1em'
    };

    return (
      <div className='message-window'>
        {this.state.typing ? <span style={typingText}>{'typing'}</span> : ''}
        <List style={listStyle}>
          {this.state.messages.map((item, index) =>
            <ListItem
              key={index}
              style={listItemStyle}
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

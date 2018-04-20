// This is the component that the user will type text into to
// submit a message. It will temporarily have two buttons,
// to make sure both types of messages can be displayed. A received
// message should align itself to the left and show up with a white
// background. A sent message should align itself to the right of
// the MessageWindow and have a pink background.

import React, { Component } from 'react';
import { RaisedButton, TextField } from 'material-ui';
import io from 'socket.io-client';

class MessageInput extends Component {
  constructor(props){
      super(props);

      this.state = {
        message: '',
        messages: [],
        handle:'' // who is sending the message? this.props.handle
      };

      this.socket = io('localhost:8080'); // !important
      this.sendMessage = this.sendMessage.bind(this);
      this.onChangeHandler = this.onChangeHandler.bind(this);
      this.onKeyDownHandler = this.onKeyDownHandler.bind(this);
      this.timeoutFunction = this.timeoutFunction.bind(this);
    }

      sendMessage() {  // to server
        this.socket.emit('SEND_MESSAGE', {
          message: this.state.message,
          fromWhatUser: this.state.handle // name of user who sent message
        });
        this.setState({messages: [...this.state.messages, this.state.message]});
        this.setState({message: ''});
      }

      onChangeHandler(e) { // tracks users input into TextField
        this.setState({message: e.target.value});
      }

      onKeyDownHandler(e) { // track if users are typing
        this.timeout = undefined;
        console.log(this.timeout);
        if (!this.state.typing) {
          this.setState({ typing: true });
          this.socket.emit('TYPING');
          this.timeout = setTimeout(this.timeoutFunction, 1500);
        } else {
          clearTimeout(this.timeout);
          this.timeout = setTimeout(this.timeoutFunction, 1500);
        }

      }

      // reverts this.state.typing to false causing another check on if keydown
      timeoutFunction() {
        this.setState({ typing: false });
      }

  render() {
    const styles = {
      fromMeStyle: {
        backgroundColor: '#F4175A',
        alignSelf: 'flex-end',
        marginLeft: 10

      },
      toMeStyles: {
        marginLeft: 10,
        alignSelf: 'flex-end',
        backgroundColor: '#fff'
      }
    };
    const { fromMeStyle } = styles;

    return (
    <div className='input'>
      <form>
        <TextField
          hintText='Place your message here'
          hintStyle={{color: '#555'}}
          onKeyDown={this.onKeyDownHandler}
          onChange={this.onChangeHandler}
          value={this.state.message}
        />
        <RaisedButton
          backgroundColor='#15DF88'
          label='Send' style={fromMeStyle}
          onClick={this.sendMessage}
        />
      </form>
    </div>
    );
  }


}

export default MessageInput;

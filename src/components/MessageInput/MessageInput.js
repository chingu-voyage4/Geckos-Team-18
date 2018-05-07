// This is the component that the user will type text into to
// submit a message. It will temporarily have two buttons,
// to make sure both types of messages can be displayed. A received
// message should align itself to the left and show up with a white
// background. A sent message should align itself to the right of
// the MessageWindow and have a pink background.

import React, { Component } from 'react';
import { RaisedButton, TextField } from 'material-ui';
import io from 'socket.io-client';
import { SEND_MESSAGE } from '../../actions/types';

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

      sendMessage() {
        // add the message to redux store
        this.props.dispatch({
          type: SEND_MESSAGE,
          message: this.state.message,
          author: this.props.myName
        });
        // send the message to the server 
        this.socket.emit('SEND_MESSAGE', {
          message: this.state.message,
          fromWhatUser: this.props.myName // name of user who sent message
        });
        this.setState({message: ''});
      }


      // Each time the user presses a key, fire a TYPING event and set
      // a 1.5 second timer.
      // If the user has not pressed a key in the last 1.5 seconds, change
      // this.state.typing to false
      onChangeHandler(e) {
        this.timeout = undefined;
        // console.log(this.timeout);
        if (!this.state.typing) {
          this.setState({ typing: true });
          this.socket.emit('TYPING');
          this.timeout = setTimeout(this.timeoutFunction, 1500);
        } else {
          clearTimeout(this.timeout);
          this.timeout = setTimeout(this.timeoutFunction, 1500);
        }
        this.setState({ message: e.target.value });
      }

      // If the key pressed is enter
      // dispatch the sendMessage action, passing it the value
      // of the TextField
      onKeyDownHandler(e) {
        if (e.key === 'Enter') {
          e.preventDefault();
          this.sendMessage();
          e.target.value ='';
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
        // Either a click of the RaisedButton, or a press of the 'Enter' key should submit
    // the form(trigger the same function). // That function should fire a dispatch action
    // the dispatch should take two parameters. The current value of the TextField, and
    // the author.

    // Need to change the form to a reduxForm so that it can be accessed by the redux store.
    <div className='input'>
      <form>
        <TextField
          hintText='Place your message here'
          hintStyle={{color: '#555'}}
          onKeyDown={this.onKeyDownHandler}
          onChange={this.onChangeHandler}
          value={this.state.message}
          // This ref is supposed to record the value of the textfield as a reference
          // possible/likely refactor opportunity later on.
          // ref={(node) => { TextField = node }}
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

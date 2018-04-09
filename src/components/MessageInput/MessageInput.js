// This is the component that the user will type text into to 
// submit a message. It will temporarily have two buttons, 
// to make sure both types of messages can be displayed. A received 
// message should align itself to the left and show up with a white
// background. A sent message should align itself to the right of
// the MessageWindow and have a pink background.

import React, { Component } from 'react';
import { RaisedButton, TextField } from 'material-ui';

class MessageInput extends Component {

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
    } 
    const { fromMeStyle, toMeStyles } = styles;

    return (
    <div className='input'>
      <form>
        <TextField 
          hintText='Place your message here'
          hintStyle={{color: 'white'}}
          />
        <RaisedButton backgroundColor='#F4175A'label='From Me' style={fromMeStyle} />
        <RaisedButton backgroundColor='#15DF88'label='To Me' style={toMeStyles} />
      </form>
    </div>
    );
  }

  
}

export default MessageInput;

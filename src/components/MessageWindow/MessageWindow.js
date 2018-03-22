// This component will be responsible for displaying Messages and 
// providing a place users to input a message. 

import React from 'react';
import MessageInput from '../MessageInput/MessageInput';
import './MessageWindow.css';

const MessageWindow = () => {
  return (
    <div className='message-window'>
      <MessageInput />
    </div>
  );
}

export default MessageWindow;

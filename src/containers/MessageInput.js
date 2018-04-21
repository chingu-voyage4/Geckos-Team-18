// Connect the MessageInput component to the redux store. This allows
// the data sent by the messageInput component to be used by the other
// components that care about state; specifically the MessageWindow.

import { connect } from 'react-redux';
import MessageInputComponent from '../components/MessageInput';
import { addMessage } from '../actions/index';

const mapDispatchToProps = dispatch => ({
  dispatch: (message, author) => {
    dispatch(addMessage(message, author));
  }
});

export const MessageInput = connect(() => ({}), mapDispatchToProps)(MessageInputComponent);
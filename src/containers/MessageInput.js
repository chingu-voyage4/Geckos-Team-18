// Connect the MessageInput component to the redux store. This allows
// the data sent by the messageInput component to be used by the other
// components that care about state; specifically the MessageWindow.

import { connect } from 'react-redux';
import MessageInputComponent from '../components/MessageInput/MessageInput';
import { sendMessage } from '../actions/index';


const mapStateToProps = state => {
  return { myName: state.myName };
};

const mapDispatchToProps = dispatch => ({
  dispatch: (message, author) => {
    dispatch(sendMessage(message, author));
  }
});

export const MessageInput = connect(mapStateToProps, mapDispatchToProps)(MessageInputComponent);
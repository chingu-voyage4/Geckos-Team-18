import { connect } from 'react-redux';
import MessageWindowComponent from '../components/MessageWindow/MessageWindow';

export const MessageWindow = connect(state => ({
  messages: state.messages
}), {})(MessageWindowComponent);
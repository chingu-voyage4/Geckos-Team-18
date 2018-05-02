import { connect } from 'react-redux';
import MessageWindowComponent from '../components/MessageWindow/MessageWindow';

const mapStateToProps = state => {
  return { messages: state.messages };
};

export const MessageWindow = connect(mapStateToProps)(MessageWindowComponent);
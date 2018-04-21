import * as types from '../actions/types';

const messages = ( state = [], action) => {
  switch (action.type) {
    case types.SEND_MESSAGE:
    case types.MESSAGE_RECIEVED:
      return (
        [ ...state, {
          id: action.id,
          message: action.message,
          author: action.author
      }]
    );
    default:
      return state;
  }
};

export default messages;
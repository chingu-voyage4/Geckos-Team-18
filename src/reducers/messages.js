import * as types from './types';

const messages = ( state = [], action) => {
  switch (action.type) {
    case types.SEND_MESSAGE:
    case types.MESSAGE_RECEIVED:
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
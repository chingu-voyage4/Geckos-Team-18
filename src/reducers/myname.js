import * as types from '../actions/types';

export const myName = ( state = null, action) => {
  switch (action.type) {
    case types.RECORD_NAME:
      return ( state = action.name );
    default:
      return state;
  }
};


import * as types from './types';

const users = (state = [], action) => {
  switch (action.type) {
    case types.USER_JOINED:
      return [...state, {name: action.name, id: action.id}];
    case types.USERS_LIST:
      return action.users;
    default:
      return state;
  }
};

export default users;
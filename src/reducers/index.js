// This file creates combines all the reducers from
// our application. There are two main types of data
// being displayed by the chat app: users, and messages.

import { combineReducers } from 'redux';
import messages from './messages';
import users from './users';

const chat = combineReducers({
  messages,
  users
});

export default chat;
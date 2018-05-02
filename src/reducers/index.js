// This file creates combines all the reducers from the store for
// our application. There are two main types of data being displayed
// by the chat app: users, and messages.
import { combineReducers, createStore, applyMiddleware } from 'redux';
import createSocketIoMiddleware from 'redux-socket.io';
import io from 'socket.io-client';
import messages from './messages';
import users from './users';

const socket = io('http://localhost:3000');
const socketIoMiddleware = createSocketIoMiddleware(socket, 'server/');

// Basic chat functionality consists of two parts: messages and users
const chat = combineReducers({
  messages,
  users
});

// The redux store is the result of applying the socketIoMiddleware to
// the chat.
const store = createStore(
  chat,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// Look at the redux store
store.subscribe(() => {
  console.log('new client state', store.getState());
});
// Dispatch an action to say hello to the server
store.dispatch({type: 'server/hello', data:'Hello!'});

export default store;
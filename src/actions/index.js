import * as types from './types.js';

let nextMessageId = 0;
let nextUserId = 0;

export const sendMessage = (message, author) => ({
  type: types.SEND_MESSAGE,
  id: nextMessageId++,
  message,
  author
});

export const addUser = name => ({
  type: types.USER_JOINED,
  id: nextUserId++,
  name
});

export const messageReceived = (message, author) => ({
  type: types.MESSAGE_RECIEVED,
  id: nextMessageId++,
  message,
  author
});

export const populateUsersList = users => ({
  type: types.USERS_LIST,
  users
});
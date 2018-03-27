import ChatApp from './components/ChatApp/ChatApp';
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';


ReactDOM.render(  <MuiThemeProvider> <ChatApp/>  </MuiThemeProvider>, document.getElementById('root'));
registerServiceWorker();




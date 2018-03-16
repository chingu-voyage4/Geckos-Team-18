import ChatApp from './components/ChatApp/ChatApp';
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Paper from 'material-ui/Paper';

ReactDOM.render(<ChatApp />, document.getElementById('root'));
registerServiceWorker();

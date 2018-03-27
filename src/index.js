import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import ChatApp from './components/ChatApp/ChatApp';


ReactDOM.render( <ChatApp/> , document.getElementById('root'));
registerServiceWorker();




import ChatApp from './components/ChatApp';
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<ChatApp />, document.getElementById('root'));
registerServiceWorker();

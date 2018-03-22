import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import ChatApp from './components/ChatApp/ChatApp';


// import Paper from 'material-ui/Paper';
// >>>>>>> feature/nav
// >>>>>>> c8faba0b0aa6c4fa8f931a37534bfddd7b5091e8

ReactDOM.render(<ChatApp />, document.getElementById('root'));
registerServiceWorker();

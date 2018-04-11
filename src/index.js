import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';


/* ChatApp is the entry point to the React code.*/
import ChatApp from './components/ChatApp/ChatApp';

import { BrowserRouter, Route} from 'react-router-dom';

/* also this registration page is a thing */
import RegistrationApp from './components/Registration/RegistrationApp';


ReactDOM.render(<BrowserRouter>
                    <div>
                        <Route exact path="/" component={ChatApp} />
                        <Route path="/register" component={RegistrationApp}/>
                    </div>
                </BrowserRouter>,
                document.getElementById('root'));

registerServiceWorker();




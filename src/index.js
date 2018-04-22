import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import store from './reducers';
/* ChatApp is the entry point to the React code.*/
import ChatApp from './components/ChatApp/ChatApp';
/* also this registration page is a thing */
import RegistrationApp from './components/Registration/RegistrationApp';

ReactDOM.render(<Provider store={store}>
                    <BrowserRouter>
                        <div>
                            <Route exact path="/" component={ChatApp} />
                            <Route path="/register" component={RegistrationApp}/>
                        </div>
                    </BrowserRouter>
                </Provider>,
                document.getElementById('root'));
registerServiceWorker();




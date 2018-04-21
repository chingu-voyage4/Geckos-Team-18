import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import chat from './reducers';
/* ChatApp is the entry point to the React code.*/
import ChatApp from './components/ChatApp/ChatApp';
/* also this registration page is a thing */
import RegistrationApp from './components/Registration/RegistrationApp';

const store = createStore(chat);

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




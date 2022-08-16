import React from 'react';
import ReactDOM from 'react-dom/client';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { createLogger } from 'redux-logger';
import { createStore, compose, applyMiddleware } from 'redux';

import App from './App';

//import store 
import redux from './redux/redux';

const reduxlogger = createLogger();

const store = createStore(redux, compose(applyMiddleware(thunk,reduxlogger)));

const reactDOM = ReactDOM.createRoot(document.getElementById('root'));

reactDOM.render(
    <Provider store={store}>
        <Router>
            <App/>
        </Router>
    </Provider>
)


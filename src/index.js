import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import * as serviceWorker from './serviceWorker';
import Routers from './router/router';
import rootReducer from './reducers/rootReducers'

let store = createStore(rootReducer,compose(applyMiddleware(thunk)))
ReactDOM.render(
    <Provider store={store} >
               <Routers />
     </Provider>,
    document.getElementById('root'),
    );
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

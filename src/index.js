import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, applyMiddleware} from 'redux'
import reducers from './reducers/reducers'
import { Provider } from 'react-redux'
import thunk from "redux-thunk"
import { composeWithDevTools } from 'redux-devtools-extension';


const store = createStore(reducers, 
                          composeWithDevTools(
                            applyMiddleware(thunk),
                          ))
                          
ReactDOM.render(
    <Provider store={store}>
    <App/>
    </Provider>, 
document.getElementById('root'));
registerServiceWorker();

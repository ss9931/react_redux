import React from 'react';
import ReactDOM from 'react-dom';


import reducer from './reducer/index';
import {createStore} from 'redux';
import {Provider} from 'react-redux';


import App from './App';
import registerServiceWorker from './registerServiceWorker';


var store=createStore(reducer);
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'));
registerServiceWorker();

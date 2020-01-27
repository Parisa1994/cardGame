//Vendor
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

//Redux store
import {store} from "./redux/store";

//Router and start application flow
import {App} from './App';

//Styles loader
import './assets/StyleLoader';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));



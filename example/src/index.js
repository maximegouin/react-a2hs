import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import App from './App';
import store from './store'
import './index.css'
import 'semantic-ui-css/semantic.min.css'
import initServiceWorkers from './initServiceWorkers';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);

initServiceWorkers();
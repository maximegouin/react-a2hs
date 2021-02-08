import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import initServiceWorkers from './initServiceWorkers';

ReactDOM.render(<App />, document.getElementById('root'))

initServiceWorkers();
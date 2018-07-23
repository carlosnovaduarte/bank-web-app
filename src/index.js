import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import web3HOC from './HOCs/withWeb3.js';
const web3Enhancer = web3HOC()
const EnhancedApp = web3Enhancer(App)

ReactDOM.render(<EnhancedApp />, document.getElementById('root'));
registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import counterStore from './components/store/index'

ReactDOM.render(<Provider store={counterStore}><App /></Provider>, document.getElementById('root'));

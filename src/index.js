import React from 'react';
import ReactDOM from 'react-dom';
import io from 'socket.io-client';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const socket =io();

//socket test
socket.on('hello', ({ message }) =>
	alert(message));

ReactDOM.render(<App socket={socket}/>, document.getElementById('root'));
registerServiceWorker();

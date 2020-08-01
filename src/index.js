import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import  { BrowserRouter as Router } from 'react-router-dom'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {RoomProvider} from './Context'
ReactDOM.render(
    <RoomProvider>
<Router>
<App />
</Router>
</RoomProvider>,
document.getElementById('root'));
registerServiceWorker();

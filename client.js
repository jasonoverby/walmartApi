import React from 'react';
import ReactDOM from 'react-dom';
import AppComponent from './components/App.jsx';

const App = React.createFactory(AppComponent);
const mountNode = document.getElementById('root');
const serverState = window.state;

ReactDOM.hydrate(App(serverState), mountNode);

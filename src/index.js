import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const state = {
  todos: [
    {id:1, name: "render static UI", isComplete: true},
    {id:2, name: "createinital state", isComplete: false},
    {id:3, name: "rrender base on state", isComplete: false}
  ]
};
ReactDOM.render(<App todos={state.todos}/>, document.getElementById('root'));
registerServiceWorker();

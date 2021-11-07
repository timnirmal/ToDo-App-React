import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//Add array of data to App.js
const DATA = [
    { id: "todo-0", name: "Eat", completed: true },
    { id: "todo-1", name: "Code", completed: false },
    { id: "todo-2", name: "Sleep", completed: false },
    { id: "todo-3", name: "Repeat", completed: false }
];

ReactDOM.render(
    <React.StrictMode>
        <App task={DATA}/>
    </React.StrictMode>,
    document.getElementById('root')
);
import "babel-polyfill";
import "whatwg-fetch";
import "eventsource-polyfill";
import React from 'react';
import { render } from 'react-dom';
import { App } from './App';
import TodoApp from './ui/todos/TodoApp';


render(<TodoApp />, document.getElementById('root'));
// render(<App />, document.getElementById('root'));

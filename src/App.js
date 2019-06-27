import React from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import "bootstrap/dist/css/bootstrap.min.css"
import 'font-awesome/css/font-awesome.min.css';
import uuid from 'uuid';

function App() {
  return (
    <div>
      <div class="container">
        <div class="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 text-capitalize text-center>Todo input</h3>
            
            <TodoInput />
            <TodoList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

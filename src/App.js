import Container from './Components/Container';
import TodosList from './Components/TodoList';
import React from 'react';


import "./App.css"

function App() {
  return (
    <div className="App">
      <div className="header">
     
       <h1 id='todos' >TODOS APP</h1>
     
     </div>
     <Container />
     <TodosList />

    </div>
  );
}

export default App;

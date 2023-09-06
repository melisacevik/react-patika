import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/js/bootstrap.bundle";
import Input from './Components/Input'; 
import './App.css'; 
import Todo from './Components/Todo'; 
function App() {

  const [todos, setTodos] = useState([
    { id: 1, name: "Todo 1", status: {name: 'test', id:1}, category: {name: 'test', id:1} }
  ]);

  const [showArea, setShowArea] = useState(true);

  return (
    <div className="container">
      <div className="d-flex align-items-center justify-content-start mt-3">
        <button className='me-5'> TODO LIST </button>
        <button> Categories </button>
      </div>

    {showArea && <> 
      <div id="inputArea"> 
      <div className="row d-flex align-items-center justify-content-center mt-3 mb-3">
        <div className="col-10">
          <Input setTodos={setTodos} todos={todos} />
        </div>
      </div>
      </div>
      <div id="todosArea">
        <div className="row d-flex align-items-center justify-content-center mt-5 mb-3">
        <div className="col-12">
          {todos.map((todo) => {
            return (
                <Todo key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />
            );
          })}
        </div>
        </div>
      </div>
    
    </>

    }
    </div>
  );
}

export default App;

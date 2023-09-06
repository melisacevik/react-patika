import React from 'react'

export default function Todo({todo, todos, setTodos}) {

    const deleteTodo = () => {
        const filteredTodos = todos.filter(item => item.id !== todo.id);
        setTodos(filteredTodos);
    };

  return (
    <div className='mb-3 row justify-content-center align-items-center'> 
        <div className='bg-dark text-white p-3 fw-bold me-5 col-5'>
        {todo.name}
        </div>
        <div className='bg-secondary text-white p-3 fw-bold me-3 col-2'>
          {todo.category.name}
        </div>
        <div className='bg-secondary text-white p-3 fw-bold col-2'>
        {todo.status.name}
        </div>
        <button className='btn btn-warning py-3 px-1 col-1 ms-3 w-auto' onClick={() => deleteTodo()}> X </button>
    </div>
  )
}

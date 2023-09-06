import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../App.css';

function Input({setTodos, todos}) {

  const [todo, setTodo] = useState("");
  const [categories, setCategories] = useState([
    { id: 1, name: "Personal" },
    { id: 2, name: "Garanti BBVA" },
    { id: 3, name: "Patika.dev" }
  ]);

  const [status, setStatus] = useState([
    { id: 1, name: "New", group: [1, 2] },
    { id: 2, name: "Todo", group: [1, 2, 3] },
    { id: 3, name: "In progress", group: [1, 2, 3] },
    { id: 4, name: "Done", group: [1, 2, 3] }
  ]);

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filteredStatus, setFilteredStatus] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState([]);


  useEffect(() => {
    if (selectedCategory === null) {
      setFilteredStatus(status);
    } else {
      const filtered = status.filter((s) => s.group.includes(selectedCategory.id));
      setFilteredStatus(filtered);
    }
  }, [selectedCategory, status]);

  const handleCategoryChange = (e) => {

    const filteredCategory = categories.filter((c) => c.id === parseInt(e.target.value, 10));
    setSelectedCategory(filteredCategory[0]);
  };

  const handleStatusChange = (e) => {
    const filteredStatus = status.filter((s) => s.id === parseInt(e.target.value, 10));

    setSelectedStatus(filteredStatus[0]);
  };

  const addTodo = () => {
    // selected status is an array so we need to check if it is empty or not
    if(selectedCategory === null || selectedStatus.length == 0 || todo === ""){
        return;
    }
    setTodos(() => {
        return [
            ...todos,
            {
            id: todos.length + 1,
            name: todo,
            status: selectedStatus,
            category: selectedCategory
            }
        ];
    });
  };

  return (
    <>
      <div className="input-group">
        <div></div>
        <input
          type="text"
          className="form-control"
          aria-label="Text input with dropdown buttons"
          onChange={(e) => setTodo(e.target.value)}
        />
        <div className="input-group-append">
          <select
            className="btn btn-outline-secondary dropdown-toggle rounded-0"
            type="button"
            aria-haspopup="true"
            aria-expanded="false"
            onChange={handleCategoryChange}
          >
            <option value="0" disabled selected>Categories</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <div className="input-group-append">
          <select
            className="btn btn-outline-secondary dropdown-toggle rounded-0"
            type="button"
            aria-haspopup="true"
            aria-expanded="false"
            onChange={handleStatusChange}
          >
            <option value="0" disabled selected>Status</option>
            {filteredStatus.map((status) => (
              <option key={status.id} value={status.id} >{status.name}</option>
            ))}
          </select>
        </div>
        <button className="btn btn-outline-secondary rounded-0" type="button" onClick={() => addTodo() } > 
          Add
        </button>
      </div>
    </>
  );
}

export default Input;

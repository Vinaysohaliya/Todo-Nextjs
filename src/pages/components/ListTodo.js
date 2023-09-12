import React from 'react'
import { useState } from 'react';

const TodoList = ({ todos, editTodo,DeletTodo }) => {

  const [editedText, setEditedText] = useState('');

  const [editingId, setEditingId] = useState(null);

  function handleEditClick(todo) {
    setEditingId(todo.id)
    setEditedText(todo.text)
  }

  function handleSaveClick(todo) {
    editTodo(editedText,todo.id)
    setEditingId(null); 
    setEditedText('');
  }


  return (
    <ul>
      {todos.map((todo) => (
        <div key={todo.id}>
        {editingId === todo.id ? (
            <li>
              <input
                type="text"
                value={editedText}
                onChange={(e) => setEditedText(e.target.value)}
              />
              <button onClick={() => handleSaveClick(todo)}>Save</button>
            </li>
          ) : (
            <li>
              {todo.text}
              <button className="px-2" onClick={() => handleEditClick(todo)}>
                Edit
              </button>
              <button className="px-2" onClick={() => DeletTodo(todo.id)}>
              Delete
              </button>
            </li>
          )}
         
        </div>
      ))}
    </ul>
  )
}

export default TodoList
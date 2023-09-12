import React, { useState } from 'react'
import TodoForm from './components/TodoForm'
import TodoList from './components/ListTodo'

const Home = () => {
  const [todos, setTodos] = useState([])

  const addTodo = (value) => {
    const newTodo = {
      id: todos.length + 1,
      text: value
    }
    const newTodos = [...todos, newTodo]
    setTodos(newTodos)
  }

  
  const editTodo = (value,id) => {
  
    const editedTodo=todos.map((todo)=>(
        todo.id===id?{...todo,text:value}:todo
    ))

    setTodos(editedTodo)
  
  }

  const DeletTodo = (id) => {
  
    const DeletedTodos=todos.filter((todo)=>todo.id!=id)

    setTodos(DeletedTodos)
  
  }

  return (
    <div>
      <TodoForm todos={todos} addTodo={addTodo} />
      <TodoList DeletTodo={DeletTodo} editTodo={editTodo} todos={todos} />
    </div>
  )
}

export default Home
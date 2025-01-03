import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo/AddTodo'
import TodoList from './components/TodoList/TodoList'
import Banner from './components/Banner/Banner'

function App() {
    const [todos,setTodos]= useState([
      // {id:1,text: 'todo1',isFinite:true},
      // {id:2,text: 'todo2',isFinite:false}
    ]);
    function addTodos(todoText){
      let nextId=todos.length+1;
    setTodos([...todos,{id:nextId, isFinished:false, text:todoText}]);
    }
  return (
  <>
  <Banner/>
  <AddTodo addTodos={addTodos}/>
  <TodoList todos={todos} setTodos={ setTodos }/>
  </>
  )
}

export default App

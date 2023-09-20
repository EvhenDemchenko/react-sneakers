import { useEffect, useState } from "react"
//components
import { Header } from "./components/Header/Header"
import { TodoItems } from "./components/TodoItems/TodoItems"

export const  App = () => {
  const [id, setId] = useState(4)
  const [todos, setTodos] = useState([{id:0, title: 'title 1 ', text: 'title text 1', edit: false},
  {id:1, title: 'title 2 ', text: 'title text 2', edit: false},
  {id:2, title: 'title 3 ', text: 'title text 3', edit: false},
  {id:3, title: 'title 4 ', text: 'title text 4', edit: false},] )

  const addNewTodoItem = (todo)=>{
    console.log(todo)
    setTodos((prev)=> [todo,...prev] )
    setId(prev=> prev+1)
  }
  const deleteCurrentTodo = (id) =>{
    const newTodoList = todos.filter((item)=>{
      if(item.id != id) {
        return item
      }
    })
    setTodos(newTodoList)
  }
  const editCurrentItem = ( id, newText) =>{

    const newTodoList = todos.map((item)=>{
      if(item.id === id) {
        item.edit = !item.edit

        item.text = newText
      }
      return item
    })
    setTodos(newTodoList)
  }


  
  
  return (
    <>
    <div>
      <Header id={id} addNewTodoItem={addNewTodoItem} />
      <TodoItems todos={todos} deleteCurrentTodo={deleteCurrentTodo} editCurrentItem={editCurrentItem}/>
    </div>
    </>
  )
}


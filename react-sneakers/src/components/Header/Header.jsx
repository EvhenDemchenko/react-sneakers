import styles from './Header.module.scss'
import { useState } from 'react'

export const Header = (props) =>{
    const [title, setTitle] = useState('')     
    const [text, setText] = useState('')
    
    const {id,  addNewTodoItem} = props
    const addNewTodoItemHandler = ()=>{
        const todo = {id, title, text, edit:false}
        addNewTodoItem(todo)
        
        setText('')
        setTitle('')
    }

    return (
    <div className={styles.header}>
        <input
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            type="text" placeholder="title"  />
        <textarea 
            onChange={(e) => setText(e.target.value)}
            value={text}
            type="text" placeholder="text" />
        <button 
        onClick={addNewTodoItemHandler}
        > add new todo to list </button>
    </div>)
}
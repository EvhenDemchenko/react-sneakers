import { useState } from 'react'
import styles from './TodoItem.module.scss'

export const TodoItem = ({todo, deleteCurrentTodo, editCurrentItem}) =>{
    const {title , text, id, edit } = todo

    const [newText, setNewText] = useState(text)
    const btnState = edit ? 'save' : 'edit'
    
    const deleteItemHandler = ()=>{
        deleteCurrentTodo(id)
    }
    const editItemHandler = () =>{
        editCurrentItem( id, newText)
    }
    return (
    <div className={styles.item}>
             <h3> title : {title} </h3>
             <p> text : {text}</p>
             {(edit === true) 
                ?<input type="text" placeholder='edit your text' value={newText} onChange={(e)=>setNewText(e.target.value)} />
                :null
             }
             <button onClick={deleteItemHandler}> delete </button>
             <button onClick={editItemHandler}  > {btnState} </button>
    </div> )
}
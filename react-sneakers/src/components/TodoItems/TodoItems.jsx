import styles from './TodoItems.module.scss'
import {TodoItem} from '../TodoItem/TodoItem'

export const TodoItems = ({todos,deleteCurrentTodo , editCurrentItem}) =>{
    
    return (
    <div className={styles.container}>
           {todos.length ? todos.map(item=>{
                 return  <TodoItem key={item.id} todo={item} deleteCurrentTodo={deleteCurrentTodo} editCurrentItem={editCurrentItem}/>
           }): "Тут еще нет ни одного задания !"
        }
    </div> )
}
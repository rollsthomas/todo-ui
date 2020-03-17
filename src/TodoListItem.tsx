import React from 'react' 


interface TodoListItemProps {
  todo: Todo;
  toggleTodo: ToggleTodo 
}

export const TodoListItem: React.FC<TodoListItemProps> = ({todo, toggleTodo}) => {
  
  return (
    <li >
      <label style={{textDecoration: todo.complete === true ? "line-through" : 'none'}}>
          <input type="checkbox" checked={todo.complete} onChange={() => toggleTodo(todo)}/>    
            <p>
              {todo.text}
            </p>    
      </label>
    </li>
  )
}
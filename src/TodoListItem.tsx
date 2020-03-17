import React from 'react' 


interface TodoListItemProps {
  todo: Todo;
  toggleTodo: ToggleTodo 
}

export const TodoListItem: React.FC<TodoListItemProps> = ({todo, toggleTodo}) => {
  
  return (
    <li >
      <label style={{textDecoration: todo.completed=== true ? "line-through" : 'none'}}>
          <input type="checkbox" checked={todo.completed} onChange={() => toggleTodo(todo)}/>    
            <p>
              {todo.description}
            </p>    
      </label>
    </li>
  )
}
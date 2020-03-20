import React from 'react'
import { TodoListItem } from './TodoListItem'
import { useMutation } from '@apollo/react-hooks';

interface TodoListProps {
  todos: Todo[];
  toggleTodo: ToggleTodo 
}

export const TodoList: React.FC<TodoListProps> = ({todos, toggleTodo}) =>  {
  return (
    <ul>
      {
        todos.map(todo => <TodoListItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />)
      }
    </ul>
  )
}

import React from 'react';
import {TodoList}  from './TodoList'
import {AddTodoForm} from './AddTodoForm'


const initialState: Array<Todo> = [
  {text: "Walk", complete: false}, 
  {text: "Write", complete: true}
]

const App: React.FC = () => {

  const [todos, setTodos] = React.useState(initialState)

  const toggleTodo: ToggleTodo  = selectedTodo => {
    const newTodos = todos.map(todo => {
    if(todo === selectedTodo){
      return {
        ...todo,
        complete: !todo.complete
      }
    }
    return todo
  })
    setTodos(newTodos)
  }
  const addTodo: AddTodo = newTodo => {
    setTodos([...todos, newTodo])
  }
  return  (
    <>
      <AddTodoForm addTodo={addTodo}/>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
    </>
  )
}

export default App;

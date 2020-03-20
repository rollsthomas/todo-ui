import React from 'react';
import {TodoList}  from './TodoList'
import {AddTodoForm} from './AddTodoForm'
import gql from 'graphql-tag'

import { useQuery } from '@apollo/react-hooks';

const initialState: Array<Todo> = [
  {description: "Walk", completed: false,id:"0"}, 
  {description: "Write", completed: true, id:"90"}
]

const GET_TODOS = gql`
  query{
    getTodos (userId: "a"){
      description
      id
      completed
    }
  }
`



const App: React.FC = () => {

  
  const { loading, error, data: responseQuery} = useQuery(GET_TODOS);
  const [todos, setTodos] = React.useState(initialState)



  const toggleTodo: ToggleTodo  = selectedTodo => {
    const newTodos = todos.map(todo => {
      console.log('todo',todo);
      if(todo === selectedTodo){
        return {
          ...todo,  
          completed:!todo.completed
        }
      }
      return todo
    })
    setTodos(newTodos)
  }


  if(loading) return <p>...Loading</p>
  if(error) throw new Error('Error fetching todos')
  return  (
    <>
      {/* <AddTodoForm addTodo={addTodo}/> */}
      <AddTodoForm />
      <TodoList todos={responseQuery.getTodos} toggleTodo={toggleTodo} />
    </>
  )
}

export default App;

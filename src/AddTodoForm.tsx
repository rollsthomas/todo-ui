import React,{useState, ChangeEvent, FormEvent} from 'react'
import gql from 'graphql-tag'
import { useMutation } from '@apollo/react-hooks'
interface AddTodoFormProps {
  // addTodo: AddTodo
}
const ADD_TODO = gql`
  mutation AddTodo($input: AddTodoInput!){
    addTodo (input: $input){
      id
      userId
      description
    }
  }
`

export const AddTodoForm: React.FC<AddTodoFormProps> = () => {
  const [addTodo, todos] = useMutation(ADD_TODO)
  const [description, setDescription] = useState("")
  const onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void = (e) => {
    setDescription(e.target.value)
  }
  const onClickHandler: (e: FormEvent<HTMLFormElement>) => void = (e) => {
    e.preventDefault()
    addTodo({
      variables: {
        input: {
          id: '_' + Math.random().toString(36).substr(2, 7),
          description,
          userId: 'a'
        }
      }
    })
    // description !== "" && addTodo(newTodo)
    setDescription("")
  }
  console.log('todos',todos);
  return (

    <form onSubmit={(e) => onClickHandler(e)}>
      <input type='description' value={description} onChange={onChangeHandler}/>
      <button type='submit' >Add todo</button>
    </form>
  )
}

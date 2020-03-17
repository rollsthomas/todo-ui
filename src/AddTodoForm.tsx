import React,{useState, ChangeEvent, FormEvent} from 'react'

interface AddTodoFormProps {
  // addTodo: AddTodo
}

export const AddTodoForm: React.FC<AddTodoFormProps> = () => {
  const [description, setDescription] = useState("")
  const onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void = (e) => {
    setDescription(e.target.value)
  }
  const onClickHandler: (e: FormEvent<HTMLFormElement>) => void = (e) => {
    e.preventDefault()
    const newTodo = {
      description
    }
    // description !== "" && addTodo(newTodo)
    setDescription("")
  }
  return (

    <form onSubmit={(e) => onClickHandler(e)}>
      <input type='description' value={description} onChange={onChangeHandler}/>
      <button type='submit' >Add todo</button>
    </form>
  )
}

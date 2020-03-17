import React,{useState, ChangeEvent, FormEvent} from 'react'

interface AddTodoFormProps {
  addTodo: AddTodo
}

export const AddTodoForm: React.FC<AddTodoFormProps> = ({addTodo}) => {
  const [text, setText] = useState("")
  const onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void = (e) => {
    setText(e.target.value)
  }
  const onClickHandler: (e: FormEvent<HTMLFormElement>) => void = (e) => {
    e.preventDefault()
    const newTodo = {
      text,
      complete: false
    }
    text !== "" && addTodo(newTodo)
    setText("")
  }
  return (

    <form onSubmit={(e) => onClickHandler(e)}>
      <input type='text' value={text} onChange={onChangeHandler}/>
      <button type='submit' >Add todo</button>
    </form>
  )
}

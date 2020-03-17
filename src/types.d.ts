
type Todo = {
  text: string;
  complete: boolean
}

type ToggleTodo = (selectedTodo: Todo) => void

type AddTodo = (newTodo: Todo) => void
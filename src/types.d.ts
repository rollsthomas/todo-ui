
type Todo = {
  description: string;
  completed: boolean;
  id: string;
}

type ToggleTodo = (selectedTodo: Todo) => void
type AddTodoInput = {
  description: string;
}
type AddTodo = (newTodo: AddTodoInput) => void
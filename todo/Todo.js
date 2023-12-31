import TodoListComponent from "./TodoList.js"
import TodoAddComponent from "./TodoAdd.js"
import { TodoListItemDeleteButtonComponent } from "./TodoListItem.js"

const TodoComponent = (items) => {
  const addToListComponent = TodoAddComponent()

  const todoListComponent = TodoListComponent(items)

  // const deleteButtonComponent = TodoListItemDeleteButtonComponent("node")

  const divEl = document.createElement("div")
  divEl.appendChild(addToListComponent)
  // divEl.appendChild(deleteButtonComponent)
  divEl.appendChild(todoListComponent)
  return divEl
}

export { TodoComponent }
export default TodoComponent

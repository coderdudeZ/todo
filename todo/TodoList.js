import TodoListItemComponent from "./TodoListItem.js"

const TodoListComponent = (items) => {
  // create list variable
  var listEl = document.createElement("ol")
  listEl.setAttribute("id", "list")

  items.forEach((item) => {
    // var listItemEl = createListItem(item)
    const todoListItemComponent = TodoListItemComponent(item)

    listEl.appendChild(todoListItemComponent)
  })

  return listEl
}

export default TodoListComponent

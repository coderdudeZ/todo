import TodoListItemComponent from "./TodoListItem.js"

const TodoAddComponent = () => {
  const AddToList = () => {
    // get reference to element with
    var inputEl = document.getElementById("item_input")

    if (inputEl.value === "") {
      alert("Sorry, you have to type something for me to add!")
      return
    }

    //create list element
    // var listItemEl = TodoListItemComponent(inputEl.value)

    // var listEl = document.getElementById("list")
    // listEl.appendChild(listItemEl) //append list item to list children

    window.state.items = [
      ...window.state.items,
      { done: false, name: inputEl.value },
    ]

    inputEl.value = ""
  }

  var inputEl = document.createElement("input")
  inputEl.setAttribute("id", "item_input")
  inputEl.setAttribute("type", "text")
  inputEl.setAttribute("placeholder", "New Task")

  var buttonEl = document.createElement("button")
  buttonEl.innerText = "Add To List"
  buttonEl.addEventListener("click", () => AddToList())

  var divEl = document.createElement("div")
  divEl.appendChild(inputEl)
  divEl.appendChild(buttonEl)

  return divEl
}

export default TodoAddComponent

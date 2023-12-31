const TodoListItemCheckboxComponent = (text) => {
  const toggleItemChecked = (el, index) => {
    var itemEl = el.parentNode
    var spanEl = itemEl.children[1]

    if (el.checked) {
      spanEl.setAttribute("class", "done")
      window.state.items = window.state.items.map((item, _index) => {
        if (_index === index) return { done: true, name: item.name }
        else return item
      })
    } else {
      spanEl.removeAttribute("class")
      window.state.items = window.state.items.map((item, _index) => {
        if (_index === index) return { done: false, name: item.name }
        else return item
      })
    }
  }

  //create done status checkbox (added items)
  var checkboxEl = document.createElement("input")
  checkboxEl.setAttribute("type", "checkbox")
  checkboxEl.setAttribute("name", "status")
  checkboxEl.setAttribute("value", text)

  const index = window.state.items.findIndex((item) => item.name === text)
  //console.debug(index)
  if (index > -1 && window.state.items[index].done) {
    checkboxEl.setAttribute("checked", "checked")
  }

  checkboxEl.addEventListener("click", (event) =>
    toggleItemChecked(event.target, index)
  )
  return checkboxEl
}
const TodoListItemDeleteButtonComponent = (text) => {
  const removeItem = (text) => {
    //var itemEl = el.parentNode
    //itemEl.remove()
    window.state.items = window.state.items.filter((item) => item.name !== text)
    console.debug(window.state.items)
  }

  var deleteButtonEl = document.createElement("button")
  deleteButtonEl.innerText = "x"

  deleteButtonEl.addEventListener("click", (event) => removeItem(text))
  return deleteButtonEl
}

const TodoListItemComponent = (item) => {
  //create list element
  var listItemEl = document.createElement("li")

  //create checkbox element
  const checkboxComponent = TodoListItemCheckboxComponent(item.name)

  //create text
  var textSpanEl = document.createElement("span")
  textSpanEl.innerText = item.name

  //create delete button
  const deleteButtonComponent = TodoListItemDeleteButtonComponent(item.name)

  listItemEl.appendChild(textSpanEl) //append span to list item children
  listItemEl.appendChild(deleteButtonComponent) //append delete button to list item children
  listItemEl.prepend(checkboxComponent) //prepend checkbox to input list

  return listItemEl
}

export { TodoListItemDeleteButtonComponent }
export default TodoListItemComponent

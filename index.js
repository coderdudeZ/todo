import TodoComponent from "./todo/index.js"

const createState = (state) => {
  let _state = { ...state }
  let _listener = () => {
    // console.debug(_state)
    App()
  }

  if (state === null || Object.keys(state).length === 0) {
    _state = {
      ...state,
      items: [
        { done: false, name: "GTL, Bruh" },
        { done: false, name: "Wage war with a bag of cats" },
        { done: false, name: "Find unicorn" },
        { done: false, name: "Setup ultimate plan for great success" },
        { done: false, name: "Tell both the other is prettier" },
        { done: false, name: "Climb Mountain of Doom" },
        { done: false, name: "Jump off (need parachute)" },
        { done: false, name: "Land on top of Andrew Tate" },
        { done: false, name: "Fix dinner" },
        { done: false, name: "Establish Dominance in Realm" },
        { done: false, name: "Mars Domination" },
        { done: false, name: "Underside of Flat Earth Domination" },
        { done: false, name: "Inside of Hollow Earth Domination" },
        { done: false, name: "Find unicorn clone" },
      ],
    }
  }

  return new Proxy(
    {},
    {
      // the get method to access the state data
      get: (target, key) => {
        return _state[key]
      },
      // The set method to modify the state data
      set: (target, key, value) => {
        _state[key] = value
        localStorage.setItem("state", JSON.stringify(_state))
        _listener()
        return true
      },
      registerListener: (listener) => {
        _listener = listener
      },
    }
  )
}

//localStorage.setItem("state", JSON.stringify({}))
const initState = JSON.parse(localStorage.getItem("state"))
window.state = createState(initState)

function App() {
  //get app render target
  var mainEl = document.getElementById("app")
  mainEl.innerHTML = null

  const todoComponent = TodoComponent(window.state.items)
  mainEl.appendChild(todoComponent)
}

App()

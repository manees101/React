import {store} from "./app/store"
import { Provider } from "react-redux"
import {AddTodo,Todos} from "./components"
import './App.css'

function App() {
  return (
    <Provider store={store}>
     <AddTodo/>
     <Todos/>
    </Provider>
  )
}

export default App

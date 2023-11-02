import { useEffect, useState } from "react"
import { useTodo,TodoContext,TodoProvider } from "./context"
import { TodoForm ,TodoItem} from "./components";

function App() {
   const [todos,setTodo]=useState([]);

   const addTodo=(todo)=>{
      setTodo((prev)=>[...prev,{id:Date.now(),...todo}])
   }

   const updateTodo=(id,todo)=>{
    setTodo((prev)=>prev.map((prevtodo)=> prevtodo.id===id ? todo:prevtodo))
   }

   const deleteTodo=(id)=>{
    setTodo((prev)=>prev.filter((todo)=>todo.id!==id));
   }

   const toggleCompleted=(id)=>{
    setTodo((prev)=>prev.map((prevtodo)=>prevtodo.id===id ? {
      ...prevtodo,completed:!prevtodo.completed
    } : prevtodo))
   }

   function setTodos(){
       localStorage.setItem("todos",JSON.stringify(todos));
   }
   function getTodos()
   {
    const todosList=JSON.parse(localStorage.getItem("todos"));

    if(todosList&&todosList.length>0)
    {
      setTodo(todosList);
    }
   }

   useEffect(getTodos,[]);
   useEffect(setTodos,[todos]);

  return (
    <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleCompleted}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                      <TodoForm/> 
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {todos.map((todo)=>(
                          <div key={todo.id} className="w-full">
                             <TodoItem todo={todo}/>
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App

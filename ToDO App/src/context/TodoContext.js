import { useContext,createContext } from "react";

export const TodoContext=createContext({
    todo:[
        {
            id:12,
            text:"test task",
            completed:false
        }
    ],
    theme:"dark",
    addTodo:(todo)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleCompleted:()=>{}
});

export const useTodo=()=>{
    return useContext(TodoContext);
}

export const TodoProvider=TodoContext.Provider;
import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState={
    todos:[{id:"01",text:"Hello world"}]
};

export const TodoSlice=createSlice({
    name:"todo",
    initialState,
    reducers:{
      addTodo:(state,action)=>{             
        const todo={
            id:nanoid(),
            text:action.payload.text
        }
        state.todos.push(todo);
      },
      removeTodo:(state,action)=>{
        state.todos=state.todos.filter((todo)=>todo.id!== action.payload.id)
      }
    }
})

export const {addTodo,removeTodo}=TodoSlice.actions; 

 const TodoReducer= TodoSlice.reducer;

 export default TodoReducer;
/*
state: holds current state
action: holds the data passed to the function
*/

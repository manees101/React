import { useState } from "react";

function App() {
 let [counter,setCounter]=useState(15);
 function addValue()
 {
    counter+=1;
    setCounter(counter);
 }
  return (
   <>
   <h1 className="">Counter : {counter} </h1>
   <button onClick={addValue}>Add value</button>
   <button>Remove Value</button>
   </>
  )
}

export default App

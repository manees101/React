import { useState } from 'react'

function App() {
  const [color, setColor] = useState("olive");
  return (
    <div className="w-full h-screen " style={{backgroundColor:color}}>
     <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
      <div className='flex flex-wrap justify-center bg-white gap-1 px-3 py-2 rounded-xl'>
        <button className='outline-none px-4 py-1 rounded-xl text-white' style={{backgroundColor:"red"}} onClick={()=>{
          setColor("red")
        }} >Red</button>
        <button className='outline-none px-4 py-1 rounded-xl text-white' style={{backgroundColor:"blue"}} onClick={()=>{setColor("blue")}}>blue</button>
        <button className='outline-none px-4 py-1 rounded-xl text-white' style={{backgroundColor:"yellow"}} onClick={()=>{setColor("yellow")}}>yellow</button>
        <button className='outline-none px-4 py-1 rounded-xl text-black' style={{backgroundColor:"white"}}  onClick={()=>{setColor("white")}}>white</button>
        <button className='outline-none px-4 py-1 rounded-xl text-white' style={{backgroundColor:"black"}}  onClick={()=>{setColor("black")}}>Black</button>
        <button className='outline-none px-4 py-1 rounded-xl text-white' style={{backgroundColor:"Green"}}  onClick={()=>{setColor("green")}}>Green</button>
        <button className='outline-none px-4 py-1 rounded-xl  text-white' style={{backgroundColor:"brown"}}  onClick={()=>{setColor("brown")}}>Brown</button>
        <button className='outline-none px-4 py-1 rounded-xl  text-white' style={{backgroundColor:"pink"}}  onClick={()=>{setColor("pink")}}>Pink</button>
        <button className='outline-none px-4 py-1 rounded-xl  text-white' style={{backgroundColor:"lightblue"}}  onClick={()=>{setColor("lightblue")}}>Light Blue</button>
        <button className='outline-none px-4 py-1 rounded-xl  text-white' style={{backgroundColor:"olive"}}  onClick={()=>{setColor("olive")}}>Olive</button>
        <button className='outline-none px-4 py-1 rounded-xl  text-white' style={{backgroundColor:"purple"}}  onClick={()=>{setColor("purple")}}>Purple</button>       
      </div>
     </div>
    </div>
    
  )
}

export default App

import { useState,useCallback,useEffect,useRef } from 'react'
function App() {
  const [length, setLength] = useState(8);
  const [charAllowed,setCharAllowed]=useState(false);
  const [numberAllowed,setNumberAllowed]=useState(false);
  const [password,setPassword]=useState("");

  const passwordGen=useCallback(()=>{
    let str="qwertyuiopasdfghjklzxcvbnm";
    let pass="";
    if(numberAllowed) str+="1234567890";
    if(charAllowed) str+="!@#$%^&*()_+";
   for(let i=1;i<=length;i++)
   {
     const idx=Math.floor(Math.random()*str.length);
     pass+=str[idx];
   }
   setPassword(pass);
  },[length,charAllowed,numberAllowed,setPassword]);
  const passRef=useRef(null);
  const CopyPassToClip=useCallback(()=>{
    passRef.current?.select();
    window.navigator.clipboard.writeText(password);
   },[password]);
  useEffect(()=>{
       passwordGen();
  },[numberAllowed,charAllowed,passwordGen,length])
  return (
    <>
     <div className='bg-gray-600 w-full max-w-md mx-auto rounded-lg text-orange-400 px-4 py-3 my-10 '>
     <h1 className='text-white text-2xl text-center py-3 '>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4 '> 
      <input type="text" value={password} ref={passRef} className='outline-none w-full py-1 px-3 bg-white' placeholder='Password' readOnly />
      <button className='bg-blue-700 outline-none text-white px-3 py-0.5 shrink-0' onClick={CopyPassToClip}>Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input id='passlength' type="range" min={8} max={40} value={length} className='cursor-pointer  bg-white' onChange={(e)=>{
            setLength(e.target.value);
          }}/>
          <label htmlFor="passlength">Length:{length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox" id="numberInput" className='cursor-pointer' defaultChecked={numberAllowed} onChange={()=>{
          setNumberAllowed((prev)=>!prev);
          }}/>
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox" id="numberChar" className='cursor-pointer' defaultChecked={charAllowed} onChange={()=>{
          setCharAllowed((prev)=>!prev);
          }}/>
          <label htmlFor="numberInput">Characters</label>
        </div>
      </div>
     </div>
    </>
  )
}

export default App

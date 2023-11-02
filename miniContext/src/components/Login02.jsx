import { useState } from "react"
import  useUserContext from "../context/UserContext02";

const Login=()=>{
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const {setUser}=useUserContext();
   const submit=(e)=>{
    e.preventDefault();
    setUser({username,password});
   }
    return(
        <div >
          <input type="text"
          value={username}
          onChange={(e)=>setUsername(e.target.value)}
           />
           <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
           <button onClick={submit}> Submit</button>
        </div>
    )
}

export default Login;
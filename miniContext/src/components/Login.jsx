import React from "react";
import UserContext from "../context/UserContext";
import { useState } from "react";
import { useContext } from "react";
// import {setUser} from "../context/UserContextProvider"

const Login=()=>{
  const [username,setUsername]=useState("");
  const [password,setPassord]=useState("");
  const {setUser}=useContext(UserContext);
  const handleSubmit=(e)=>{
       e.preventDefault();
       setUser({username,password});       
  }
    return(
        <div style={{display:"flex", 
        alignItems:"center", justifyContent:"center", flexDirection:"column", gap:"10px"}}>
            <input type="text" placeholder="Enter User name" value={username} onChange={(e)=>setUsername(e.target.value)}/>
            <input type="password" placeholder="Enter Password" value={password} onChange={(e)=>setPassord(e.target.value)}/>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login;
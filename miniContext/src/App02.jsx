import { useState } from "react";
import { UserProvider } from "./context/UserContext02";
import Login from "./components/Login02";
import Profile from "./components/Profile02"
import { useEffect } from "react";
const App02=()=>{
   const [user,SetUser]=useState({});

   const setUser=(user)=>{
    SetUser(user);
   }
   // useEffect(setUser,[user]);
   const getUser=()=>{
    return user;
   }

   return(
    <UserProvider value={{setUser,getUser}} >
     <Login ></Login>
      <Profile></Profile>
    </UserProvider>
   )
}

export default App02;
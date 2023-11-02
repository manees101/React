import { useState,useContext,createContext } from "react";

const UserContext=createContext({getUser:{},setUser:({user})=>{}});

export const useUserContext=()=>{
    return useContext(UserContext);
} 

export  const UserProvider=UserContext.Provider;
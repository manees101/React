import { useState,useContext,createContext } from "react";

const UserContext=createContext({getUser:{},setUser:({user})=>{}});

export default function useUserContext(){
    return useContext(UserContext);
} 

export  const UserProvider=UserContext.Provider;
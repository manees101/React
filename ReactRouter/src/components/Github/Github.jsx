import React from "react";
import { useLoaderData } from "react-router-dom";
function Github()
{
    const data=useLoaderData();
    return (
        <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl flex items-center flex-col gap-5">
            Name: {data.name}
            <br />
        Github Followers: {data.followers}

        <img src={data.avatar_url} alt="Love Babbar" className="w-30 h-30 "/>
        </div>
    )
}
export default Github;
export const getUserInfo=async()=>{
  const result=await  fetch("https://api.github.com/users/lovebabbar")
   return result;
}

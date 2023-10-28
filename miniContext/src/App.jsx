import Login from "./components/Login"
import Profile from "./components/Profile"
import UserContextProvider from "./context/UserContextProvider"
function App() {
  
  return (
    
      
          <UserContextProvider>
            <div style={{width:"100vw", backgroundColor:"beige", height:"100vh", padding:"0px",
         margin:"0px", boxSizing:"border-box", display:"flex", 
         alignItems:"center", justifyContent:"center", flexDirection:"column", gap:"10px"}}>
           <Login/>
    <Profile/>
         </div>
         
          </UserContextProvider>
   
  
  )
}

export default App

import  useUserContext from "../context/UserContext02";


const Profile=()=>{
const {getUser}=useUserContext();
const user=getUser();
return(
    <div>
        <h2>Welcome {user.username}</h2>
    </div>
)
}

export default Profile;
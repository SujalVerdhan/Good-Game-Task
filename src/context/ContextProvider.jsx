import React,{useState} from "react"
import UserContext from "./UserContext";
const UserContextProvider=({children})=>{
    const [condata,setConData]=useState(null)
    const [desc,setDesc]=useState("")
return <UserContext.Provider value={{condata,setConData,desc,setDesc}} > {children}</UserContext.Provider>
}
export default UserContextProvider
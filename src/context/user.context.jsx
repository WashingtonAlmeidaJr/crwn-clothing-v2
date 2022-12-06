import { createContext, useEffect, useState } from "react";
import { createUserDocumentFromAuth, onAuthStateChangedListener, signOutUser } from "../utils/firebase/firebase.utils";

//as the actual value you want to access
export const UserContext=createContext({
    currentUser:null,
    setCurrentUser:()=>null
})

//actual component
export const UserProvider=({children})=>{

    const [currentUser,setCurrentUser]=useState(null)
    const value={currentUser,setCurrentUser}
    
    signOutUser()

    useEffect(()=>{
       const unsubscribe = onAuthStateChangedListener((user)=>{
        if(user){
            createUserDocumentFromAuth(user)
            // console.log(user)
        }
        setCurrentUser(user)
    })
        return unsubscribe
    },[])


    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export default UserProvider
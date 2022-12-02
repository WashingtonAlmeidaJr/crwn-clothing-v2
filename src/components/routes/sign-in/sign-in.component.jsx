import { useEffect } from 'react'
import {auth,signInWithGooglePopup,signInWithGoogleRedirect,createUserDocumentFromAuth} from'../../utils/firebase/firebase.utils'
import{getRedirectResult} from 'firebase/auth'
import SignUpForm from '../../sign-up-form/sign-up-form.component'
const SignIn=()=>{

    const logGoogleUser=async()=>{
        const {user}=await signInWithGooglePopup()
        //could use the signInWithGoogleRedirect instead
        const userDocRef = await createUserDocumentFromAuth(user)
        console.log({user})
    }
    
    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>Sign in with Google</button>
            <SignUpForm/>

        </div>
    )
}

export default SignIn
import React, { useEffect, useState } from 'react'
import { GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import initializeAuthentication from '../Firebase/Firebase.init';



initializeAuthentication()
const provider = new GoogleAuthProvider();
const auth = getAuth();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [authError, setAuthError] = useState('')
    const [isLoading, setIsLoading] = useState(true)


    const handleGoogleSignin = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                console.log(result.user);
                setUser(result.user)
                setIsLoading(false)
            }).catch(error => {
                setAuthError(error.message)
                setIsLoading(false)
            })
    }


    const handleLogOut = () =>{
        signOut(auth)
        .then(()=>{
            setUser({})
        }).catch(error=>{
            console.log(error.message);
            setAuthError(error.message)
        })
    }

    //remember user state
    useEffect(()=>{
        onAuthStateChanged(auth, user =>{
            if(user){
                setUser(user)
            }
            else{
                setUser({})
            }
        })
    },[])

    return {
        user,
        isLoading,
        authError,
        handleGoogleSignin,
        handleLogOut

    }
        

    
}

export default useFirebase
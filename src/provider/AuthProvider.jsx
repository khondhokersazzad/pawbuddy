import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  }


  const registerUserwithPass = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,(user) => {
      if (user){

        setUser(user);
        setLoading(false);
      }
      return () => unsubscribe(); //cleanup function
    })
  },[])
  console.log(user);

  const authData = {
    registerUserwithPass,user , setUser, handleGoogleSignIn,loading
  };
  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;

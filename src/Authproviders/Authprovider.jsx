import { Children, useEffect, useState } from "react";
import { createContext } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from './../firebase/firebase.config';

export const Authcontext = createContext(null);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();


const Authprovider = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password,);
      };

      const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
      };

      const googleLogIn =()=>{
        // setLoading(true);
         return signInWithPopup(auth, provider);
       }

       const logOut = () => {
        setLoading(true);
        signOut(auth).then(() => {
          setLoading(false);
          setUser(null); // Reload the page
        });
      };

      const updatUserProfile = (name,photo) =>{
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
          })
      }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
          setUser(currentuser);
          setLoading(false);
        });
        return () => unsubscribe();
      }, []);
    const autinfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        updatUserProfile,
        googleLogIn,
        setUser
      };

    return (
        <Authcontext.Provider value={autinfo}>{Children}</Authcontext.Provider>
    );
};

export default Authprovider;
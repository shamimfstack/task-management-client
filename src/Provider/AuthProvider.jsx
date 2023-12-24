import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import auth from "../firebase/firebase.config";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  GithubAuthProvider,
} from "firebase/auth";

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

  const updateUserProfile = (name, photo) => {
    // setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
    // .then(() => {
    //     console.log('profile updated successfully!!!');
    // })
    // .catch((error) => {
    //     console.log("Profile update gone wrong!!!");
    // })
  }; 

  const googleSignIn = () =>{
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  }

  const githubSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider)

  }

  const logoutUser = () => {
    setLoading(true);
    return signOut(auth);
  }

  useEffect( () => {
    const unsubscribe = onAuthStateChanged(auth, createUser => {
      console.log(createUser);
      setUser(createUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    }
  }, [])

  const authInfo = {
    user,
    loading,
    createUser,
    signInUser,
    updateUserProfile,
    googleSignIn,
    githubSignIn,
    logoutUser
  };

  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;

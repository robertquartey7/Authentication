import { createContext, useContext, useState, useEffect } from "react";

import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

import { auth } from "../firebase-config";

const UserContext = createContext();

export const UserAuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const subscribe = () => {
      onAuthStateChanged(auth, (user) => {
        setCurrentUser(user);
      });
    };
    return subscribe();
  }, []);

  // create new users with firebase
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // signing in users the firebase
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  return (
    <UserContext.Provider value={{ createUser, signInUser, currentUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};

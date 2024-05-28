import app from "@/firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  User as FirebaseUser,
  UserCredential,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { ReactNode, createContext, useEffect, useState } from "react";

type TContext = {
  user: FirebaseUser | null;
  createUser: (email: string, password: string) => Promise<UserCredential>;
  loginUser: (email: string, password: string) => Promise<UserCredential>;
};

export const AuthContext = createContext<TContext | null>(null);

const auth = getAuth(app);

const AuthProviders = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<FirebaseUser | null>(null);

  const createUser = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginUser = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      return unSubscribe();
    };
  }, []);

  const authInfo: TContext = {
    user,
    createUser,
    loginUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;

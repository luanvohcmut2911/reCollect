import React, { useState, useEffect } from "react";
import { auth } from "../Firebase/config";
import { useNavigate, useLocation } from "react-router-dom";

export const AuthContext = React.createContext();

const unAuthPage = ["/home", "/profile", "/item-info", "/donate-info", "/user-info"];

export default function AuthProvider({ children }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribed = auth.onAuthStateChanged((userInfo) => {
      if (userInfo) {
        if (!unAuthPage.includes(location.pathname)) {
          navigate("/home");
        }
        return;
      }
      if (unAuthPage.includes(location.pathname)) {
        navigate("/");
      }
    });

    return () => {
      unsubscribed();
    };
  }, [user, navigate, location.pathname]);
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

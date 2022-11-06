import { createContext, useEffect, useReducer, useState } from "react";

// reducer
import { AuthReducer } from "./AuthReducer";

// initialState
const initialState = { authenticated: false, userData: {} };

export const AuthContext = createContext(initialState);

export const AuthContextProvider = ({ children }) => {
  // reducer
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  // intermediate object to store auth data
  const authData = {
    authenticated: state.authenticated,
    userData: state.userData,
  };

  // state to store/retrieve authdata to/from localstorage
  const [sessionInfo, setSessionInfo] = useState(authData);
  console.log(sessionInfo);

  // hook to load data from localstorage when page reloads
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("authData"));
    if (data) {
      setSessionInfo(data);
    }
  }, []);

  // hook to set state and store data in localstorage that triggers on state change
  useEffect(() => {
    setSessionInfo(authData);
    localStorage.setItem("authData", JSON.stringify(sessionInfo));
  }, [state]);

  return (
    <AuthContext.Provider
      value={{
        authenticated: sessionInfo.authenticated,
        userData: sessionInfo.userData,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

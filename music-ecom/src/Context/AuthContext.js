import { createContext, useContext, useEffect, useReducer } from "react";
import AuthReducerFunc from "../Reducers/AuthReducer";

const AuthInitialState = {
  token: null,
  IsLoggedIn: false,
};

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [AuthState, AuthDispatch] = useReducer(
    AuthReducerFunc,
    AuthInitialState
  );
  useEffect(() => {
    function oneTime(AuthDispatch) {
      console.log("I am here in USEEFFECT");
      if (localStorage.getItem("loginToken" !== null)) {
        console.log("Login is continuing");
        return AuthDispatch({ type: "LOGIN_PERSIST" });
      } else {
        console.log("Masla hgya ji USEEFFECT");
      }
    }
    oneTime(AuthDispatch);
  }, []);

  return (
    <>
      <AuthContext.Provider value={{ AuthState, AuthDispatch }}>
        {children}
      </AuthContext.Provider>
    </>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };

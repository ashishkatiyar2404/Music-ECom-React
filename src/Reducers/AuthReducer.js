const AuthInitialState = {
  token: null,
  IsLoggedIn: false,
};

function AuthReducerFunc(state, action) {
  switch (action.type) {
    case "LOGIN":
      // console.log(action.payload.encodedToken);
      // console.log("LOGIN DONE FROM LOGIN PAGE", AuthInitialState.token);
      return {
        ...state,
        ...action.payload.foundUser,
        IsLoggedIn: true,
        token: localStorage.getItem("loginToken"),
      };

    case "LOGOUT":
      return {
        ...AuthInitialState,
      };

    case "LOGIN_PERSIST":
      return {
        ...state,
        IsLoggedIn: true,
      };

    // IMCOMPLETE HAI YEH WALA AVI #GUEST_login
    case "GUEST_LOGIN":
      return {
        ...state,
        IsLoggedIn: true,
      };

    case "SIGN_UP":
      // console.log("I am inside SIGN_UP");
      return {
        ...state,
        ...action.payload.createdUser,
        token: localStorage.getItem("signUpToken"),
      };

    default:
      return {
        ...state,
      };
  }
}

export default AuthReducerFunc;

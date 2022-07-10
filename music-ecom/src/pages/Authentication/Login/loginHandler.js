// LOGIN HANDLER
import axios from "axios";

const loginHandler = (e, loginData, AuthDispatch, from, navigate) => {
  e.preventDefault();
  (async () => {
    try {
      const response = await axios.post("/api/auth/login", {
        ...loginData,
      });

      if (response.status === 200) {
        localStorage.setItem("loginToken", response.data.encodedToken);
        AuthDispatch({ type: "LOGIN", payload: response.data });

        // navigate(from, { replace: true });
        // THE ABOVE LINE IS NOTE WORKING CHECK LATER WHY
        navigate("/ProductList");
      }
    } catch (err) {
      console.log("ERROR HU MAI", err);
    }
  })();
};
export { loginHandler };

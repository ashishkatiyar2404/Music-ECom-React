import "./App.css";
import Home from "./pages/Home/Home";
import ProductList from "./pages/ProductList/ProductList";
import WishList from "./pages/WishList/WishList";
import { Routes, Route } from "react-router-dom";
import CartManagement from "./pages/Cart/CartManagement";
import Navbar from "./Components/Navbar/Navbar";
import Login from "./pages/Authentication/Login/Login";
import SignUp from "./pages/Authentication/SignUp/SignUp";
// import RequireAuth from "./pages/Authentication/RequireAuth";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/ProductList" element={<ProductList />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route
          path="/WishList"
          element={
            // <RequireAuth>
            <WishList />
            // </RequireAuth>
          }
        />
        <Route
          path="/CartManagement"
          element={
            // <RequireAuth>
            <CartManagement />
            //  </RequireAuth>
          }
        />
      </Routes>
    </>
  );
}

export default App;

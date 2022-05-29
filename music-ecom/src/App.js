import "./App.css";
import Home from "./pages/Home/Home";
import ProductList from "./pages/ProductList/ProductList";
import WishList from "./pages/WishList/WishList";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import CartManagement from "./pages/Cart/CartManagement";

function App() {
  return (
    // <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} exact />
      <Route path="/ProductList" element={<ProductList />} />
      <Route path="/WishList" element={<WishList />} />
      <Route path="/CartManagement" element={<CartManagement />} />
    </Routes>
    // </BrowserRouter>
  );
}

export default App;
